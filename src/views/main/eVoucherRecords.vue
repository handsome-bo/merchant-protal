<template>
  <div>
    <el-row class="title-top"> 電子禮券記錄查詢 </el-row>
    <el-row>
      <div class="filters flex">
        <div class="mg-right-20">
          <ShopFilterCompnent ref="shopcomponent" />
        </div>
        <div>
          <DateFilterCompnent
            @search="search($event)"
            @download="download($event)"
          />
        </div>
      </div>
    </el-row>

    <div class="title">查詢結果</div>
    <div class="wrapper">
      <div>
        <el-row class="dark el-row-top">
          <el-col :span="3"> 店舖 </el-col>
          <el-col :span="3"> 地點 </el-col>
          <el-col :span="4"> 商舖編號</el-col>
          <el-col :span="4"> 電子禮券名稱</el-col>
          <el-col :span="4"> 交易參考碼</el-col>
          <el-col :span="3"> 使用日期</el-col>
          <el-col :span="3"> 金額</el-col>
        </el-row>
        <el-row
          v-for="(item, index) in tableData"
          :key="item.ShopNumber"
          v-bind:class="{ dark: index % 2 == 1 }"
        >
          <div @click="handleClick(item)">
            <el-col :span="3"> {{ item.StoreNameTC }} </el-col>
            <el-col :span="3"> {{ item.ShopNo }} </el-col>
            <el-col :span="4"> {{ item.StoreCode }}</el-col>
            <el-col :span="4"> {{ item.EVoucherNameTC }}</el-col>
            <el-col :span="4"> {{ item.ReferenceNo }}</el-col>
            <el-col :span="3"> {{ item.BurnDate | formatHour }}</el-col>
            <el-col :span="3">
              HK ${{ item.TotalVoucherAmount | MoneyFormat }}</el-col
            >
          </div>
        </el-row>
        <div class="content-bottom flex alig-center space-between">
          <div class="total-text">總計頁數11，總計項目61</div>
          <div class="page-text">
            <el-pagination background layout="prev, pager, next" :total="100">
            </el-pagination>
          </div>
        </div>
      </div>
      <div class="bottom-summary flex align-center">
        <div class="total-amount">總計金額</div>
        <div>HK$61,000.00</div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "qs";
import ShopFilterCompnent from "../../components/shop-filter";
import DateFilterCompnent from "../../components/date-filter";
export default {
  name: "eVoucherRecords",
  components: {
    ShopFilterCompnent,
    DateFilterCompnent,
  },
  data() {
    return {
      selectShop: "",
      tableData: [],
      parameters: {
        storeIDs: "",
        searchFrom: "",
        searchTo: "",
      },
    };
  },
  mounted() {},
  methods: {
    handleClick(row) {
      this.selectShop = row.ShopNumber;
    },
    handleClose() {
      this.selectShop = "";
    },
    search(event) {
      const _this = this;
      if (event) {
        this.parameters.searchFrom = event[0];
        this.parameters.searchTo = event[1];
      }
      console.log(this.$refs.shopcomponent);
      const shops = this.$refs.shopcomponent.shopItems;
      this.parameters.storeIDs = "";
      shops.forEach((item) => {
        this.parameters.storeIDs += item.storeID + ",";
      });

      _this.$axios
        .post(
          "/EVoucher/SearchEVoucherHistoryRecords",
          qs.stringify(this.parameters)
        )
        .then((res) => {
          _this.tableData = JSON.parse(res.data);
        });
    },
  },
};
</script>

<style  scoped>
.wrapper {
  max-width: 1300px;
  margin: 10px auto;
  font-size: 18px;
  letter-spacing: 0;
  font-family: "Microsoft JhengHei";
  color: #222222;
}
.title {
  color: #222222;
  font-size: 24px;
  letter-spacing: 0;
  line-height: 32px;
  text-align: center;
  margin: 30px 0 10px 0;
}

.el-row {
  border-radius: 10px;
}
.el-row-top {
  font-weight: bold;
}
.dark {
  background-color: #f6f1eb;
}

.el-col {
  text-align: center;
  padding: 15px;
  word-break: break-all;
}
.content-bottom {
  margin-top: 15px;
}
.bottom-summary {
  height: 50px;
  border-radius: 10px;
  background-color: #d7c4a3;
  justify-content: flex-end;
  padding-right: 53px;
  margin-top: 20px;
}
.total-amount {
  margin-right: 30px;
}
.filters {
  width: 960px;
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
</style>