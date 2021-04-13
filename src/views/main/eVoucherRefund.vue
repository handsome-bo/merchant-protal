<template>
  <div>
    <div class="title-top"> 電子禮券每月退款申請 </div>
    <div>
      <div class="filters flex">
        <ShopFilterCompnent />
      </div>
    </div>

    
    <div class="wrapper">
      <div class="dark el-row-top middle-center"> 月結單下載 </div>
      <div class="list middle-center"
        v-for="(item, index) in tableData"
        :key="item.ShopNumber"
        v-bind:class="{ dark: index % 2 == 1 }"
      >
        <div class="item middle-center pointer">22/1/2021 - 21/2/2021</div>
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
  max-width: 470px;
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

 
.el-row-top {
  font-weight: bold;
  text-align: center;
  height: 54px;
  border-radius: 10px;
}
.dark {
  background-color: #f6f1eb;
}
.list{
  height: 70px;
  border-radius: 10px;
}
.item{
    height: 40px;
   width: 230px;
  border-radius: 10px;
  background-color: #C77900;
   
  margin: 15px auto ;
  color: #FFFFFF;
  font-family: Ubuntu;
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
</style>