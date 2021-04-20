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
        />
      </div>
      <div>
        <input
          class="input"
          type="password"
          :placeholder="$t('login.password')"
          v-model="password"
        />
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
        <el-button class="login-btn" @click="login">{{
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
    };
  },
  methods: {
    login() {
      if (
        !/^\w+([\.\-]\w+)*\@\w+([\.\-]\w+)*\.\w+$/.test(this.email) ||
        this.password == null
      ) {
        this.alertMessage();
      } else {
        this.$axios({
          url: "https://localhost:44316/Settings/LoginUserInfo",
          method: "POST",
        }).then((res) => {
          if (res && res.status == "200" && res.data) {
            console.log(res);
            var data = res.data;
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
            this.$store.commit("setToken", "123213123");
            this.$router.push("/main");
          }
        });
        //   this.$router.push("/main");
      }
    },
    forget() {
      this.$router.push("/forgotpassword1");
    },
    alertMessage() {
      this.$message({
        message: "邮箱或密码输入有误，请重新登录",
        type: "error",
      });
      // callback: action => {
      //   this.$message({
      //     type: 'info',

      //   });
      // }
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