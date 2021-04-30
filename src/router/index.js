import Vue from 'vue';
import Router from 'vue-router';
import SelectRoles from '../views/SelectRoles'
import Login from '../views/login'
import Logout from '../views/logout'
import Index from '../views/Index'
import Main from '../views/main/index'
import Shop from '../views/main/shop'
import EvoucherRecord from '../views/main/eVoucherRecords'
import EvoucherRefund from '../views/main/eVoucherRefund'
import EvoucherUsing from '../views/main/eVoucherUsing'
import Shopqrcode from '../views/main/shopqrcode'
import NotifyComponent from '../views/main/notification'
import Profile from '../views/main/profile'
import UpdatePassword1 from '../views/main/updatePassword1'
import UpdatePassword2 from '../views/main/updatePassword2'
import UpdatePassword3 from '../views/main/updatePassword3'
import Register from '../views/register'
import RegisterSecond from '../views/registerSecond'

import ErrorPage from '../views/errorPage'

import Forgotpassword1 from '../views/forgotPassword1'
import Forgotpassword2 from '../views/forgotPassword2'
import MIndex from '../views/mobile/Index'
import MLogin from '../views/mobile/login'
import MLogout from '../views/mobile/logout'
import MErrorPage from '../views/mobile/errorPage'
Vue.use(Router);

export default new Router({
    //base: '/',
    // mode: 'history',
    //this is test
    routes: [
        {
            path: '/',
            name: 'default',
            redirect: '/login'
        },
        {
            path: '/index',
            name: 'index',
            component: Index,
            children: [
                {
                    path: '/login',
                    name: 'login',
                    component: Login,
                    meta: { showLoginMenu: false, navNumber: 0 }
                },
                {
                    path: '/logout',
                    name: 'logout',
                    component: Logout,
                    meta: { showLoginMenu: false, navNumber: 0 }
                },
                {
                    path: '/errorpage',
                    name: 'ErrorPage',
                    component: ErrorPage,
                    meta: { showLoginMenu: false, navNumber: 0 }

                },
                {
                    path: '/updatepassword1',
                    name: 'UpdatePassword1',
                    component: UpdatePassword1,
                    meta: { showLoginMenu: false, navNumber: 0 }
                },
                {
                    path: '/updatepassword2',
                    name: 'UpdatePassword2',
                    component: UpdatePassword2,
                    meta: { showLoginMenu: false, navNumber: 0 }
                },

                {
                    path: '/updatepassword3',
                    name: 'UpdatePassword3',
                    component: UpdatePassword3,
                    meta: { showLoginMenu: false, navNumber: 0 }
                },
                {
                    path: '/register',
                    name: 'Register',
                    component: Register,
                    meta: { showLoginMenu: false, navNumber: 0 }
                },
                {
                    path: '/registerSecond',
                    name: 'RegisterSecond',
                    component: RegisterSecond,
                    meta: { showLoginMenu: false, navNumber: 0 }
                },
                {
                    path: '/forgotpassword1',
                    name: 'ForgotPassword1',
                    component: Forgotpassword1,
                    meta: { showLoginMenu: false, navNumber: 0 }
                },
                // {
                //     path: '/forgotpassword2',
                //     name: 'ForgotPassword2',
                //     component: Forgotpassword2,
                //     meta: { showLoginMenu: false, navNumber: 0 }
                // },
            ]
        },
        {
            path: '/main',
            name: 'main',
            component: Main,
            redirect: { name: 'shop' },
            children: [
                {
                    path: 'shop',
                    name: 'shop',
                    component: Shop,
                    meta: { showLoginMenu: true, navNumber: 1, requestAuth: true }
                },
                {
                    path: 'evoucher-record',
                    name: 'evoucherrecord',
                    component: EvoucherRecord,
                    meta: { showLoginMenu: true, navNumber: 2, requestAuth: true }
                },
                {
                    path: 'evoucher-refund',
                    name: 'evoucherrefund',
                    component: EvoucherRefund,
                    meta: { showLoginMenu: true, navNumber: 2, requestAuth: true }
                },
                {
                    path: 'evoucher-using',
                    name: 'evoucherusing',
                    component: EvoucherUsing,
                    meta: { showLoginMenu: true, navNumber: 2, requestAuth: true }
                },
                {
                    path: 'shopqrcode',
                    name: 'shopqrcode',
                    component: Shopqrcode,
                    meta: { showLoginMenu: true, navNumber: 3, requestAuth: true }
                },
                {
                    path: 'notification',
                    name: 'notification',
                    component: NotifyComponent,
                    meta: { showLoginMenu: true, navNumber: 0, requestAuth: true }
                },
                {
                    path: 'profile',
                    name: 'profile',
                    component: Profile,
                    meta: { showLoginMenu: true, navNumber: -1, requestAuth: true }
                },
            ]
        },
        {
            path: '/m/index',
            name: 'MobileIndex',
            component: MIndex,
            redirect:'/m/login',
            children: [
                {
                    path: '/m/login',
                    name: 'MobileLogin',
                    component: MLogin,
                    meta: { showLoginMenu: false, navNumber: 0 }
                },
                {
                    path: '/m/logout',
                    name: 'MboileLogout',
                    component: MLogout,
                    meta: { showLoginMenu: false, navNumber: 0 }
                },
                {
                    path: '/m/errorpage',
                    name: 'MoibleErrorPage',
                    component: MErrorPage,
                    meta: { showLoginMenu: false, navNumber: 0 }

                },
                // {
                //     path: '/updatepassword1',
                //     name: 'UpdatePassword1',
                //     component: UpdatePassword1,
                //     meta: { showLoginMenu: false, navNumber: 0 }
                // },
                // {
                //     path: '/updatepassword2',
                //     name: 'UpdatePassword2',
                //     component: UpdatePassword2,
                //     meta: { showLoginMenu: false, navNumber: 0 }
                // },

                // {
                //     path: '/updatepassword3',
                //     name: 'UpdatePassword3',
                //     component: UpdatePassword3,
                //     meta: { showLoginMenu: false, navNumber: 0 }
                // },
                // {
                //     path: '/register',
                //     name: 'Register',
                //     component: Register,
                //     meta: { showLoginMenu: false, navNumber: 0 }
                // },
                // {
                //     path: '/registerSecond',
                //     name: 'RegisterSecond',
                //     component: RegisterSecond,
                //     meta: { showLoginMenu: false, navNumber: 0 }
                // },
             
            ]
        },
        // {
        //     path:'*',
        //     redirect:'/errorpage',
        //     name: 'notFound',
        //     hidden: true
        // }

    ]
});