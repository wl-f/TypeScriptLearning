import { __decorate } from "tslib";
import { Component, Vue } from 'vue-property-decorator';
import { loginReq } from '@/api/user';
let LoginPage = class LoginPage extends Vue {
    constructor() {
        super(...arguments);
        this.user_name = '';
        this.password = '';
    }
    login() {
        loginReq({ user_name: this.user_name, password: this.password }).then(res => {
            console.log('login--', res);
        });
    }
    render() {
        return (<div>
                <input v-model={this.user_name}/>
                <input v-model={this.password} type='password' style='margin-left: 10px;'/>
                <button style='margin-left: 10px;' on-click={this.login}>登录</button>
            </div>);
    }
};
LoginPage = __decorate([
    Component
], LoginPage);
export default LoginPage;
//# sourceMappingURL=index.jsx.map