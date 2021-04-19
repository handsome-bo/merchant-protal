<template>
  <div id="SelectRoles">
    <div class="wrapper">
      <div class="elements-e-crm">Elements eCRM</div>
      <div class="merchant-portal">Merchant Portal Layout Design</div>
      <div class="select-role">Select Role</div>
      <div class="buttons-group">
        <el-button class="primary-btn">{{
          $t("common.superaccount")
        }}</el-button>
        <el-button class="primary-btn">{{ $t("common.merchant") }}</el-button>
        <el-button @click="toLogin" class="primary-btn">{{
          $t("common.shop")
        }}</el-button>
      </div>
      <div class="line"></div>
      <div class="buttons-group" style="margin-top: 0">
        <el-button class="primary-btn version-btn" @click="engVersion()"
          >English ver.</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectRoles",
  methods: {
    toLogin() {
      this.$router.push("/login");
    },

    engVersion() {
      localStorage.setItem("locale", "en");
      this.$i18n.locale = localStorage.getItem("locale");
      this.$router.push("/login");
    },
  },
};
</script>

<style  scoped>
.wrapper {
  text-align: center;
  margin-bottom: 50px;
}
.elements-e-crm {
  color: #222222;
  font-family: Verdana;
  font-size: 40px;
  letter-spacing: 0;
  line-height: 48px;
  text-align: center;
  margin-top: 80px;
}
.merchant-portal {
  color: #222222;
  font-family: Verdana;
  font-size: 60px;
  letter-spacing: 0;
  line-height: 73px;
  text-align: center;
  margin-top: 25px;
}
.select-role {
  color: #222222;
  font-family: Verdana;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
  margin-top: 40px;
}
.buttons-group {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  margin-top: 15px;
}
.primary-btn {
  height: 50px;
  width: 210px;
  border-radius: 10px;
  background-color: #e70048;
  color: #ffffff;
  font-family: Ubuntu;
  font-size: 18px;
  margin: 20px 0 0 0;
}
.version-btn {
  background-color: #c77900 !important;
  margin-top: 0;
}
.line {
  height: 2px;
  width: 410px;
  background-color: #d8d8d8;
  text-align: center;
  margin: 20px auto;
}
</style>