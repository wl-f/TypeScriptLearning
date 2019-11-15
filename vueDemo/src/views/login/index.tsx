import { Component, Vue } from 'vue-property-decorator'
import { loginReq } from '@/api/user';

@Component
export default class LoginPage extends Vue {
    public user_name:string = '';
    public password:string = '';

    login(){
        loginReq({user_name:this.user_name,password:this.password}).then(res=>{
            console.log('login--',res)
        })
    }




    protected render() {
        return (
            <div>
                <input v-model={ this.user_name }/>
                <input v-model={ this.password } type='password' style='margin-left: 10px;'/>
                <button style='margin-left: 10px;' on-click={ this.login }>登录</button>
            </div>
        )
    }
}
