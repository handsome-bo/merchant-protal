<template>
  <div class="outer-box">
    <div class="box">
      <div class="title-group flex space-between">
        <div class="title middle-center">選擇商舖</div>
        <div class="add middle-center" @click="showShopFilter">
          <i class="el-icon-plus"></i>
        </div>
      </div>
    
      <div class="shop-group" >
        <shop-item v-for="item in shopItems" :key="item.id" :pid="item.id"  :plabel="item.name" :showClose="true" @onRemove="remove()" />
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
        :shopItems="mockData"
        @onSubmit="onSbumit($event)"
      ></shop-Popup>
    </el-dialog>
  </div>
</template>

<script>
import shopPopup from "./shopPopup";
export default {
  props: {
    showAdd: Boolean,
    showPreview:Boolean,
    shopItems:[]
  },
  data() {
    return {
      isShowShopFilter: false,
      mockData: [
        {
          name: "商铺112",
          checked: false,
          id: '1',
        },
        {
          name: "7-11便利店",
          checked: false,
          id: '2',
        },
        {
          name: "Family mart",
          checked: false,
          id: '3',
        },
      ],
    };
  },
  methods: {
    showShopFilter() {
      this.isShowShopFilter = true;
    },
    closeShopFilter(event) {
      this.isShowShopFilter = false;
    },
    onSbumit(shopList) {
      console.log(shopList);
      this.isShowShopFilter = false;
      this.shopItems=shopList;
    },
    remove(id){
      // this.shopItems.splice(this.shopItems.indexOf(id),1);
    }
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
</style>