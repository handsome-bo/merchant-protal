import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const userRole = localStorage.getItem('userRole')
const token = localStorage.getItem('token') || ''
const userinfo=localStorage.getItem('userinfo')||{}
export default new Vuex.Store({
    state: {
        navNumber: 0,
        isShowLoginMenu: false,
        token: token,
        userName: 'Siu Ming, Chan',
        userId: '',
        userRole: userRole,
        isNewMessage: false,
        isMobile:false,
        userInfo: userinfo
    },
    mutations: {
        setIsMobile(state,isMobile){
            state.isMobile=isMobile;
            localStorage.setItem('isMobile',isMobile);
        },
        setNavNumber(state, num) {
            state.navNumber = num;
        },
        setUserName(state, username) {
            state.userName = username;
            localStorage.setItem('userName', username)
        },
        setToken(state, token) {
            state.token = token;
            localStorage.setItem('token', token);
        },
        setShowLoginMenu(state, showMenu) {
            state.isShowLoginMenu = showMenu;
        },
        setUserRole(state, role) {
            state.userRole = role;
            localStorage.setItem('userRole', state.userRole)
        },
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
            localStorage.setItem('userinfo', state.userInfo)
        }

    },
    getters: {
        getIsMobile(state){
            return state.isMobile;
        },
        getUserName(state) {
            return state.userName;
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
        getUserRole(state) {
            return state.userRole;
        },
        getuserInfo(state) {
            return state.userInfo;
        }

    }
})