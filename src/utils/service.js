import axios from "axios";

// 创建并封装axios
const service = axios.create({
    timeout: 60000,
})

// 请求拦截器
service.interceptors.request.use(function (config) {
    if (config.method=== 'post') {
        const {token} = window.localStorage;
        token && (config.headers.token = token);
    }
    return config;
})

// 响应拦截器
service.interceptors.response.use(function (response)  {
    return response?.data;
})


export default service;
