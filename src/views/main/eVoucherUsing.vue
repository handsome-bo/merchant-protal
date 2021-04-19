<template>
  <div>
    <div class="title-top">{{ $t("useevoucher.useevouchers") }}</div>

    <div class="wrapper">
      <div class="title">{{ $t("useevoucher.membersidandphone") }}</div>
      <div>
        <input class="input-text" v-model="memberId" maxlength="20" />
      </div>
      <div class="title mg-top-25">{{ $t("useevoucher.shop") }}</div>
      <div>
        <div class="choose-box middle-center pointer" @click="showShopFilter()">
          {{
            selectShop == null
              ? $t("useevoucher.select")
              : selectShop.storeNameTC
          }}
        </div>
      </div>

      <div class="detail" v-if="detailData.length > 0">
        <div
          class="detail-item flex space-between"
          v-for="item in detailData"
          :key="item.EVoucherID"
        >
          <div class="detail-info">
            <div class="text-name">{{ item.EVoucherName }}</div>
            <div>
              {{ $t("useevoucher.quantity", { N: item.EVoucherQuantity }) }}
            </div>
            <div>
              {{
                $t("useevoucher.validtill", {Expirydate: item.ValideTo})
              }}
            </div>
          </div>
          <div class="right" v-if="showCounter">
            <counterComponent
              v-bind:value="1"
              v-bind:maxValue="item.EVoucherQuantity"
              @add="add($event)"
              @reduce="reduce($event)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="btn-group">
      <el-button
        type="danger"
        v-if="!showSubmitButton"
        @click="searchEvouchers()"
        class="btn-red"
        >{{ $t("useevoucher.checkevouchers") }}</el-button
      >
    </div>
    <div class="btn-group" v-if="showSubmitButton">
      <el-button type="danger" class="btn-white">{{
        $t("useevoucher.clear")
      }}</el-button>
      <el-button type="danger" class="btn-red">{{
        $t("useevoucher.submit")
      }}</el-button>
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
        :isMutiple="false"
      ></shop-Popup>
    </el-dialog>
  </div>
</template>

<script>
import counterComponent from "@/components/common/counter.vue";
import shopPopup from "../../components/shopPopup.vue";
export default {
  name: "eVoucherUsing",
  components: { counterComponent, shopPopup },
  data() {
    return {
      selectShop: null,
      showVoucher: false,
      showCounter: false,
      showSubmitButton: false,
      isShowShopFilter: false,
      detailData: [],
      memberId: "",
      parameter: {
        memberNoOrPhoneNo: "",
        storeID: "",
      },
    };
  },
  mounted() {},
  methods: {
    searchEvouchers() {
      const _this = this;
      if (_this.memberId == "") {
        this.$message.error("请输入会员信息");
        return;
      }
      _this.parameter.memberNoOrPhoneNo = _this.memberId;
      // this.detailData = [];
      _this.$axios
        .post("EVoucher/BurnRequest", _this.$QS.stringify(_this.parameter))
        .then((res) => {
          this.detailData = JSON.parse(res.data);
          if (_this.selectShop) {
            _this.showCounter = true;
            _this.showSubmitButton = true;
          }
        });
    },
    submitEvoucher() {},
    showShopFilter() {
      this.isShowShopFilter = true;
    },
    closeShopFilter(event) {
      this.isShowShopFilter = false;
    },
    onSbumit(shopList) {
      this.isShowShopFilter = false;
      this.selectShop = shopList[0];
      this.$refs.shoppopup.initData();
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
  padding: 20px;
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
</style>