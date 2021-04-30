
import Vue from 'vue'
import App from './App'
import less from 'less'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import router from './router'
import './assets/css/global.css'
import shopitem from '@/components/common/shop-item.vue'
import backButton from '@/components/common/return-button.vue'
import i18n from './i18n/i18n'
import store from './store'
import axios from '../src/request/index'
import qs from "qs";
import '../src/util/fitler'
import GlOBAL from '../src/util/global'
// import msal from 'vue-msal'
// import msalconfig from './adb2c/auth.config'
Vue.use(VueRouter)
Vue.use(ElementUI);
Vue.use(less);
// Vue.use(msal, {
//   ...msalconfig
// }

// );

Vue.config.productionTip = false;
Vue.component("shop-item", shopitem);
Vue.component("back-button", backButton);
Vue.prototype.$axios = axios;
Vue.prototype.$QS = qs;
Vue.prototype.GLOBAL = GlOBAL;

router.beforeEach((to, from, next) => {
  if (to.path == "/login") {
    const token = window.sessionStorage.getItem("token");
    const userinfo=window.sessionStorage.getItem("userinfo")
    if (token&&userinfo) {
      return next('/main/shop');
    }
  }
  if (to.meta.requestAuth == true) {
    const token = window.sessionStorage.getItem("token");
    const userinfo=window.sessionStorage.getItem("userinfo")
    if (!token||!userinfo) {
      return next('/login');
    }
  }
  if (to.meta.showLoginMenu == true) {
    store.commit('setShowLoginMenu', true)
  }
  else {
    store.commit('setShowLoginMenu', false)
  }
  if (to.meta.navNumber >= 0) {
    store.commit('setNavNumber', to.meta.navNumber)
  }
  next()
})

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
