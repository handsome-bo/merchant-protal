<template>
  <div class="outer">
    <div class="group">
      <div class="title">{{ $t("login.name") }}</div>
      <div class="title1">{{ $t("login.registeredemailaddress") }}</div>
      <div>
        <input
          class="input"
          :placeholder="$t('login.emailaddress')"
          v-model="email"
          disabled
        />
      </div>
      <div>
        <!-- <input
          class="input"
          type="password"
          :placeholder="$t('login.password')"
          v-model="password"
        /> -->
      </div>

      <div class="other-text flex align-center space-between">
        <div class="pointer" @click="forget()">
          {{ $t("login.forgotpassword") }}
        </div>
        <div>
          <input class="checkbox" type="checkbox" />{{ $t("login.keepsignin") }}
        </div>
      </div>
      <div class="text-center">
        <el-button class="login-btn" v-loading="loading">{{
          $t("login.signin")
        }}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  mounted() {
    signIn();
    // if (this.$store.state.token) {
    //   let userString = decodeURIComponent(
    //     escape(window.atob(this.$store.state.token.split(".")[1]))
    //   );
    //   let useremail = JSON.parse(userString).emails[0];
    //   this.email = "ken.lau@mtrtest.com.hk"; //useremail;
    //   this.login();
    // } else {
    //   this.loginfromAdb2c();
    // }
  },
  methods: {
    loginfromAdb2c() {
      const redirect_uri = this.GLOBAL.RedirectURL;
      const url = `https://MerchantPortal2.b2clogin.com/MerchantPortal2.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_SignIn&client_id=4e3ba4f4-2d1f-45e5-b65b-7a4dab3b2d69&nonce=defaultNonce&redirect_uri=${redirect_uri}&scope=openid&response_type=id_token&prompt=login`;
      window.location.href = url;
    },
    login() {
      const _this = this;
      _this.loading = true;
      this.$axios({
        url: _this.GLOBAL.BaseURL + "api/Profile/RetrieveLoginUserInfo",
        method: "POST",
        data: {
          Email: _this.email,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.errorCode != "0") {
            this.$message({
              showClose: true,
              message: res.errorDescription,
              type: "error",
            });
            window.sessionStorage.clear();
            return;
          }

          const data = res;
          const userinfo = {
            name: data.name,
            firstname: data.firstname,
            firstnametc: data.firstnametc,
            lastname: data.lastname,
            lastnametc: data.lastnametc,
            email: data.email,
            salutation: data.salutation,
            salutationtc: data.salutationtc,
            title: data.title,
            titletc: data.titletc,
            mobilenumber: data.mobilenumber,
            canacknowledgeevouchersummaryreport:
              data.canacknowledgeevouchersummaryreport,
            receivemonthlyevouchersummaryreport:
              data.receivemonthlyevouchersummaryreport,
            receivedailyevouchersummaryreport:
              data.receivedailyevouchersummaryreport,
            contacttype: data.contacttype,
          };
          this.$store.commit("setUserInfo", userinfo);
          this.$store.dispatch("setShopList");
          this.$router.push("/main");
        })
        .finally((res) => {
          _this.loading = false;
        });
    },
    forget() {
      this.$router.push("/forgotpassword1");
    },
  },
};
</script>

<style   scoped>
@media (max-width: 768px) {
  .input {
    box-sizing: border-box;
    height: 50px;
    width: 305px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    background-color: #ffffff;
    margin-top: 15px;
    text-align: center;
    font-size: 20px;
  }
}
@media (min-width: 768px) {
  .group {
    margin: 0 auto;
    width: 500px;
    font-family: "Microsoft JhengHei";
    color: #fff;
  }
}

.title {
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 40px;
  text-align: center;
  text-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.9);
  color: #fff;
}
.title1 {
  font-size: 20px;
  letter-spacing: 0;
  line-height: 27px;
  margin-top: 60px;
  color: #fff;
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
  color: #222222;
  font-size: 20px;
}
.other-text {
  margin-top: 20px;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 27px;
  text-align: center;
  text-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.9);
}

.login-btn {
  height: 50px;
  width: 210px;
  border-radius: 10px;
  background-color: #e70048;
  color: #ffffff;
  border: none;
  font-size: 20px;
  margin-top: 30px;
}
.checkbox {
  box-sizing: border-box;
  height: 17px;
  width: 17px;
  border: 1px solid #979797;
  border-radius: 4px;
  background-color: #ffffff;
}
</style>