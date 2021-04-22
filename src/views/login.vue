<template>
  <div class="outer">
    <div class="group">
      <div class="title">{{$t("login.name")}}</div>
      <div class="title1">{{$t("login.registeredemailaddress")}}</div>
      <div><input class="input" :placeholder="$t('login.emailaddress')" v-model="email"/></div>
      <div><input class="input" type="password" :placeholder="$t('login.password')" v-model="password"/></div>

      <div class="other-text flex align-center space-between">
        <div>{{$t("login.forgotpassword")}}</div>
        <div><input class="checkbox" type="checkbox" />{{$t("login.keepsignin")}}</div>
      </div>
      <div class="text-center">
        <el-button class="login-btn" @click="login">{{$t("login.signin")}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
date(){
 return{
   email:'',
   password:'',
 }
  },
  methods: {
    login() {
      this.$router.push("/main");
      return;
      if(!/^\w+([\.\-]\w+)*\@\w+([\.\-]\w+)*\.\w+$/.test(this.email)
      ||this.password==null){
         this.alertMessage();
      }
      else{
         this.$router.push("/main");
      }
    
    },
    alertMessage(){
         this.$message({
          message: '邮箱或密码输入有误，请重新登录',
          type: 'warning'
        });
          // callback: action => {
          //   this.$message({
          //     type: 'info',
              
          //   });
          // }
        
    }
  },
};
</script>

<style   scoped>
@media (max-width: 768px){
  .group{
    height: 341px;
    width: 305px;
  }
  .input{
  width: 305px;
  }
  .title{
  height: 32px;
  color: #FFFFFF;
  font-family: "Microsoft JhengHei";
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 32px;
  }
  .title1{
    margin-top: 42px;
  }
}

@media (min-width: 768px){
.group{
   width: 500px;
}
.input{
    width: 500px;
}
.title{
  font-size: 30px;
  font-weight: bold;
  line-height: 40px;
}
.title1{
margin-top: 60px;
}
}

.group {
  margin: 0 auto;
  padding: 50px;
  color: #ffffff;
  font-family: "Microsoft JhengHei";
}

.title { 
  letter-spacing: 0;
  text-align: center;
  text-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.9);
}
.title1 {
  font-size: 20px;
  letter-spacing: 0;
  line-height: 27px;
  
}
.input {
  box-sizing: border-box;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  background-color: #ffffff;
  margin-top: 15px;
  text-align: center;
}
.other-text {
  margin-top: 20px;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 27px;
  text-align: center;
  text-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.9);
}

.login-btn {
  height: 50px;
  width: 210px;
  border-radius: 10px;
  background-color: #e70048;
  color: #ffffff;
  border: none;
  font-size: 20px;
  margin-top: 30px;
}
.checkbox {
  box-sizing: border-box;
  height: 17px;
  width: 17px;
  border: 1px solid #979797;
  border-radius: 4px;
  background-color: #ffffff;
}
</style>