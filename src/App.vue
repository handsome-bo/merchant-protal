<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {
    if (this._isMobile()) {
      this.$store.commit("setIsMobile",true)
      console.log("手机端");
      //
      //  this.$router.replace("/m_index");
    } else {
      this.$store.commit("setIsMobile",false)
      console.log("pc端");
      //  this.$router.replace("/pc_index");
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

 