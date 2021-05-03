<template>
  <div>
    <div class="title-top">
      {{ $t("mothlyreport.evouchersmonthlyreimbusement") }}
    </div>
    <div>
      <div class="filters flex">
        <ShopFilterCompnent
          ref="shopcomponent"
          @onChange="loadRecords()"
          v-if="$store.state.userInfo.contacttype != GLOBAL.Shop"
        />
      </div>
    </div>

    <div
      class="wrapper"
      v-loading="loading"
      v-if="$store.state.userInfo.contacttype == GLOBAL.Super"
    >
      <div class="dark el-row-top middle-center">
        {{ $t("mothlyreport.downloadmothlyreimbursementreport") }}
      </div>
      <div
        class="list middle-center"
        v-for="(item, index) in tableData"
        :key="item.StoreID"
        v-bind:class="{ dark: index % 2 == 1 }"
      >
        <div class="item middle-center pointer">
          {{ item.startDate | formatDateDDMMYY }} -
          {{ item.endDate | formatDateDDMMYY }}
        </div>
      </div>
    </div>
    <div class="wrappershop" v-loading="loading" v-else>
      <div
        v-loading="tableLoading"
        v-for="item in tableData"
        :key="item.storeID"
      >
        <div class="shopname">{{ item.storeName }}</div>
        <div class="dark el-row-top middle-center">
          <div class="head-title multiple">
            {{ $t("mothlyreport.downloadmothlyreimbursementreport") }}
          </div>
          <div class="head-title multiple">{{ $t("mothlyreport.status") }}</div>
          <div class="head-title multiple">
            {{ $t("mothlyreport.confirmandsubmit") }}
          </div>
        </div>
        <div
          class="list middle-center"
          v-for="(citem, index) in item.reports"
          :key="citem.reportscheduleid"
          v-bind:class="{ dark: index % 2 == 1 }"
        >
          <div class="item middle-center pointer multiple">
            {{ citem.dataStartDate }} -
            {{ citem.dataEndDate }}
          </div>
          <div class="middle-center multiple item-text">
            {{
              citem.confirmStatus == 1
                ? $t("mothlyreport.submitted")
                : $t("mothlyreport.notsubmitted")
            }}
          </div>
          <div class="middle-center multiple item-text">
            <el-button
              type="danger"
              @click="submitConfirmation(citem, item.storeID)"
              class="btn-red btn"
              v-if="citem.confirmStatus != 1"
              >{{ $t("mothlyreport.submitforreimbursement") }}</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShopFilterCompnent from "../../components/shop-filter";
export default {
  components: {
    ShopFilterCompnent,
  },
  data() {
    return {
      selectShop: "",
      tableData: [],
      parameters: {
        ShopIDs: [],
      },
      loading: false,
      canAcknowledge: false,
      tableLoading: false,
    };
  },
  mounted() {
    //  this.loadRecords();
    if (!this.$refs.shopcomponent) {
      this.loadRecords();
    }
  },
  methods: {
    handleClick(row) {
      this.selectShop = row.ShopNumber;
    },
    handleClose() {
      this.selectShop = "";
    },
    loadRecords() {
      const _this = this;

      this.parameters.ShopIDs = new Array();
      if (this.$refs.shopcomponent) {
        const shops = this.$refs.shopcomponent.shopItems;
        shops.forEach((item) => {
          this.parameters.ShopIDs.push(item.StoreID);
        });
      } else {
        //shop
        const shopid = this.$store.state.shopList[0]["StoreID"];
        this.parameters.ShopIDs.push(shopid);
      }
      this.loading = true;
      this.$axios
        .post(
          "MerchantEvoucher/RetrieveEVoucherReportScheduleList",
          _this.parameters
        )
        .then((res) => {
          if (res.errorCode != "0") {
            this.$message({
              showClose: true,
              message: _this.$t("common.errormessage"),
              type: "error",
            });
            return;
          }
          _this.tableData = [];
          if (!res.ShopReportScheduleList) {
            return;
          }
          const data = res.ShopReportScheduleList.MP_ShopReportSchedule;
          if (_this.parameters.ShopIDs.length > 1) {
            data.forEach((item) => {
              _this.tableData.push(item);
            });
          } else {
            _this.tableData.push(data);
          }
          _this.canAcknowledge = data.canAcknowledgeEvoucherSummaryReport;
          _this.tableData.map((item) => {
            item["reports"] = item.ReportSchedule.MP_ReportSchedule;
          });
        })
        .finally((res) => {
          _this.loading = false;
        });
    },
    submitConfirmation(item, storeId) {
      const _this = this;
      _this.tableLoading = true;
      this.$axios
        .post("MerchantEvoucher/SubmitEVoucherReportAcknowledgement", {
          StoreId: storeId,
          SheduleId: item.reportscheduleid,
        })
        .then((res) => {
          if (res.errorCode == 0) {
            item.confirmStatus = 1;
          } else {
            console.log(res.errorDescription);
          }
        })
        .finally((res) => {
          _this.tableLoading = false;
        });
    },
    download(item) {
      const _this = this;
      this.parameters.storeIDs = "";
      shops.forEach((item) => {
        this.parameters.storeIDs += item.storeID + ",";
      });
      let a = document.createElement("a");
      const para = this.$QS.stringify(this.parameters);
      a.href = this.GLOBAL.BaseURL + "EVoucher/DownloadEVoucherMonthly?" + para;
      a.click();
    },
  },
};
</script>

<style  scoped>
.wrapper {
  max-width: 470px;
  margin: 0 auto;
  margin-top: 40px;
  font-size: 18px;
}
.wrappershop {
  max-width: 710px;
  margin: 0 auto;
  margin-top: 40px;
  font-size: 18px;
}
.title {
  color: #222222;
  font-size: 24px;
  letter-spacing: 0;
  line-height: 32px;
  text-align: center;
  margin: 30px 0 10px 0;
}
.head-title {
  text-align: center;
}
.multiple {
  width: 33.3%;
  text-align: center;
}

.el-row-top {
  font-weight: bold;
  text-align: center;
  height: 54px;
  border-radius: 10px;
}
.dark {
  background-color: #f6f1eb;
}
.list {
  height: 70px;
  border-radius: 10px;
}
.item {
  height: 40px;
  width: 230px;
  border-radius: 10px;
  background-color: #c77900;
  margin: 15px auto;
  color: #ffffff;
  font-family: Ubuntu;
  font-size: 18px;
  font-weight: 500;
}

.item-text {
  height: 40px;

  font-size: 18px;
  font-weight: 500;
}

.filters {
  width: 470px;
  margin: 0 auto;
}
.title-top {
  margin: 50px 0 20px 0;
  color: #222222;
  font-size: 24px;
  letter-spacing: 0;
  line-height: 32px;
  text-align: center;
}
.btn {
  height: 40px;
  width: 120px;
  font-size: 18px;
}
.shopname {
  text-align: center;
  margin: 10px 0;
}
</style>