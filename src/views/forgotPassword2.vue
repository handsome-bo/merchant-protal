<template>
  <div class="outer">
    <div class="group">
       <back-button />
      <div class="title">找回密碼</div>
      <div class="title1">驗證碼已發送到電郵，請複製到輸入欄</div>
      <div><input class="input" v-model="emailAddress" disabled /></div>
      <div class="flex space-between">
        <input class="input input-code" maxlength="6" placeholder="驗證碼" />
        <div
          class="code-text pointer middle-center"
          v-if="canSend"
          @click="sendCode">
          {{ countDownMsg }}
        </div>
        <div class="code-text middle-center" v-else>{{ countDownMsg }}</div>
      </div>
      <div class="text-center verify-btn">
        <el-button class="btn-red" @click="verify">驗證</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForgotPassword2",
  data() {
    return {
      countDownMsg: "获取验证码",
      canSend: true,
      emailAddress: "siuming@elements.com",
    };
  },
  methods: {
    verify() {
      //to verify code
      this.$router.push({ name: "RegisterSecond" });
    },
    sendCode() {
      const _this = this;
      _this.canSend = false;
      const TIME_COUNT = 60;
      _this.count = TIME_COUNT;
      _this.timer = window.setInterval(() => {
        if (_this.count > 0 && _this.count <= TIME_COUNT) {
          _this.count--;
          _this.countDownMsg = _this.count + "s后重新傳送";
        } else {
          _this.canSend = true;
          _this.countDownMsg = "重新傳送驗證碼";
          clearInterval(_this.timer);
          _this.timer = null;
        }
      }, 1000);
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