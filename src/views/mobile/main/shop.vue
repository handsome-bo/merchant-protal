<template>
  <div>
    <div class="title">{{ $t("shop.shoplist") }}</div>
    <div class="wrapper" v-loading="loading">
      <el-row class="dark el-row-top">
        <el-col :span="6"> {{ $t("shop.shopno") }} </el-col>
        <el-col :span="6"> {{ $t("shop.shopname_en") }} </el-col>
        <el-col :span="6"> {{ $t("shop.shopname_ch") }}</el-col>
        <el-col :span="6"> {{ $t("shop.shopcategory") }}</el-col>
      </el-row>
      <el-row
        v-for="(item, index) in tableData"
        :key="item.StoreNo"
        v-bind:class="{
          actived: selectShop == item.StoreNo,
          inactived: selectShop != item.StoreNo,
          dark: index % 2 == 1,
        }"
      >
        <el-row class="row-content">
          <div @click="handleClick(item)" class="pointer">
            <el-col :span="6"> {{ item.StoreNo }} </el-col>
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
            <el-col :span="2"> {{ $t("shop.salutation") }} </el-col>
            <el-col :span="3"> {{ $t("shop.jobtitle") }} </el-col>
            <el-col :span="3"> {{ $t("shop.phone") }} </el-col>
            <el-col :span="3"> {{ $t("shop.mobile") }} </el-col>
            <el-col :span="3">
              {{ $t("shop.receivee_vouchersusagereport") }}
            </el-col>
            <el-col :span="2"> {{ $t("shop.accountstatus") }} </el-col>
          </el-row>
          <div class="inner-content">
            <el-row
              v-for="citem in item.shopContacts"
              :key="citem.mobilenumber"
            >
              <el-col :span="2"> {{ citem.firstname }} </el-col>
              <el-col :span="2"> {{ citem.lastname }} </el-col>
              <el-col :span="4"> {{ citem.email }} </el-col>
              <el-col :span="2"> {{ toSalution(citem.salutation) }} </el-col>
              <el-col :span="3"> {{ citem.title }} </el-col>
              <el-col :span="3"> {{ citem.businessphonenumber }} </el-col>
              <el-col :span="3"> {{ citem.mobilenumber }} </el-col>
              <el-col :span="3">
                {{
                  citem.receivemonthlyevouchersummaryreport == 1
                    ? $t("common.yes")
                    : $t("common.no")
                }}
              </el-col>
              <el-col :span="2">
                {{ citem.status == 0 ? $t("common.actived") : $t("common.no") }}
              </el-col>
            </el-row>

            <div class="close flex align-center" v-if="!isOnlyOne">
              <span class="close-text" @click="handleClose">{{
                $t("shop.hide")
              }}</span>
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
      isMobile: false,
      loading: false,
      selectShop: "",
      tableData: [],
      isOnlyOne: false,
    
    };
  },
  mounted() {
    this.loadShops();
    this.isMobile = this.$store.state.isMobile;
  },
  methods: {
    handleClick(row) {
      this.selectShop = row.StoreNo;
    },
    handleClose() {
      this.selectShop = "";
    },
    loadShops() {
      const _this = this;
      this.loading = true;
      this.$axios
        .post("Shops/RetrieveShopList", {})
        .then((res) => {
          if (res.errorCode != "0") {
            this.$message({
              showClose: true,
              message: res.errorDescription,
              type: "error",
            });
            return;
          }
          _this.tableData = new Array();
          if (Array.isArray(res.shopDetailList.MP_ShopDetail)) {
            _this.tableData = res.shopDetailList.MP_ShopDetail;
          } else {
            _this.tableData.push(res.shopDetailList.MP_ShopDetail);
          }

          if (_this.tableData.length > 0) {
            _this.tableData.forEach((item) => {
              if (item.MerchantContactList) {
                item["shopContacts"] =
                  item.MerchantContactList.MP_MerchantContact;
              }
            });
            if (this.tableData.length == 1) {
              _this.selectShop = _this.tableData[0].StoreNo;
              _this.isOnlyOne = true;
            } else {
              _this.selectShop = "";
              _this.isOnlyOne = false;
            }
          }
        })
        .finally((res) => {
          _this.loading = false;
        });
    },
    toSalution(id) {
      var salutationstr = "";
      if (id == this.GLOBAL.Mr) salutationstr = this.$t("common.mr");
      if (id == this.GLOBAL.MS) salutationstr = this.$t("common.ms");
      if (id == this.GLOBAL.Mrs) salutationstr = this.$t("common.mrs");
      if (id == this.GLOBAL.Miss) salutationstr = this.$t("common.miss");
      if (id == this.GLOBAL.Other) salutationstr = this.$t("common.other");
      return salutationstr;
    },
    
  },
};
</script>

<style  scoped>
@media (max-width: 768px) {
  .wrapper {
    margin: 10px auto;
    font-size: 18px;
    letter-spacing: 0;
    font-family: "Microsoft JhengHei";
    color: #222222;
    text-align: center;
  }
  .title {
    height: 32px;
    font-size: 24px;
    letter-spacing: 0;
    line-height: 32px;
    text-align: center;
  }
}
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