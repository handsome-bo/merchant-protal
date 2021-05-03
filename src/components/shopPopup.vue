<template>
  <div class="shop-popup">
    <div class="header flex space-between">
      <div class="back pointer" @click="back">{{ $t("evoucher.back") }}</div>
      <div>
        <el-button
          type="danger"
          class="btn-red btn-top"
          @click="handleSubmit"
          :disabled="selectedItems.length == 0"
          >{{ $t("evoucher.confirm") }}</el-button
        >
      </div>
    </div>
    <div class="content" v-loading="loading">
      <div class="search">
        <input class="search-input" v-model="keywords" @keyup.enter="searchAndSelected()" />
        <el-button
          type="danger"
          class="btn-orange"
          @click="searchAndSelected"
          >{{ $t("evoucher.search") }}</el-button
        >
        <el-button
          type="danger"
          class="btn-orange"
          v-if="isMutiple"
          @click="selectAll"
          >{{ $t("evoucher.selectall") }}</el-button
        >
      </div>
      <div class="shop-list">
        <el-row :gutter="20">
          <el-col :span="8" v-for="item in shopList" :key="item.StoreID">
            <div class="shop-list-item" @click="choose(item)">
              <div
                class="shop-name middle-center"
                :class="{ selected: item.checked }"
              >
                {{ item.StoreName }}
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keywords: "",
      shopList: [],
      selectedItems: [],
      tempDatas: [],

      loading: false,
    };
  },
  created() {},

  mounted() {
    this.initData();
  },
  destroyed() {
    this.initData();
    console.log("destroyed");
  },
  methods: {
    searchAndSelected() {
      const _this = this;
      this.initData();
      if (_this.keywords.length > 0) {
        this.shopList = this.shopList.filter(function (shop) {
          return Object.keys(shop).some(function (key) {
            return String(shop[key]).toLowerCase().indexOf(_this.keywords) > -1;
          });
        });
      }
    },

    selectAll() {
      this.shopList.forEach((item) => {
        item.checked = true;
        if (this.selectedItems.indexOf(item) < 0) {
          this.selectedItems.push(item);
        }
      });
    },
    back() {
      this.initData();
      this.$emit("onClose", true);
    },
    handleSubmit() {
      console.log(this.selectedItems);
      this.$emit("onSubmit", this.selectedItems);
      this.initData();
    },
    choose(item) {
      if (this.isMutiple == true) {
        if (!item.checked) {
          this.selectedItems.push(item);
        } else {
          this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
        }
      } else {
        this.selectedItems = [];
        this.shopList.forEach((item) => {
          item["checked"] = false;
        });
        if (!item.checked) {
          this.selectedItems.push(item);
        } else {
          this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
        }
      }
      item.checked = !item.checked;
    },
    initData() {
      const _this = this;
      this.shopList = [];
      this.selectedItems = [];
      const shortShops = this.$store.state.shopList;
      if (shortShops.length > 0) {
        shortShops.forEach((item) => {
          item["checked"] = false;
        });
        _this.shopList = shortShops;
        _this.$store.commit("updateShopList", _this.shopList);
      } else {
        _this.loading = true;
        this.$axios
          .post("Shops/RetrieveShortShopList", {})
          .then((res) => {
            if (res.errorCode != "0") {
              this.$message({
                showClose: true,
                message: res.errorDescription,
                type: "error",
              });
              return;
            }
            var tempdata = res.shopList.Shop || [];
            tempdata.forEach((item) => {
              item["checked"] = false;
            });
            _this.shopList = tempdata;
            _this.$store.commit("updateShopList", _this.shopList);
          })
          .finally((res) => {
            _this.loading = false;
          });
      }
    },
  },
  props: {
    isMutiple: {
      Type: Boolean,
      default: () => true,
    },
  },
};
</script>

<style  scoped>
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
  overflow-y: scroll;
  overflow-x: hidden;
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
  padding: 5px;
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
</style>