<template>
  <div class="outer">
    <div class="group">
      <div class="title">{{$t("registration.title")}}</div>
      <div class="title1">{{$t("registration.sendverificationcode")}}</div>
      <div><input class="input" :placeholder="$t('login.emailaddress')" /></div>
      <div class="flex space-between">
        <input class="input input-code" maxlength="6" :placeholder="$t('registration.verificationcode')" />
        <div class="code-text pointer middle-center" v-if="canSend" @click="sendCode">
          {{ countDownMsg }}
        </div>
        <div class="code-text middle-center" v-else>{{ countDownMsg }}</div>
      </div>
      <div class="text-center verify-btn">
        <el-button class="btn-red" @click="verify" >{{$t("registration.verify")}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      countDownMsg: this.$t("registration.getverifycode"),
      canSend: true,
    };
  },

  methods: {
    verify(){
      //to verify code 
      this.$router.push({ name: 'RegisterSecond' });
    },
    sendCode() {
      const _this = this;
       _this.canSend = false;
      const TIME_COUNT = 60;
      _this.count = TIME_COUNT;
      _this.timer = window.setInterval(() => {
        if (_this.count > 0 && _this.count <= TIME_COUNT) {
          _this.count--;         
          _this.countDownMsg = _this.count +  _this.$t("registration.secondlaterresend");
        } else {
          _this.canSend = true;
          _this.countDownMsg = _this.$t("registration.resendverifycode");
          clearInterval(_this.timer);
          _this.timer = null;
        }
      }, 1000);
    },
  },
};
</script>

<style   scoped>
 
.group {
  margin: 0 auto;
  width: 500px;
  
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