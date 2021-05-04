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

    if (window.location.hash.indexOf("id_token=") > 0) {
      var token = window.location.hash.replace("#/id_token=", "");
      console.log(token);
      this.$store.commit("setToken", token);
      this.$router.push("/login");
    }
    // var token="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ilg1ZVhrNHh5b2pORnVtMWtsMll0djhkbE5QNC1jNTdkTzZRR1RWQndhTmsifQ.eyJleHAiOjE2MjAwOTYyMjAsIm5iZiI6MTYyMDA5MjYyMCwidmVyIjoiMS4wIiwiaXNzIjoiaHR0cHM6Ly9tZXJjaGFudHBvcnRhbDIuYjJjbG9naW4uY29tL2NmZmQ5NzM2LTU3M2QtNDFkMS05YmYzLTEwMWEyNmQxY2Q4My92Mi4wLyIsInN1YiI6ImUwYzRmOWY1LTdkMGQtNDFmNi1iMmExLTFkYmQ5Y2UxM2ZhYyIsImF1ZCI6IjRlM2JhNGY0LTJkMWYtNDVlNS1iNjViLTdhNGRhYjNiMmQ2OSIsIm5vbmNlIjoiZGVmYXVsdE5vbmNlIiwiaWF0IjoxNjIwMDkyNjIwLCJhdXRoX3RpbWUiOjE2MjAwOTI2MjAsIm9pZCI6ImUwYzRmOWY1LTdkMGQtNDFmNi1iMmExLTFkYmQ5Y2UxM2ZhYyIsIm5hbWUiOiJMb3JlbiBXZW4iLCJnaXZlbl9uYW1lIjoibGlhbmciLCJmYW1pbHlfbmFtZSI6IndlbiIsImVtYWlscyI6WyJ3ZW5sd2xAMTI2LmNvbSJdLCJ0ZnAiOiJCMkNfMV9TaWduSW4ifQ.O4u1tTVILh8xBrixghD7olPR6IwHTn96jCsgNYHZGqNXn594kGQ6gOaH4xk_qbOjeO5Y2t10QBFTT5asXiV1JsazP8JWxrMOInErKG0MZKOG8dqFFrPLTJu69wHakBvXBhi_v5CRDGUVo7T9KN608Q_zuQxMCnR-wzFxzxJyz3l19CwXwvFqSAO7WKChz32z5kqLoM5IDn_KzCMvdinWmfT_I3ur_5gC9JfPEbcH4S094QcKyEE6gvGaPfRWwAWxiTYeiQWHSdxf_oN8WVgtyS5g3ZAC7hdCEv57bCv7BnwFrs2BfoOkUkRoG_3Fje03-5di-uVnT9Ux2FAZCA_yPg";
    //  this.$store.commit("setToken", token);
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