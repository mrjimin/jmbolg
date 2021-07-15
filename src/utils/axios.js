// http/index.js
import axios from 'axios'
import { ElLoading } from "element-plus";
const Loading = () => {
    return ElLoading.service({
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0)'
    });
}

//创建axios的一个实例 
const service = axios.create({
    // baseURL: import.meta.env.VITE_APP_URL, //接口统一域名
    timeout: 10000, //设置超时
    headers: {
        'Content-Type': 'application/json;charset=UTF-8;',
    }
})

//请求拦截器 
service.interceptors.request.use((config) => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // const token = window.localStorage.getItem('token');
    // token && (config.headers.Authorization = token)

    Loading();   //打开loading
    if (config.method.toLowerCase() == "post") {

        if (config.data instanceof FormData) { //文件类,FormData传输
            config.headers['Content-Type'] = 'multipart/form-data'; //修改`Content-Type`

        } else { //非文件类,stringify
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded'; //修改`Content-Type`

            // 判断传过来的是不是json格式数据
            let newdata = config.data;
            let isjson = typeof (newdata) == "object" && Object.prototype.toString.call(newdata).toLowerCase() == "[object object]" && !newdata.length;
            if (isjson) {
                let sstr = '';
                for (let key in newdata) {
                    sstr += '&' + key + '=' + newdata[key];
                }
                if (sstr.substr(0, 1) == '&') {
                    sstr = sstr.substr(1);
                }
                config.data = sstr;
            }

        }

    }

    return config;
}, (error) => {

    return Promise.reject(error);
});

//响应拦截器
service.interceptors.response.use((response) => {
    //响应成功
    // 1. 根据自己项目需求定制自己的拦截
    // 2. 然后返回数据


    Loading().close();  //关闭loading
    // console.log(response);
    return response.data;
}, (error) => {
    Loading().close();   //关闭loading
    //响应错误
    if (error.response && error.response.status) {
        const status = error.response.status
        switch (status) {
            case 400:
                console.log('请求错误');
                break;
            case 401:
                console.log('未授权，请重新登录');
                break;
            case 403:
                console.log("拒绝访问");
                break;
            case 404:
                console.log('请求地址出错');
                break;
            case 408:
                console.log('请求超时');
                break;
            case 500:
                console.log('服务器内部错误!');
                break;
            case 501:
                console.log('服务未实现!');
                break;
            case 502:
                console.log('网关错误!');
                break;
            case 503:
                console.log('服务不可用!');
                break;
            case 504:
                console.log('网关超时!');
                break;
            case 505:
                console.log('HTTP版本不受支持');
                break;
            default:
                console.log('请求失败');
                return Promise.reject(error);
        }
    } else {
        console.log('连接到服务器失败');
        return Promise.reject(error);

    }

});


/**
 * @param {String} method  请求的方法：get、post、delete、put
 * @param {String} url     请求的url:
 * @param {Object} [data]    请求的参数
 * @param {Object} [config]  请求的配置
 * @returns {Promise}     返回一个promise对象，其实就相当于axios请求数据的返回值
 * @example http({method,url,data,config})
 */
const http = ({
    method,
    url,
    data,
    config
}) => {
    method = method.toLowerCase();  //method统一转成小写，方便后面操作
    if (method == 'post') {
        return service.post(url, data, {
            ...config
        })
    } else if (method == 'get') {
        return service.get(url, {
            params: data,
            ...config
        })
    } else if (method == 'delete') {
        return service.delete(url, {
            params: data,
            ...config
        })
    } else if (method == 'put') {
        return service.put(url, data, { ...config })
    } else {
        console.error('未知的method:' + method)
        return false
    }
}
export default http

