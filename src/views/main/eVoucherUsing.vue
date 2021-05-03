<template>
  <div>
    <div class="title-top">{{ $t("useevoucher.useevouchers") }}</div>

    <div class="wrapper" v-loading="loading">
      <div class="title">{{ $t("useevoucher.membersidandphone") }}</div>
      <div>
        <input class="input-text" v-model="memberId" maxlength="20" />
      </div>
      <div class="title mg-top-25">{{ $t("useevoucher.shop") }}</div>
      <div>
        <div class="choose-box middle-center pointer" @click="showShopFilter()">
          {{
            selectShop == null ? $t("useevoucher.select") : selectShop.StoreName
          }}
        </div>
      </div>

      <div class="detail" v-if="showCounter == false && detailData.length > 0">
        <div
          class="detail-item flex space-between"
          v-for="item in detailData"
          :key="item.eVoucherID"
        >
          <div class="detail-info">
            <div class="text-name">{{ item.eVoucherName }}</div>
            <div>
              {{ $t("useevoucher.quantity", { N: item.eVoucherQuantity }) }}
            </div>
            <div>
              {{ $t("useevoucher.validtill", { Expirydate: item.expiryDate }) }}
            </div>
          </div>
        </div>
      </div>
      <div class="detail" v-if="showCounter == true && detailData.length > 0">
        <div
          class="detail-item flex space-between"
          v-for="(item, index) in detailData"
          :key="item.EVoucherID"
        >
          <div class="detail-info">
            <div class="text-name">{{ item.eVoucherName }}</div>
            <div>
              {{ $t("useevoucher.quantity", { N: item.EVoucherQuantity }) }}
            </div>
            <div>
              {{
                $t("useevoucher.validtill", {
                  Expirydate: item.eVoucherflexibleexpiryDate,
                })
              }}
            </div>
          </div>
          <div class="right">
            <counterComponent
              :value="1"
              :maxValue="item.EVoucherQuantity"
              @OnAdd="add($event, index)"
              @OnReduce="reduce($event, index)"
            />
          </div>
        </div>
        <div class="summary">
          <div class="flex space-between">
            <div>{{ $t("useevoucher.totalevouchersamount") }}</div>
            <div>HK$ {{ totalAmount | MoneyFormat }}</div>
          </div>
          <div class="flex space-between">
            <div>{{ $t("useevoucher.minimumspendingrequirement") }}</div>
            <div>HK$ {{ minAmountRequired | MoneyFormat }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-group">
      <el-button
        type="danger"
        v-if="!showSubmitButton"
        @click="searchEvouchers()"
        class="btn-red"
        >{{ $t("useevoucher.checkevouchers") }}</el-button
      >
    </div>
    <div class="btn-group" v-if="showSubmitButton">
      <el-button type="danger" @click="initData()" class="btn-white">{{
        $t("useevoucher.clear")
      }}</el-button>
      <el-button type="danger" @click="submitEvoucher()" class="btn-red">{{
        $t("useevoucher.submit")
      }}</el-button>
    </div>
    <el-dialog
      :visible.sync="isShowShopFilter"
      :show-close="false"
      center
      width="1300px"
    >
      <shop-Popup
        @onClose="closeShopFilter($event)"
        @onSubmit="onSbumit($event)"
        ref="shoppopup"
        :isMutiple="false"
      ></shop-Popup>
    </el-dialog>
  </div>
</template>

<script>
import counterComponent from "@/components/common/counter.vue";
import shopPopup from "../../components/shopPopup.vue";
export default {
  name: "eVoucherUsing",
  components: { counterComponent, shopPopup },
  data() {
    return {
      selectShop: null,
      showVoucher: false,
      showCounter: false,
      showSubmitButton: false,
      isShowShopFilter: false,
      detailData: [],
      memberId: "",
      parameter: {
        MemberId: "",
        StoreId: "",
        EvoucherList: [],
      },
      loading: false,
      totalAmount: 0,
      minAmountRequired: 0,
    };
  },
  mounted() {
    if (this.$store.state.userInfo.contacttype != this.GLOBAL.Super) {
      this.$router.go(-1);
    }
  },
  methods: {
    searchEvouchers() {
      const _this = this;
      _this.parameter.MemberId = "";
      this.parameter.StoreId = "";
      if (_this.memberId == "") {
        this.$message.error("请输入会员信息");
        return;
      }
      _this.parameter.MemberId = _this.memberId;
      let url = "MerchantEvoucher/RetrieveMemberEVoucherList";
      if (_this.selectShop) {
        url = "MerchantEvoucher/RetrieveMemberEVoucherListForShop";
        this.parameter.StoreId = _this.selectShop.StoreID;
      }
      _this.detailData = new Array();
      _this.loading = true;
      _this.$axios
        .post(url, _this.parameter)
        .then((res) => {
          if (res.errorCode != "0") {
            this.$message({
              showClose: true,
              message: _this.$t("common.errormessage"),
              type: "error",
            });
            return;
          }
          if (_this.selectShop) {
            if (Array.isArray(res.EvouchersList.MP_EvoucherUsage)) {
              _this.detailData = res.EvouchersList.MP_EvoucherUsage;
            } else {
              _this.detailData.push(res.EvouchersList.MP_EvoucherUsage);
            }
            _this.minAmountRequired = 0;
            _this.totalAmount = 0;
            _this.parameter.EvoucherList = new Array();
            _this.detailData.forEach((item) => {
              _this.totalAmount += parseFloat(item.faceValue);
              _this.minAmountRequired += parseFloat(
                item.transactionamountrequirement
              );
              const pmodel = {
                eVoucherID: item.EVoucherID,
                eVoucherQuantity: item.EVoucherQuantity,
                eVoucherValidFrom: item.eVoucherFlexiblestartDate,
                eVoucherValidTo: item.eVoucherflexibleexpiryDate,
              };
              _this.parameter.EvoucherList.push(pmodel);
            });
            _this.showCounter = true;
            _this.showSubmitButton = true;
          } else {
            _this.showCounter = false;
            if (Array.isArray(res.EVoucherList.MP_EVoucher)) {
              _this.detailData = res.EVoucherList.MP_EVoucher;
            } else {
              _this.detailData.push(res.EVoucherList.MP_EVoucher);
            }
          }
        })
        .finally((res) => {
          _this.loading = false;
        });
    },
    submitEvoucher() {
      const _this = this;
      _this.loading = true;
      _this.$axios
        .post(
          "MerchantEvoucher/SubmitEVoucherBurnWithDelegation",
          this.parameter
        )
        .then((res) => {
          if (res.errorCode == "0") {
            _this.initData();
          } else {
            this.$notify({
              title: "提示",
              message: "error",
              duration: 5000,
            });
          }
        })
        .finally((res) => {
          _this.loading = false;
        });
    },
    initData() {
      this.memberId = "";
      this.selectShop = null;
      this.detailData = [];
    },

    showShopFilter() {
      this.isShowShopFilter = true;
    },
    closeShopFilter(event) {
      this.isShowShopFilter = false;
    },
    onSbumit(shopList) {
      this.isShowShopFilter = false;
      if (Array.isArray(shopList)) {
        this.selectShop = shopList[0];
      } else {
        this.selectShop = shopList;
      }
    },
    add($event, index) {
      this.parameter.EvoucherList[index].eVoucherQuantity = $event;
    },
    reduce($event, index) {
      this.parameter.EvoucherList[index].eVoucherQuantity = $event;
    },
  },
};
</script>

<style  scoped>
@media (max-width: 768px) {
  .wrapper {
    height: 254px;
    width: 335px;
    border-radius: 10px;
    font-family: "Microsoft JhengHei";
  }
  .title {
    height: 27px;
    color: #222222;
    font-size: 20px;
    margin-bottom: 20px;
  }
  .input-text {
    height: 50px;
    width: 295px;
    border-radius: 10px;
    background-color: #ffffff;
  }
  .btn-red {
    height: 50px;
    width: 295px;
  }
}
@media (min-width: 768px) {
  .wrapper {
    width: 470px;
  }
  .title {
    font-size: 24px;
    margin-bottom: 25px;
  }
  .btn-group {
    width: 470px;
  }
}
.wrapper {
  margin: 10px auto;
  font-size: 18px;
  border-radius: 10px;
  background-color: #d7c4a3;
  padding: 20px;
}
.btn-group {
  margin: 10px auto;
  text-align: center;
}
.title {
  color: #222222;
  letter-spacing: 0;
  line-height: 32px;
  text-align: center;
}
.input-text {
  height: 50px;
  width: 100%;
  border-radius: 10px;
  background-color: #ffffff;
  text-align: center;
  color: #222222;
  font-family: Ubuntu;
  font-size: 18px;
  border: none;
}
.choose-box {
  height: 50px;
  width: 100%;
  border-radius: 10px;
  background-color: #ffffff;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  border: none;
  color: #c77900;
}
.detail {
  margin-top: 30px;
}
.detail-item {
  font-family: Ubuntu;
  font-size: 16px;
  border-top: 1px solid #b5a68b;
  padding: 30px 0 20px 0;
  line-height: 27px;
}
.text-name {
  font-size: 20px;
}
</style>