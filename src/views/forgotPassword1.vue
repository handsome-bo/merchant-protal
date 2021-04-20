<template>
  <div class="outer">
    <div class="group">
      <back-button />
      <div class="title">{{$t("forgotpassword.resetpassword")}}</div>
      <div class="title1">{{$t("forgotpassword.receiveverification")}}</div>
      <div><input class="input" :placeholder="$t('forgotpassword.emailaddress')" />{{$t("forgotpassword.emailaddress")}}</div>
      <div class="text-center verify-btn">
        <el-button class="btn-red" @click="verify">{{$t("forgotpassword.confirm")}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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