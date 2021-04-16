<template>
  <div class="outer-box">
    <div class="box">
      <div class="title-group flex space-between">
        <div class="title middle-center">{{ $t("evoucher.selectshop") }}</div>
        <div
          class="add middle-center"
          v-if="$store.getters.getUserRole != 'shop'"
          @click="showShopFilter"
        >
          <i class="el-icon-plus"></i>
        </div>
      </div>

      <div class="shop-group">
        <shop-item
          v-for="(item, index) in shopItems"
          :key="item.storeID"
          :pid="item.storeID"
          :plabel="item.storeNameTC"
          :showClose="canClose"
          :showPreview="showPreview"
          @onRemove="remove(index)"
          @onPreview="preview($event)"
        />
      </div>
    </div>
    <el-dialog
      :visible.sync="isShowShopFilter"
      :show-close="false"
      center
      width="1300px"
    >
      <shop-Popup
        @onClose="closeShopFilter($event)"
        @onSubmit="onSbumit($event)"
        ref="shoppopup"
        :isMutiple="isMutiple"
      ></shop-Popup>
    </el-dialog>
  </div>
</template>

<script>
import shopPopup from "./shopPopup";
export default {
  props: {
    showAdd: Boolean,
    showPreview: {
      Type: Boolean,
      default: () => false,
    },
    isMutiple: {
      Type: Boolean,
      default: () => true,
    },
  },
  data() {
    return {
      isShowShopFilter: false,
      shopItems: [],
      canClose: true,
    };
  },
  created() {
    //   this.$store.state
    if (this.$store.state.userRole == "shop") this.canClose = false;
  },
  methods: {
    showShopFilter() {
      this.isShowShopFilter = true;
    },
    closeShopFilter(event) {
      this.isShowShopFilter = false;
    },
    onSbumit(shopList) {
      this.isShowShopFilter = false;
      this.shopItems = shopList;
      this.$refs.shoppopup.initData();
      this.$emit("onChange", this.shopItems);
    },
    remove(index) {
      this.shopItems.splice(index, 1);
    },
    preview(event) {
      console.log("preview");
      console.log(event);
      this.$emit("preview", event);
    },
  },
  components: {
    shopPopup,
  },
};
</script>

<style  scoped>
.outer-box {
  height: 202px;
  width: 470px;
  border-radius: 10px;
  background-color: #d7c4a3;
}
.box {
  padding: 20px;
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
  padding-right: 5px;
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
</style>