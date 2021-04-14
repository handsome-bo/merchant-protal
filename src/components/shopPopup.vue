<template>
  <div class="shop-popup">
    <div class="header flex space-between">
      <div class="back pointer" @click="back">返回</div>
      <div>
        <el-button
          type="danger"
          class="btn-red btn-top"
          @click="handleSubmit"
          :disabled="selectedItems.length == 0"
          >確定</el-button
        >
      </div>
    </div>
    <div class="content">
      <div class="search">
        <input class="search-input" v-model="keywords" />
        <el-button type="danger" class="btn-orange" @click="searchAndSelected"
          >查找並選中</el-button
        >
        <el-button type="danger" class="btn-orange" @click="selectAll"
          >全選</el-button
        >
      </div>
      <div class="shop-list">
        <el-row :gutter="20">
          <el-col :span="8" v-for="item in shopList" :key="item.id">
            <div class="shop-list-item" @click="choose(item)">
              <div
                class="shop-name middle-center"
                :class="{ selected: item.checked }"
              >
                {{ item.storeNameTC }}
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
    };
  },
  created() {},

  mounted() {
    this.initData();
  },
  methods: {
    searchAndSelected() {
      const _this = this;
      this.shopList = this.shopItems.filter(function (shop) {
        return Object.keys(shop).some(function (key) {
          return String(shop[key]).toLowerCase().indexOf(_this.keywords) > -1;
        });
      });
      this.selectAll();
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
      this.$emit("onClose", true);
    },
    handleSubmit() {
      this.$emit("onSubmit", this.selectedItems);
    },
    choose(item) {
      if (!item.checked) {
        this.selectedItems.push(item);
      } else {
        this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
      }
      item.checked = !item.checked;
    },
    initData() {
      const _this = this;
      this.shopList = [];
      this.selectedItems = [];
      var storage = window.localStorage;
      const shortShops = storage.getItem("shortshops") || null;
      if (shortShops) {
        _this.shopList = JSON.parse(shortShops);
      } else {
        this.$axios.get("/shop/RetrieveShortShopList", {}).then((res) => {
          var tempdata = res.data;
          tempdata.forEach((item) => {
            item["checked"] = false;
          });
          _this.shopList = tempdata;
          var keydata = JSON.stringify(tempdata);
          storage.setItem("shortshops", keydata);
        });
      }
    },
  },
  props: {
    shopItems: {
      Type: Array,
      default: () => [],
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
</style>