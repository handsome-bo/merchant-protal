<template>
  <div>
    <el-row class="title-top"> {{$t("evoucher.e_voucherstransactionhistory")}} </el-row>
    <el-row>
      <div class="filters flex">
        <div class="mg-right-20">
          <ShopFilterCompnent />
        </div>
        <div>
          <DateFilterCompnent />
        </div>
      </div>
    </el-row>

    <div class="title">{{$t("evoucher.view")}}</div>
    <div class="wrapper">
      <div>
        <el-row class="dark el-row-top">
          <el-col :span="3"> {{$t("evoucher.shop")}} </el-col>
          <el-col :span="3"> {{$t("evoucher.location")}} </el-col>
          <el-col :span="4"> {{$t("evoucher.shopno")}}</el-col>
          <el-col :span="4"> {{$t("evoucher.e_vouchers")}}</el-col>
          <el-col :span="4"> {{$t("evoucher.transactionreferencenumber")}}</el-col>
          <el-col :span="3"> {{$t("evoucher.transactiondate")}}</el-col>
          <el-col :span="3"> {{$t("evoucher.amount")}}</el-col>
        </el-row>
        <el-row
          v-for="(item, index) in tableData"
          :key="item.ShopNumber"
          v-bind:class="{ dark: index % 2 == 1 }"
        >
          <div @click="handleClick(item)">
            <el-col :span="3"> {{ item.ShopName }} </el-col>
            <el-col :span="3"> {{ item.Location }} </el-col>
            <el-col :span="4"> {{ item.ShopNumber }}</el-col>
            <el-col :span="4"> {{ item.VoucherName }}</el-col>
            <el-col :span="4"> {{ item.TradeNumber }}</el-col>
            <el-col :span="3"> {{ item.CreateDate }}</el-col>
            <el-col :span="3"> HK ${{ item.Amount }}</el-col>
          </div>
        </el-row>
        <div class="content-bottom flex alig-center space-between">
          <div class="total-text">{{$t("evoucher.totalpage")}}11，{{$t("evoucher.totalpageoftransaction")}}61</div>
          <div class="page-text">
            <el-pagination background layout="prev, pager, next" :total="100">
            </el-pagination>
          </div>
        </div>
      </div>
      <div class="bottom-summary flex align-center">
        <div class="total-amount">{{$t("evoucher.totalamount")}}</div>
        <div>HK$61,000.00</div>
      </div>
    </div>
  </div>
</template>

<script>
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
      tableData: [
        {
          ShopName: "7-11便利店",
          Location: "九龍城",
          ShopNumber: "1112",
          VoucherName: "杂货商铺",
          TradeNumber: "TG9878653",
          CreateDate: "2020-01-09",
          Amount: 2000.0,
        },
        {
          ShopName: "7-11便利店",
          Location: "九龍城",
          ShopNumber: "1123",
          VoucherName: "杂货商铺",
          TradeNumber: "TG9878653",
          CreateDate: "2020-01-09",
          Amount: 2000.0,
        },
        {
          ShopName: "7-11便利店",
          Location: "九龍城",
          ShopNumber: "1132",
          VoucherName: "杂货商铺",
          TradeNumber: "TG9878653",
          CreateDate: "2020-01-09",
          Amount: 2000.0,
        },
      ],
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
.content-bottom{
  margin-top:15px
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