import axios from 'axios'; // 引入axios和定义在node_modules/axios/index.ts文件里的类型声明
import config from '@/config'; // @代表src一级目录，是我们在vue.config.js文件里配置的
const { api: { devApiBaseUrl, proApiBaseUrl } } = config;
const apiBaseUrl = process.env.NODE_ENV === 'production' ? proApiBaseUrl : devApiBaseUrl;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
class HttpRequest {
    constructor(baseUrl = apiBaseUrl) {
        this.baseUrl = baseUrl;
        this.baseUrl = baseUrl;
    }
    request(options) {
        const instance = axios.create(); // 这里使用axios.create方法创建一个axios实例，他是一个函数，同时这个函数包含多个属性，就像我们前面讲的计数器的例子
        options = this.mergeConfig(options); // 合并基础路径和每个接口单独传入的配置，比如url、参数等
        this.interceptors(instance, options.url); // 调用interceptors方法使拦截器生效
        return instance(options); // 最后返回AxiosPromise
    }
    interceptors(instance, url) {
        // 在这里添加请求和响应拦截
        instance.interceptors.request.use((config) => {
            // 接口请求的所有配置，都在这个config对象中，他的类型是AxiosRequestConfig，你可以看到他有哪些字段
            // 如果你要修改接口请求配置，需要修改 axios.defaults 上的字段值
            return config;
        }, (error) => {
            return Promise.reject(error);
        });
        instance.interceptors.response.use((res) => {
            const { data } = res; // res的类型是AxiosResponse<any>，包含六个字段，其中data是服务端返回的数据
            const { code, msg } = data; // 通常服务端会将响应状态码、提示信息、数据等放到返回的数据中
            if (code !== 0) { // 这里我们在服务端将正确返回的状态码标为0
                console.warn(msg); // 如果不是0，则打印错误信息，
            }
            return res; // 返回数据
        }, (error) => {
            return Promise.reject(error);
        });
    }
    mergeConfig(options) {
        return Object.assign({ baseURL: this.baseUrl }, options);
    }
}
export default HttpRequest;
//# sourceMappingURL=axios.js.map