import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
Vue.use(Vuex)


const token = sessionStorage.getItem('token') || ''
const userinfo = JSON.parse(sessionStorage.getItem('userinfo') || '{}')
const shoplist = JSON.parse(sessionStorage.getItem('shoplist') || '{}')
export default new Vuex.Store({
    state: {
        navNumber: 0,
        isShowLoginMenu: false,
        token: token,
        userId: '',
        isNewMessage: false,
        isMobile: false,
        userInfo: userinfo,
        lang: localStorage.getItem('locale'),
        shopList: shoplist
    },
    mutations: {
        setIsMobile(state, isMobile) {
            state.isMobile = isMobile;
            sessionStorage.setItem('isMobile', isMobile);
        },
        setNavNumber(state, num) {
            state.navNumber = num;
        },

        setToken(state, token) {
            state.token = token;
            sessionStorage.setItem('token', token);
        },
        setShowLoginMenu(state, showMenu) {
            state.isShowLoginMenu = showMenu;
        },

        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
            sessionStorage.setItem('userinfo', JSON.stringify(state.userInfo))
        },
        logout(state) {
           
            state.token='';
            state.userInfo={};
            window.sessionStorage.clear();
            router.push('/logout');
        },
        setShopList(state) {
            axios.post("Shops/RetrieveShortShopList",
                {
                    Email: state.userInfo.email,
                    RoleType: state.userInfo.contacttype
                }).then((res) => {
                    var tempdata = [];
                    if(res.ShopList&&res.ShopList.errorCode=="0"&&res.ShopList.shopList){
                    if (Array.isArray(res.shopList.Shop)) {
                        tempdata = res.shopList.Shop;
                        tempdata.forEach((item) => {
                            item["checked"] = false;
                        });
                    }
                    else {
                        tempdata.push(res.shopList.Shop)
                    }
                }
                    state.shopList = tempdata;
                    console.log('setShopList')
                    sessionStorage.setItem('shoplist', JSON.stringify(state.shopList))
                })
        },
        updateShopList(state, datas) {
            state.shopList = datas;
            sessionStorage.setItem('shoplist', JSON.stringify(state.shopList))

        }


    },
    getters: {
        getIsMobile(state) {
            return state.isMobile;
        },

        getToken(state) {
            return state.token;
        },
        getNavNumber(state) {
            return state.navNumber;
        },
        getIsShowLoginMenu(state) {
            return state.isShowLoginMenu;
        },

        getuserInfo(state) {
            return state.userInfo;
        }

    },
    actions: {
        setShopList(context) {
            context.commit("setShopList");
        },
        logout(context) {
            context.commit("logout");
        }
    }
})