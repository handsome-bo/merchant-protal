import axios from 'axios'
import store from '@/store'
import global from '../util/global'
import router from '../router'
import { Message } from 'element-ui'
axios.defaults.timeout = 50000;
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.baseURL = global.BaseURL + 'api/';
axios.interceptors.request.use(config => {
    const token = store.state.token;
    token && (config.headers.Authorization = `Bearer ${token}`);
    var userInfo = store.state.userInfo;
    if (userInfo) {
        if (!config.data.Email) {
            config.data.Email = userInfo.email;
        }
        config.data.RoleType = userInfo.contacttype;
    }
    return config;
}, error => {

    console.log("error:")
    console.log(error)
    return Promise.reject(error)
})

axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            if (response.data && response.headers["content-type"].indexOf('json') > 0) {
                if (response.data.resultObject) {
                    const rsdata = JSON.parse(response.data.resultObject);
                    return Promise.resolve(rsdata[Object.keys(rsdata)[0]]);
                }
            }
            return Promise.resolve(response);

        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if (error && error.response && error.response.status) {

            switch (error.response.status) {
                case 401:
                    window.sessionStorage.clear();
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                    break;
                case 403:
                    window.sessionStorage.clear();
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    });
                    break;
                case 404:
                    console.log(error);
                    router.replace({
                        path: '/errorpage'
                    });
                    break;

                default:
                    Message.error("服務錯誤");
                    console.log(error);

            }

            return Promise.reject(error.response);
        }
        else {
            Message.error("請求超時")
            return Promise.reject(error);

        }
    }
);

export default axios;