<template>
  <div id="Header">
    <div class="flex align-center left-part">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/Images/logo.png"   />
        </router-link>
      </div>
      <div class="logo-text" v-if="$store.getters.getIsShowLoginMenu">
        {{ $t("header.title") }}
      </div>
    </div>
    <div class="flex align-center">
      <div class="menus" v-if="$store.getters.getIsShowLoginMenu">
        <ul class="flex align-center meunu-wrapper">
          <li
            @click="navigateTo('notification')"
            v-bind:class="{ actived: $store.getters.getNavNumber == 0 }"
          >
            {{ $t("header.notifications") }}
          </li>
          <li
            @click="navigateTo('shop')"
            v-bind:class="{ actived: $store.getters.getNavNumber == 1 }"
          >
            {{ $t("header.shop") }}
          </li>
          <li v-bind:class="{ actived: $store.getters.getNavNumber == 2 }">
            {{ $t("header.evouchers") }}
            <div class="dropmenu-common">
              <div class="title">{{ $t("header.evouchers") }}</div>
              <div class="subtitle" @click="navigateTo('evoucherrecord')">
                {{ $t("header.evoucher1") }}
              </div>
              <div class="subtitle">
                <router-link to="evoucher-refund">
                  {{ $t("header.evoucher2") }}</router-link
                >
              </div>
              <div class="subtitle">
                <router-link to="evoucher-using">{{
                  $t("header.evoucher3")
                }}</router-link>
              </div>
            </div>
          </li>
          <li
            @click="navigateTo('shopqrcode')"
            v-bind:class="{ actived: $store.getters.getNavNumber == 3 }"
          >
            {{ $t("header.shopqrcode") }}
          </li>
        </ul>
      </div>
      <div class="language pointer" @click="changeLanguage">
        <img src="../assets/Images/lan-tc.svg" v-if="lang == 'zh'" />
        <img src="../assets/Images/lan-en.svg" v-if="lang == 'en'" />
      </div>
      <div class="profile pointer" v-if="$store.getters.getIsShowLoginMenu">
        <div class="name">{{ $store.getters.getUserName }}</div>
        <div class="setting">{{ $t("header.setting") }}</div>
        <div class="dropmenu-profile">
          <div class="subtitle">
            <router-link to="/main/profile">
              {{ $t("header.profile") }}
            </router-link>
          </div>
          <div class="subtitle">
            <router-link to="/updatepassword1">
              {{ $t("header.password") }}</router-link
            >
          </div>
          <div class="subtitle">{{ $t("header.logout") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 
export default {
  name: "Header",
  data() {
    return {
      index: 0,
      lang: "",
      isShowLoginMenu: false,
    };
  },

  created() {
    this.lang = localStorage.getItem("locale");
  },
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    navigateTo(pname) {
      this.$router.push({ name: pname });
    },
    changeLanguage() {
      console.log(this.lang);
      if (this.lang == "zh") {
        localStorage.setItem("locale", "en");
        this.$i18n.locale = localStorage.getItem("locale");
        this.lang = "en";
      } else if (this.lang == "en") {
        localStorage.setItem("locale", "zh");
        this.$i18n.locale = localStorage.getItem("locale");
        this.lang = "zh";
      }
    },
  },
};
</script>

<style scoped>
#Header {
  height: 110px;
  background-color: #f6f1eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1920px;
}
.left-part {
  width: 30%;
}
.logo {
  height: 80px;
  width: 87px;
  margin: 15px 40px 15px 66px;
 
}
.logo-text {
  width: 240px;
  font-size: 30px;
  letter-spacing: 0;
  line-height: 40px;
  text-align: center;
  font-family: "Microsoft JhengHei";
}
.language {
  height: 110px;
  width: 110px;
  background-color: #edddc1;
}
.language img {
  height: 41px;
  width: 40px;
  margin: 35px;
}
.meunu-wrapper {
  justify-content: flex-end;
  margin: 0;
  font-size: 24px;
}
.meunu-wrapper li {
  list-style: none;
  height: 110px;
  width: 158px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
}
.actived {
  background-color: #ffffff;
  border-bottom: none;
}
.profile {
  background-color: #d7c4a3;
  height: 110px;
  width: 205px;
  background-color: #d7c4a3;
  display: flex;
  justify-content: center;
  padding-left: 20px;
  flex-direction: column;
  text-align: left;
  position: relative;
}
.name {
  opacity: 0.5;
  color: #222222;
  font-family: "Microsoft JhengHei";
  font-size: 18px;
}
.setting {
  font-size: 24px;
}
.dropmenu-profile {
  width: 205px;
  background-color: #d7c4a3;
  display: none;
  position: absolute;
  z-index: 9;
  top: 108px;
  left: 0;
}
.dropmenu-common {
  width: 158px;
  background-color: #f6f1eb;
  position: absolute;
  display: none;
  z-index: 9;
  top: -2px;
}

.dropmenu-common > .title {
  color: #222222;
  font-family: "Microsoft JhengHei";
  font-size: 24px;
  letter-spacing: 0;
  line-height: 32px;
  text-align: center;
  margin: 39px 0;
}
.subtitle {
  color: #222222;

  font-size: 18px;
  letter-spacing: 0;
  line-height: 24px;
  text-align: center;
  margin-bottom: 50px;
}
.meunu-wrapper li:hover .dropmenu-common {
  display: block;
}
.profile:hover .dropmenu-profile {
  display: block;
}
</style>