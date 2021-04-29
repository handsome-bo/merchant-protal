import axios from 'axios'
import store from '@/store'
import global from '../util/global'
import router from '../router'
axios.defaults.timeout = 50000;
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = global.BaseURL+'api/';
}
else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = global.BaseURL+'api/';
}
else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = global.BaseURL+'api/';
}

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
            const rsdata = JSON.parse(response.data.resultObject);
                return Promise.resolve(rsdata[Object.keys(rsdata)[0]]);
            
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
                    console.log(error);
                    router.replace({
                        path: '/errorpage'
                    });
                    break;
            }
            return Promise.reject(error.response);
        }
        else{
            router.replace({
                path: '/errorpage'
            });
            
        }
    }
);

export default axios;