import Mock from 'mockjs';
const success = (msg = '', data) => {
    // 这里定义一个成功返回的统一方法，返回我们在axios封装时指定的三个字段
    return {
        code: 0,
        msg,
        data
    };
};
const error = (code, msg = '', data) => {
    // 再定义一个返回错误状态的方法，一个必传参数是code，即错误码
    return {
        code,
        msg,
        data
    };
};
Mock.mock(/\/api\/user\/login/, loginRes);
function loginRes(req) {
    const { user_name, password } = JSON.parse(req.body);
    if (user_name === 'liwei' && String(password) === '123') {
        return success();
    }
    else {
        return error(1001, '用户名或密码错误');
    }
}
//# sourceMappingURL=index.js.map