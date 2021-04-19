import Vue from 'vue';
import Router from 'vue-router';
import SelectRoles from '../views/SelectRoles'
import Login from '../views/login'
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
import Register from '../views/register'
import RegisterSecond from '../views/registerSecond'
import ErrorPage from '../views/errorPage'
Vue.use(Router);

export default new Router({
    //base: '/',
    // mode: 'history',
    //this is test
    routes: [
        {
            path: '/',
            name: 'default',
            redirect: '/selectroles'
        },
        {
            path: '/selectroles',
            name: 'SelectRoles',
            component: SelectRoles,
            meta: { showLoginMenu: false, navNumber: 0 }
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
                    path:'/errorpage',
                    name:'ErrorPage',
                    component:ErrorPage,
                    meta:{showLoginMenu: false, navNumber: 0}
        
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
                    meta: { showLoginMenu: true, navNumber: 1 }
                },
                {
                    path: 'evoucher-record',
                    name: 'evoucherrecord',
                    component: EvoucherRecord,
                    meta: { showLoginMenu: true, navNumber: 2 }
                },
                {
                    path: 'evoucher-refund',
                    name: 'evoucherrefund',
                    component: EvoucherRefund,
                    meta: { showLoginMenu: true, navNumber: 2 }
                },
                {
                    path: 'evoucher-using',
                    name: 'evoucherusing',
                    component: EvoucherUsing,
                    meta: { showLoginMenu: true, navNumber: 2 }
                },
                {
                    path: 'shopqrcode',
                    name: 'shopqrcode',
                    component: Shopqrcode,
                    meta: { showLoginMenu: true, navNumber: 3 }
                },
                {
                    path: 'notification',
                    name: 'notification',
                    component: NotifyComponent,
                    meta: { showLoginMenu: true, navNumber:0 }
                },
                {
                    path: 'profile',
                    name: 'profile',
                    component: Profile,
                    meta: { showLoginMenu: true, navNumber: -1 }
                },
            ]
        },
        {
            path:'*',
            redirect:'/errorpage',
            name: 'notFound',
            hidden: true
        }
           
    ]
});