
import axios,{ ResponseData } from './index'

import { AxiosPromise } from 'axios'

interface LoginReqArguInterface {
    user_name: string;
    password: number|string
}
export const loginReq = (data: LoginReqArguInterface): AxiosPromise<ResponseData> => {
    console.log('loginReq--data---',data)
    return axios.request({
        url: '/api/user/login',
        data,
        method: 'POST'
    })
}
