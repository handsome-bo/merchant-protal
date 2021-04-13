<template>
  <div>
    <div class="title-top">使用電子禮券</div>

    <div class="wrapper">
      <div class="title">會員號碼／電話號碼</div>
      <div>
        <input class="input-text" maxlength="20" />
      </div>
      <div class="title mg-top-25">選擇商舖</div>
      <div>
        <div class="choose-box middle-center pointer">選擇</div>
      </div>
      <div class="detail" v-if="detailData.length > 0">
        <div class="detail-item flex space-between">
          <div class="detail-info">
            <div class="text-name">圓方100元時裝電子禮券</div>
            <div>數量：6</div>
            <div>有效至：2021年5月1日</div>
          </div>
          <div class="right" v-if="showCounter">
            <counterComponent v-bind:value="5" v-bind:maxValue="6" />
          </div>
        </div>
        <div class="detail-item flex space-between">
          <div class="detail-info">
            <div class="text-name">圓方100元時裝電子禮券</div>
            <div>數量：6</div>
            <div>有效至：2021年5月1日</div>
          </div>
          <div class="right" v-if="showCounter">
            <counterComponent v-bind:value="5" v-bind:maxValue="6" />
          </div>
        </div>
        <div class="detail-item flex space-between">
          <div class="detail-info">
            <div class="text-name">圓方100元時裝電子禮券</div>
            <div>數量：6</div>
            <div>有效至：2021年5月1日</div>
          </div>
          <div class="right" v-if="showCounter">
            <counterComponent v-bind:value="5" v-bind:maxValue="6" />
          </div>
        </div>
      </div>
    </div>
    <div class="btn-group" v-if="detailData.length == 0">
      <el-button type="danger" @click="viewVoucher" class="btn-red">查看禮券</el-button>
    </div>
    <div class="btn-group" v-if="showSubmitButton">
      <el-button type="danger" class="btn-white">重新输入</el-button>
      <el-button type="danger" class="btn-red">提交</el-button>
    </div>
  </div>
</template>

<script>
import counterComponent from "@/components/common/counter.vue";
 
export default {
  name: "eVoucherUsing",
  components: { counterComponent },
  data() {
    return {
      selectShop: "",
      showVoucher: false,
      showCounter: false,
      showSubmitButton: false,
      detailData: [],
    };
  },
  mounted() {},
  methods: {
    viewVoucher() {
     this.detailData=[];
      const temp = {
        title: "圓方100元時裝電子禮券",
        count: 3,
        deadLine: "2021年5月1日",
      };
      this.detailData.push(temp);
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