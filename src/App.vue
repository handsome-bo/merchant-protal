<template>
  <div id="app">
    <transition name="fade">
    <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    console.log(window.location.hash);
    if (window.location.hash.indexOf("id_token=") > 0) {
      var token = window.location.hash.replace("#/id_token=", "");
      console.log(token);
      this.$store.commit("setToken", token);
      this.$router.push("/login");
    }
  },
  mounted() {
    if (this._isMobile()) {
      this.$store.commit("setIsMobile", true);
      console.log("mobile");
    } else {
      this.$store.commit("setIsMobile", false);
      console.log("pc");
    }
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
  },
};
</script>

 <<style scoped>
 .fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
 </style>