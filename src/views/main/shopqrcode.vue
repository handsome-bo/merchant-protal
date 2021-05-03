<template>
  <div>
    <div v-loading="loading">
      <div class="title-top">{{ $t("qrcodeandtemplatesize.shopqrcode") }}</div>
      <div class="sub-title">
        {{ $t("qrcodeandtemplatesize.shopqrcodesubtitle") }}
      </div>

      <div class="wrapper">
        <div class="outer-box">
          <ShopFilterCompnent
            ref="shopcomponent"
            @OnPreview="showQrCode($event)"
            :showPreview="true"
          />
        </div>
      </div>
      <div class="btn-group">
        <el-button type="danger" @click="download()" class="btn-orange">{{
          $t("qrcodeandtemplatesize.saveqrcode")
        }}</el-button>
        <el-button type="danger" @click="print()" class="btn-red">{{
          $t("qrcodeandtemplatesize.printqrcode")
        }}</el-button>
      </div>
      <el-dialog
        :visible.sync="showDialog"
        :show-close="true"
        center
        width="540x"
      >
        <div class="qrcode middle-center">
          <el-image :src="src" style="width: 360px"></el-image>
        </div>
      </el-dialog>
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
      shopList: [],
      showDialog: false,
      showShopFilter: false,
      src: "",
      selectShop: null,
      parameter: {
        ShopIDs: [],
        ShopNames: [],
      },
      canPrint: true,
      loading: false,
    };
  },
  mounted() {
    if (this.$store.state.userInfo.contacttype === this.GLOBAL.Shop) {
      const shops = this.$store.state.shopList;
      this.$refs.shopcomponent.shopItems = shops;
    }
  },
  methods: {
    showQrCode: function (event) {
      this.selectShop = event;
      const _this = this;
      const baseUrl = this.GLOBAL.BaseURL;
      this.$axios
        .post(baseUrl + "QR/GenerateShopQR", {
          StoreId: event.storeId,
          StoreName: event.storeName,
        })
        .then((res) => {
          console.log(res);
          _this.src = baseUrl + res;
          _this.showDialog = true;
        });
    },
    showFilter() {
      this.showShopFilter = true;
    },
    print() {
      const _this = this;
      if (!_this.validate()) {
        return;
      }
      _this.loading = true;
      this.$axios
        .post(this.GLOBAL.BaseURL + "QR/Print", _this.parameter, {
          responseType: "blob",
        })
        .then(function (res) {
          var blob = res.data;
          var reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onload = function (e) {
            var a = document.createElement("a");
            const fileName = "ShopQRCode";
            a.download = fileName;
            a.href = e.target.result;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          };
        })
        .finally((res) => {
          _this.loading = false;
        });
    },
    download() {
      const _this = this;
      if (!_this.validate()) {
        return;
      }
      _this.loading = true;
      this.$axios
        .post(this.GLOBAL.BaseURL + "QR/Download", _this.parameter, {
          responseType: "blob",
        })
        .then(function (res) {
          var blob = res.data;
          var reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onload = function (e) {
            var a = document.createElement("a");
            const fileName = "ShopQRCode";
            a.download = fileName;
            a.href = e.target.result;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          };
        })
        .finally((res) => {
          _this.loading = false;
        });
    },
    validate() {
      const _this = this;
      _this.parameter.ShopIDs = new Array();
      _this.parameter.ShopNames = new Array();
      _this.parameter.ShopIDs = new Array();
      _this.parameter.storeName = new Array();
      this.$refs.shopcomponent.shopItems.map((item) => {
        _this.parameter.ShopIDs.push(item.StoreID);
        _this.parameter.ShopNames.push(item.StoreName);
      });
      if (this.parameter.ShopIDs.length == 0) {
        this.$notify.error({
          title: " ",
          message: "请选择商铺",
        });
        return false;
      } else return true;
    },
  },
};
</script>

<style  scoped>
.wrapper {
  width: 470px;
  margin: 10px auto;
  font-size: 18px;
  border-radius: 10px;
  background-color: #d7c4a3;
}
.btn-group {
  width: 470px;
  margin: 10px auto;
  text-align: center;
}
.title {
  color: #222222;
  font-size: 24px;
  letter-spacing: 0;
  line-height: 32px;
  text-align: center;
  margin-bottom: 25px;
}
.sub-title {
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

.outer-box {
  height: 202px;
  width: 470px;
  border-radius: 10px;
  background-color: #d7c4a3;
}

.title {
  font-size: 20px;
  text-align: center;
  width: 90%;
}
.title-group {
  padding-right: 8px;
}
.shop-group {
  margin-top: 12px;
  height: 115px;
  overflow-y: scroll;
  padding-right: 8px;
}
.shop-item:first-child {
  margin-top: 0 !important;
}
.shop-item {
  height: 50px;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
.shop-name {
  width: 90%;
  text-align: center;
}
.add {
  height: 40px;
  width: 40px;
  border-radius: 10px;
  background-color: #c77900;
  color: #fff;
  cursor: pointer;
}
.close {
  width: 40px;
  cursor: pointer;
}

div::-webkit-scrollbar {
  width: 4px;
  height: 10px;
}
div::-webkit-scrollbar-track {
  background: #d7c4a3;
  border-radius: 2px;
}
div::-webkit-scrollbar-thumb {
  background: #edddc1;
  border-radius: 10px;
}
div::-webkit-scrollbar-thumb:hover {
  background: #edddc1;
}
div::-webkit-scrollbar-corner {
  background: #edddc1;
}
.qrcode {
  height: 510px;
}
/* shop******************************* */
.content {
  height: 655px;

  border-radius: 10px;
  background-color: #d7c4a3;
  padding: 15px;
}
.shop-list {
  height: 560px;

  border-radius: 10px;
  background-color: #ffffff;
  padding: 15px;
}
.shop-name {
  height: 50px;
  width: 394px;
  border-radius: 10px;
  background-color: #f6f1eb;
  margin-bottom: 10px;
}
.selected {
  color: #c77900 !important;
  background-color: #edddc1 !important;
}
.shop-list-item {
  height: 50px;
  border-radius: 10px;
  margin-top: 15px;
  font-size: 18px;
  cursor: pointer;
}
.search {
  height: 70px;
}
.search-input {
  height: 50px;
  width: 300px;
  border-radius: 10px;
  background-color: #ffffff;
  color: #222222;
  font-family: "Microsoft JhengHei";
  font-size: 18px;
  letter-spacing: 0;
  line-height: 24px;
  border: none;
  margin-right: 15px;
}
.header {
  height: 70px;
}
.back {
  color: #c77900;
  font-family: "Microsoft JhengHei";
  font-size: 18px;
  font-weight: bold;
}
.btn-top {
  width: 120px;
}
.el-dialog__header {
  display: none !important;
}
.printContent {
  display: none;
}
</style>