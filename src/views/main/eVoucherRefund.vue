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
          v-if="$store.getters.getUserRole === 'superaccount'"
        />
      </div>
    </div>

    <div class="wrapper" v-if="$store.getters.getUserRole === 'superaccount'">
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
    <div class="wrappershop">
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
        v-for="(item, index) in tableData"
        :key="item.StoreID"
        v-bind:class="{ dark: index % 2 == 1 }"
      >
        <div class="item middle-center pointer multiple">
          {{ item.startDate | formatDateDDMMYY }} -
          {{ item.endDate | formatDateDDMMYY }}
        </div>
        <div class="middle-center multiple item-text">
          {{
            item.status == 1
              ? $t("mothlyreport.submitted")
              : $t("mothlyreport.notsubmitted")
          }}
        </div>
        <div class="middle-center multiple item-text">
          <el-button
            type="danger"
            @click="submitConfirmation(item)"
            class="btn-red btn"
            v-if="item.status != 1"
            >{{ $t("mothlyreport.submitforreimbursement") }}</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShopFilterCompnent from "../../components/shop-filter";
export default {
  name: "eVoucherRefund",
  components: {
    ShopFilterCompnent,
  },
  data() {
    return {
      selectShop: "",
      tableData: [],
      parameters: {
        storeIDs: "",
        monthes: 1,
      },
    };
  },
  mounted() {
    this.loadRecords();
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
      if (this.$refs.shopcomponent) {
        const shops = this.$refs.shopcomponent.shopItems;
        this.parameters.storeIDs = "";
        if (shops) {
          shops.forEach((item) => {
            this.parameters.storeIDs += item.storeID + ",";
          });
        }
      }
      this.$axios
        .post("/EVoucher/MonthlyReport", _this.$QS.stringify(_this.parameters))
        .then((res) => {
          const data = JSON.parse(res.data);
          data.map((item) => {
            item.forEach((va) => {
              _this.tableData.push(va);
            });
          });
        });
    },
    submitConfirmation(item) {},
    download(item) {
      // const _this = this;
      // this.parameters.storeIDs = "";
      // shops.forEach((item) => {
      //   this.parameters.storeIDs += item.storeID + ",";
      // });
      // let a = document.createElement("a");
      // const para = this.$QS.stringify(this.parameters);
      // a.href =
      //   "https://localhost:44316/EVoucher/DownloadEVoucherMonthly?" +
      //   para;
      // a.click();
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
</style>