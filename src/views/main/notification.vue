<template>
  <div class="wrapper" v-loading="loading">
    <div
      v-for="item in notificationDatas"
      :key="item.ReferenceNo"
      class="row"
      :class="{
        new: item.Status == GLOBAL.New,
        accepted: item.Status == GLOBAL.Accepted,
        cancelled: item.Status == GLOBAL.Cancelled,
      }"
      @click="viewDetail(item)"
    >
      <div class="flag middle-center" v-if="item.Status == GLOBAL.New">
        {{ $t("notification.new") }}
      </div>
      <div class="flag middle-center" v-else></div>
      <div class="date">{{ item.RequestDate | formatHour }}</div>
      <div class="title" :class="{ 'titleEn': Lang }">
        {{
          $t("notification.messagetemplate", {
            shopname: item.StoreName,
            N: item.TotalEVoucherQuantity,
            ReferenceNo: item.ReferenceNo,
          })
        }}
      </div>
      <div class="status">{{ getStatusName(item.Status) }}</div>
    </div>

    <div
      class="tip middle-center pointer"
      v-if="isShowNewTip"
      @click="getNotificaiton()"
    >
      {{ $t("notification.newnotification") }} <i class="el-icon-refresh" />
    </div>

    <el-dialog
      v-loading="handleLoading"
      :visible.sync="showDialog"
      center
      width="540"
    >
      <div class="dialog-title">
        {{ $t("notification.transactiondetails") }}
      </div>
      <div class="detail">
        <div class="detail-item">
          <div>{{ $t("notification.transactionreferencenumber") }}</div>
          <div>{{ selectItem.ReferenceNo }}</div>
        </div>
        <div
          class="detail-item"
          v-for="item in evoucherDetail"
          :key="item.eVoucherID"
        >
          <div>{{ Lang? item.eVoucherName:item.eVoucherNameSC }}</div>
          <div>{{ item.eVoucherQuantity }}{{ $t("notification.reward") }}</div>
        </div>

        <div class="detail-item">
          <div>{{ $t("notification.total") }}</div>
          <div>HK$ {{ selectItem.TotalEVoucherAmount | MoneyFormat }}</div>
        </div>
        <div class="detail-item">
          <div>{{ $t("notification.minimum") }}</div>
          <div>
            HK$ {{ selectItem.TotalTransactionAmountRequirement | MoneyFormat }}
          </div>
        </div>
      </div>
      <div class="btn-group" v-if="isShowConfirmBtn">
        <el-button
          type="primary"
          class="btn-white btn-confirm"
          @click="cancelledHandler"
          >{{ $t("button.cancel") }}</el-button
        >
        <el-button
          type="danger"
          class="btn-red btn-confirm"
          @click="acceptHandler()"
          >{{ $t("button.accept") }}</el-button
        >
      </div>
      <div class="btn-group handled dialogAccepted" v-else>
        {{ $t("button.accepted") }}
      </div>
    </el-dialog>
    <el-dialog
      v-loading="handleLoading"
      :visible.sync="showCancelledDialog"
      center
      width="540"
    >
      <div class="dialog-title">{{ $t("notification.confirmtext1") }}</div>
      <div class="detail">{{ $t("notification.confirmtext2") }}</div>
      <div class="btn-group">
        <el-button
          type="primary"
          class="btn-white btn-confirm"
          @click="showCancelledDialog = false"
          >{{ $t("button.back") }}</el-button
        >
        <el-button
          type="danger"
          class="btn-red btn-confirm"
          @click="confirmCancelled()"
          >{{ $t("button.ok") }}</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "notification",
  data() {
    return {
      showDialog: false,
      isShowConfirmBtn: false,
      isShowConfirDialog: false,
      showCancelledDialog: false,
      confirmedText: "",
      selectItem: {},
      evoucherDetail: [],
      notificationDatas: [],
      isShowNewTip: false,
      timer: null,
      loading: false,
      handleLoading: false,
      canlongpooling: false,
    };
  },
  created() {},
  mounted() {
    this.canlongpooling = false;
    this.getNotificaiton();
    this.timer = window.setInterval(() => {
      setTimeout(() => {
        this.longpooling();
      }, 5000);
    }, 10000);
  },
  methods: {
    viewDetail(item) {
      this.isShowConfirmBtn = item.Status == this.GLOBAL.New ? true : false;
      this.showDialog = true;
      this.selectItem = item;
      this.evoucherDetail = new Array();
      if (!Array.isArray(item.eVoucher.MP_EVoucher)) {
        this.evoucherDetail.push(item.eVoucher.MP_EVoucher);
      } else {
        item.eVoucher.MP_EVoucher.forEach((item) => {
          this.evoucherDetail.push(item);
        });
      }
    },
    cancelledHandler() {
      this.showDialog = false;
      this.showCancelledDialog = true;
    },
    confirmCancelled() {
      //to do
      const _this = this;
      _this.handleLoading = true;
      this.$axios
        .post("/Notification/SubmitConfirmEVoucherBurn", {
          ReferenceNo: _this.selectItem.ReferenceNo,
          IsAccepted: "true",
          StoreId: _this.selectItem.StoreID,
          MemberId: _this.selectItem.MemberID,
        })
        .then((res) => {
          if (res.errorCode == "0") {
            this.selectItem.Status = this.GLOBAL.Cancelled;
            this.showCancelledDialog = false;
          } else {
            this.$message({
              showClose: true,
              message: _this.$t("common.errormessage"),
              type: "error",
            });
          }
        })
        .finally((res) => {
          _this.handleLoading = false;
        });
    },
    acceptHandler() {
      const _this = this;
      _this.handleLoading = true;
      this.$axios
        .post("/Notification/SubmitConfirmEVoucherBurn", {
          ReferenceNo: _this.selectItem.ReferenceNo,
          IsAccepted: "true",
          StoreId: _this.selectItem.StoreID,
          MemberId: _this.selectItem.MemberID,
        })
        .then((res) => {
          if (res.errorCode == "0") {
            this.showDialog = false;
            this.selectItem.Status = this.GLOBAL.Accepted;
          }
        })
        .finally((res) => {
          _this.handleLoading = false;
        });
    },

    getNotificaiton() {
      const _this = this;
      _this.loading = true;
      this.$axios
        .post("/Notification/RetrieveNotificationList", {})
        .then((res) => {
          if (res.errorCode != "0") {
            this.$message({
              showClose: true,
              message: _this.$t("common.errormessage"),
              type: "error",
            });
            return;
          }
          _this.notificationDatas =
            res.evoucherTranactionNotificationList.MP_EvoucherTranactionNotification;
          _this.isShowNewTip = false;
          _this.canlongpooling = true;
        })
        .finally((res) => {
          _this.loading = false;
        });
    },
    getStatusName(status) {
      if (status == "915240000") return this.$t("button.acctepting");
      if (status == "1") return this.$t("button.accepted");
      if (status == "915240001") return this.$t("button.cancelled");
    },
    longpooling() {
      const _this = this;
      if (!_this.$store.state.shopList) {
        return;
      }
      if (!_this.canlongpooling) return;
      _this.canlongpooling = false;
      this.$axios
        .post("/Notification/GetNotificationMessageWithJson", {
          timeoutSeconds: 30,
          ShopList: _this.$store.state.shopList,
        })
        .then((res) => {
          _this.canlongpooling = true;
          var poolingData = Array();
          if (Array.isArray(res)) {
            poolingData = res;
          } else {
            poolingData.push(res);
          }
          if (poolingData) {
            poolingData.forEach((item) => {
              if (
                _this.notificationDatas.filter(
                  (c) => c.ReferenceNo != item.ReferenceNo
                ).length > 0
              ) {
                _this.isShowNewTip = true;
              }
            });
          }
        });
    },
  },
  destroyed() {
    clearTimeout(this.timer);
  },
  computed: {
    Lang() {
      var isEn = false;
      isEn = localStorage.getItem("locale") == "en" ? true : false;
      return isEn;
    },
  },
};
</script>

