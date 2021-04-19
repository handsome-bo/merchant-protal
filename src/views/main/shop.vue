<template>
  <div>
    <div class="title">{{ $t("shop.shoplist") }}</div>
    <div class="wrapper">
      <el-row class="dark el-row-top">
        <el-col :span="6"> {{ $t("shop.shopno") }} </el-col>
        <el-col :span="6"> {{ $t("shop.shopname_en") }} </el-col>
        <el-col :span="6"> {{ $t("shop.shopname_ch") }}</el-col>
        <el-col :span="6"> {{ $t("shop.shopcategory") }}</el-col>
      </el-row>
      <el-row
        v-for="(item, index) in tableData"
        :key="item.storeCode"
        v-bind:class="{
          actived: selectShop == item.StoreCode,
          inactived: selectShop != item.StoreCode,
          dark: index % 2 == 1,
        }"
      >
        <el-row class="row-content">
          <div @click="handleClick(item)" class="pointer">
            <el-col :span="6"> {{ item.StoreCode }} </el-col>
            <el-col :span="6"> {{ item.StoreName }} </el-col>
            <el-col :span="6"> {{ item.StoreNameTC }}</el-col>
            <el-col :span="6"> {{ item.StoreSubcategory }}</el-col>
          </div>
        </el-row>
        <div class="inner">
          <el-row class="inner-header">
            <el-col :span="2"> {{ $t("shop.firstname") }} </el-col>
            <el-col :span="2"> {{ $t("shop.lastname") }} </el-col>
            <el-col :span="4"> {{ $t("shop.email") }} </el-col>
            <el-col :span="2"> {{ $t("shop.salution") }} </el-col>
            <el-col :span="2"> {{ $t("shop.jobtitle") }} </el-col>
            <el-col :span="4"> {{ $t("shop.phone") }} </el-col>
            <el-col :span="3"> {{ $t("shop.mobile") }} </el-col>
            <el-col :span="3">
              {{ $t("shop.receivee_vouchersusagereport") }}
            </el-col>
            <el-col :span="2"> {{ $t("shop.accountstatus") }} </el-col>
          </el-row>
          <div class="inner-content">
            <el-row v-for="citem in item.ShopContact" :key="citem.cellPhone">
              <el-col :span="2"> {{ citem.Name }} </el-col>
              <el-col :span="2"> {{ citem.SurName }} </el-col>
              <el-col :span="4"> {{ citem.Email }} </el-col>
              <el-col :span="2"> {{ citem.Title }} </el-col>
              <el-col :span="2"> {{ citem.Persition }} </el-col>
              <el-col :span="4"> {{ citem.Cellphone }} </el-col>
              <el-col :span="3"> {{ citem.Phone }} </el-col>
              <el-col :span="3">
                {{ citem.IsAcceptedReport == 1 ? "是" : "否" }}
              </el-col>
              <el-col :span="2">
                {{ citem.ContactStatus == 1 ? "生效" : "否" }}
              </el-col>
            </el-row>

            <div class="close flex align-center">
              <span class="close-text" @click="handleClose">{{$t('shop.hide')}}</span>
            </div>
          </div>
        </div>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "shop",
  data() {
    return {
      selectShop: "",
      tableData: [
        {
          ShopNumber: "1001",
          ShopNameCN: "7-11便利店",
          ShopNameEN: "Seven Eleven",
          Category: "杂货商铺",
        },
        {
          ShopNumber: "1002",
          ShopNameCN: "7-11便利店",
          ShopNameEN: "Seven Eleven",
          Category: "杂货商铺",
        },
        {
          ShopNumber: "1003",
          ShopNameCN: "7-11便利店",
          ShopNameEN: "Seven Eleven",
          Category: "杂货商铺",
        },
        {
          ShopNumber: "1004",
          ShopNameCN: "7-11便利店",
          ShopNameEN: "Seven Eleven",
          Category: "杂货商铺",
        },
        {
          ShopNumber: "1005",
          ShopNameCN: "7-11便利店",
          ShopNameEN: "Seven Eleven",
          Category: "杂货商铺",
        },
      ],
    };
  },
  mounted() {
    this.loadShops();
  },
  methods: {
    handleClick(row) {
      this.selectShop = row.StoreCode;
    },
    handleClose() {
      this.selectShop = "";
    },
    loadShops() {
      const _this = this;
      this.$axios.post("Shop/RetrieveShopList", {}).then((res) => {
        _this.tableData = JSON.parse(res.data);
        console.log(_this.tableData);
      });
    },
  },
};
</script>

<style  scoped>
.wrapper {
  width: 1300px;
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
.actived {
  background-color: #d7c4a3;
}
.inner {
  width: 95%;
  margin: 0 auto;
  margin-bottom: 10px;
  display: block;
}
.actived > .inner {
  display: block;
}
.inactived > .inner {
  display: none;
}
.inner-header,
.inner-content {
  background-color: #ffffff;
  border-radius: 10px;
}
.inner-content {
  margin-top: 2px;
  padding: 3px;
}
.el-col {
  text-align: center;
  padding: 15px;
  word-break: break-all;
}
.inner-header > .el-col {
  padding: 5px;
}
.close {
  border-radius: 10px;
  background-color: #edddc1;
  justify-content: center;
  height: 55px;
}
.close-text {
  color: #c77900;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
</style>