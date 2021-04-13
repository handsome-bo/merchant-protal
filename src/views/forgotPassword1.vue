<template>
  <div class="outer">
    <div class="group">
      <back-button />
      <div class="title">找回密碼</div>
      <div class="title1">請輸入已登記之電郵地址以接收驗證碼</div>
      <div><input class="input" placeholder="電郵地址" /></div>
      <div class="text-center verify-btn">
        <el-button class="btn-red" @click="verify">確認</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword1",
  data() {
    return {};
  },
  methods: {
    verify() {
      //to verify code
      this.$router.push({ name: "RegisterSecond" });
    },
  },
};
</script>

<style   scoped>
.outer {
  padding-top: 161px;
}
.group {
  margin: 0 auto;
  width: 500px;
  padding: 50px;
  color: #ffffff;
  font-family: "Microsoft JhengHei";
}

.title {
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 40px;
  text-align: center;
  text-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.9);
}
.title1 {
  font-size: 20px;
  letter-spacing: 0;
  line-height: 27px;
  margin-top: 60px;
}
.input {
  box-sizing: border-box;
  height: 50px;
  width: 500px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  background-color: #ffffff;
  margin-top: 15px;
  text-align: center;
  font-size: 20px;
}
.input-code {
  width: 280px !important;
}
.code-text {
  width: 140px;
  color: #ffffff;

  font-size: 20px;

  text-align: center;
  text-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.9);
  text-decoration: underline;
}
.verify-btn {
  margin-top: 30px;
}
</style>