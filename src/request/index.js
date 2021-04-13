import axios from 'axios'
import store from '@/store'

axios.defaults.timeout = 30000;
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'https://www.baidu.com';
}
else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = 'https://www.ceshi.com';
}
else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'https://www.production.com';
}

axios.interceptors.request.use(config => {
    const token = store.state.token;
    token && (config.headers.Authorization = token);
    return config;
}, error => {

    console.log("error:")
    console.log(error)
    return Promise.reject(error)
})


// 响应拦截器
axios.interceptors.response.use(
    response => {

        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },

    error => {
        if (error.response.status) {
            switch (error.response.status) {

                case 401:
                    // router.replace({                        
                    //     path: '/login',                        
                    //     query: { 
                    //         redirect: router.currentRoute.fullPath 
                    //     }
                    // });
                    break;


                case 403:

                    // localStorage.removeItem('token');
                    // store.commit('loginSuccess', null);

                    // setTimeout(() => {                        
                    //     router.replace({                            
                    //         path: '/login',                            
                    //         query: { 
                    //             redirect: router.currentRoute.fullPath 
                    //         }                        
                    //     });                    
                    // }, 1000);                    
                    break;


                case 404:

                    break;

                default:
                    console.log('error')
            }
            return Promise.reject(error.response);
        }
    }
);


export default axios;