<style  scoped>
.wrapper {
  width: 1027px;
  margin: 100px auto;
  font-size: 18px;
  min-height: 300px;
}
.row {
  height: 60px;
  width: 1027px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.row {
  margin-top: 15px;
}
.new {
  background-color: #edddc1;
}
.accepted {
  background-color: #f6f1eb;
}
.accepted > .flag,
.cancelled > .flag {
  background: none;
}
.cancelled {
  background-color: #f4f4f4;
}
.flag {
  height: 40px;
  width: 56px;
  border-radius: 4px;
  background-color: #840522;
  color: #fff;
  text-align: center;
}

.date {
  height: 20px;
  width: 142px;
  color: #222222;
  font-family: Ubuntu;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 21px;
  text-align: center;
}
.title {
  height: 24px;
  width: 590px;
  color: #222222;
  font-family: Ubuntu;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 21px;
  text-align: center;
}
.titleEn {
  width: 470px;
}
.status {
  height: 24px;
  width: 54px;
  color: #e70048;
  font-family: "Microsoft JhengHei";
  font-size: 18px;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
}
.tip {
  height: 50px;
  width: 166px;
  border-radius: 10px;
  background-color: #e70048;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.25);
  color: #ffffff;
  font-family: "Microsoft JhengHei";
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
  position: fixed;
  z-index: 10;
  left: 45%;
  bottom: 40px;
}
.dialog-title {
  color: #222222;
  font-family: "Microsoft JhengHei";
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 40px;
  text-align: center;
}
.detail {
  margin: 30px auto;
  width: 80%;
  font-family: "Microsoft JhengHei";
  font-size: 18px;
}
.detail-item {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e3e3e3;
}
.btn-group {
  display: flex;
  justify-content: center;
}
.btn-confirm {
  width: 120px;
  border: 1px solid #e70048;
  margin: 20px;
}
.handled {
  padding: 30px;
  text-align: center;
  font-size: 18px;
}
.dialogAccepted {
  color: #840522;
}
</style>