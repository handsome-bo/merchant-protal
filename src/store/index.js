import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const userRole=localStorage.getItem('userRole')

export default new Vuex.Store({
    state: {
        navNumber: 0,
        isShowLoginMenu: false,
        token: 'test',
        userName: 'Siu Ming, Chan',
        userId: '',
        userRole: userRole,
        isNewMessage: false
    },
    mutations: {
        setNavNumber(state, num) {
            state.navNumber = num;
        },
        setUserName(state, username) {
            state.userName = username;
            localStorage.setItem('userName', username)
        },
        setToken(state, token) {
            state.token = token;
        },
        setShowLoginMenu(state, showMenu) {
            state.isShowLoginMenu = showMenu;
        },
        setUserRole(state, role) {
            state.userRole = role;
            localStorage.setItem('userRole',state.userRole)
        },

    },
    getters: {
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
            return state.isShowLoginMenu
        },
        getUserRole(state) {
            return state.userRole
        }
    }
})