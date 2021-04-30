<template>
  <div class="outer">
    <div class="group">
      <div class="title">{{ $t("registration.title") }}</div>

      <div>
        <input
          class="input"
          type="password"
          :placeholder="$t('registration.password')"
        />
      </div>
      <div>
        <input
          class="input"
          type="password"
          :placeholder="$t('registration.passwordagain')"
        />
      </div>

      <div>
        <div class="text-center">
          <el-button class="login-btn" @click="register">{{
            $t("registration.title")
          }}</el-button>
        </div>
      </div>
      <div class="text-tip mgtop-15">
        <div>密碼需要乎合至少2項條件（大寫、小寫、數字和符號）</div>
        <ul>
          <li>大寫：ABCDEFGHIJKLMNOPQRSTUVWXYZ</li>
          <li>小寫：abcdefghijklmnopqrstuvwxyz</li>
          <li>數字：0123456789</li>
          <li>符號：~!@#$%^*()_+{}|:?-=[]\;,./‘</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterSecond",
  methods: {
    register() {
      this.$router.push("/login");
    },
  },
};
</script>

<style   scoped>
.group {
  margin: 0 auto;
  height: 431px;
  width: 305px;
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
  width: 305px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  background-color: #ffffff;
  margin-top: 15px;
  text-align: center;
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
.text-tip{
  font-size: 16px;
  letter-spacing: 0;
  line-height: 21px;
 
  text-shadow: 0 2px 10px 0 rgba(0,0,0,0.9);
}
ul li{
  list-style: none;
  margin: 5px 0;
}
</style>