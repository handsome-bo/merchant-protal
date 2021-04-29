<template>
  <div>
    <div>
      <el-row class="title-top">
        {{ $t("evoucher.e_voucherstransactionhistory") }}
      </el-row>
      <el-row>
        <div class="filters flex">
          <div
            class="mg-right-20"
            v-if="$store.state.userInfo.contacttype != GLOBAL.Shop"
          >
            <ShopFilterCompnent ref="shopcomponent" />
          </div>
          <div class="filters flex">
            <DateFilterCompnent
              @search="search($event)"
              @download="download($event)"
            />
          </div>
        </div>
      </el-row>
    </div>

    <div class="title">{{ $t("evoucher.view") }}</div>
    <div class="wrapper" v-loading="loading">
      <div>
        <el-row class="dark el-row-top">
          <el-col :span="3"> {{ $t("evoucher.shop") }} </el-col>
          <el-col :span="3"> {{ $t("evoucher.location") }} </el-col>
          <el-col :span="4"> {{ $t("evoucher.shopno") }}</el-col>
          <el-col :span="4"> {{ $t("evoucher.e_vouchers") }}</el-col>
          <el-col :span="4">
            {{ $t("evoucher.transactionreferencenumber") }}</el-col
          >
          <el-col :span="3"> {{ $t("evoucher.transactiondate") }}</el-col>
          <el-col :span="3"> {{ $t("evoucher.amount") }}</el-col>
        </el-row>
        <el-row
          v-for="(item, index) in tableData"
          :key="item.ShopNumber"
          v-bind:class="{ dark: index % 2 == 1 }"
        >
          <div @click="handleClick(item)">
            <el-col :span="3">
              {{ lang === "en" ? item.StoreName : item.StoreNameSC }}
            </el-col>
            <el-col :span="3"> {{ item.StoreNo }} </el-col>
            <el-col :span="4"> {{ item.StoreCode }}</el-col>
            <el-col :span="4">
              {{ lang === "en" ? item.eVoucherName : item.eVoucherNameSC }}
            </el-col>
            <el-col :span="4"> {{ item.ReferenceNo }}</el-col>
            <el-col :span="3"> {{ item.eVoucheBurnDate | formatHour }}</el-col>
            <el-col :span="3">
              HK ${{ item.TotalAmountValue | MoneyFormat }}</el-col
            >
          </div>
        </el-row>
        <div class="content-bottom flex alig-center space-between">
          <div class="total-text">
            {{ $t("evoucher.totalpage") }} {{ totalPage }}，{{
              $t("evoucher.totalpageoftransaction")
            }}{{ totalCount }}
          </div>
          <div class="page-text">
            <el-pagination
              v-if="totalPage > 1"
              :page-size="pageSize"
              layout="prev, pager, next"
              :total="totalCount"
              @current-change="changePage"
            >
            </el-pagination>
          </div>
        </div>
      </div>
      <div class="bottom-summary flex align-center">
        <div class="total-amount">{{ $t("evoucher.totalamount") }}</div>
        <div>HK${{ totalAmountValue | MoneyFormat }}</div>
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
      loading: false,
      tableData: [],
      parameters: {
        ShopIDs: Array,
        SearchStartDate: "",
        SearchEndDate: "",
      },
      totalPage: 0,
      totalCount: 0,
      pageSize: 10,
      isMobile: false,
      totalData: [],
    };
  },
  mounted() {
    this.isMobile = this.$store.state.isMobile;
  },
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
        this.parameters.SearchStartDate = event[0];
        this.parameters.SearchEndDate = event[1];
      } else {
        this.$message.error("請選擇時間");
        return;
      }
      this.parameters.ShopIDs = new Array();
      if (this.$refs.shopcomponent) {
        const shops = this.$refs.shopcomponent.shopItems;
        shops.forEach((item) => {
          this.parameters.ShopIDs.push(item.StoreID);
        });
        if (this.parameters.ShopIDs.length == 0) {
          this.$message.error("請選擇商鋪");
          return;
        }
      } else {
        //shop
        const shopid = this.$store.state.shopList[0]["StoreID"];
        this.parameters.ShopIDs.push(shopid);
      }
      this.loading = true;
      _this.$axios
        .post("MerchantEvoucher/RetrieveEvoucherHistoryList", this.parameters)
        .then((res) => {
          if (res.eVoucherHistorylist) {
            _this.totalData = new Array();
            if (Array.isArray(res.eVoucherHistorylist.MP_EVoucherHistory)) {
              _this.totalData = res.eVoucherHistorylist.MP_EVoucherHistory;
            } else {
              _this.totalData.push(res.eVoucherHistorylist.MP_EVoucherHistory);
            }
            // _this.totalData = _this.tableData;
            _this.totalCount = this.totalData.length;
            _this.totalPage = Math.floor(_this.totalCount / _this.pageSize) + 1;
            _this.changePage(1)

          }
        })
        .finally((res) => {
          _this.loading = false;
        });
    },
    download(event) {
      const _this = this;
      if (event) {
        this.parameters.searchFrom = event[0];
        this.parameters.searchTo = event[1];
      } else {
        this.$message.error("請選擇時間");
        return;
      }
      this.parameters.ShopIDs = new Array();
      if (this.$refs.shopcomponent) {
        const shops = this.$refs.shopcomponent.shopItems;
        shops.forEach((item) => {
          this.parameters.ShopIDs.push(item.StoreID);
        });
        if (this.parameters.ShopIDs.length == 0) {
          this.$message.error("請選擇商鋪");
          return;
        }
      } else {
        //shop
        const shopid = this.$store.state.shopList[0]["StoreID"];
        this.parameters.ShopIDs.push(shopid);
      }

      let a = document.createElement("a");
      const para = qs.stringify(this.parameters);

      a.href =
        this.GLOBAL.BaseURL +
        "EVoucher/DownloadEVoucherHistoryExcelFile?" +
        para;
      a.click();
    },
    changePage(val) {
      this.tableData = [];
      var index = 0;
      for (
        var j = (val - 1) * this.pageSize;
        j < this.pageSize * val && j < this.totalData.length;
        j++
      ) {
        this.tableData[index] = this.totalData[j];
        index++;
      }
    },
  
  },
  computed: {
    totalAmountValue() {
      var s = 0;
      this.totalData.forEach((item) => {
        s += parseFloat(item.TotalAmountValue);
      });

      return s;
    },
    lang() {
      return localStorage.getItem("locale");
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
  justify-content: center;
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