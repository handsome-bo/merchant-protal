<template>
   <div class="outer">
    <div class="group">
     <back-button />
      <div class="title">{{$t("updatepassword.title")}}</div>

      <div class="mgtop-15">
        <input class="input" type="password" :placeholder="$t('updatepassword.oldpassword')" v-model="oldPassword"/>
      </div>
      <div class="mgtop-15">
        <input class="input" type="password" :placeholder="$t('updatepassword.newpassword')" v-model="newPassword"/>
      </div>
      <div class="mgtop-15">
        <input class="input" type="password" :placeholder="$t('updatepassword.passwordagain')" v-model="confirmNewPassword"/>
      </div>

      <div class="text-center">
        <el-button class="btn"  @click="clickContinue">{{$t("updatepassword.continue")}}</el-button>
      </div>
      <div class="text-tip mgtop-15">
        <div>密碼需要乎合至少2項條件（大寫、小寫、數字和符號）</div>
        <ul>
          <li>大寫：ABCDEFGHIJKLMNOPQRSTUVWXYZ</li>
          <li>小寫：abcdefghijklmnopqrstuvwxyz</li>
          <li>數字：0123456789</li>
          <li>符號：~!@#$%^*()_+{}|:?-=[]\;,./‘</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdatePassword2",
  data(){
    return{
      oldPassword:'',
      newPassword:'',
      confirmNewPassword:''
    }
  },
  methods:{
    clickContinue(){
       if(this.oldPassword==""||
       this.newPassword==""||
       this.confirmNewPassword==""||
       this.newPassword!=this.confirmNewPassword
       ){
         this.alertMessage();
       }
       else{
           this.$router.push({ name: "UpdatePassword3" });
       }
    },
      alertMessage(){
         this.$message({
          message: '用户名或密码输入有误,请重新登录',
          type: 'warning'
        });
       },
  }
};
</script>

<style   scoped>
.outer {
  padding-top: 161px;
}
.group {
  margin: 0 auto;
  width: 500px;
  padding: 50px;
  color: #ffffff;
  font-family: "Microsoft JhengHei";
}
.return {
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 24px;
  text-align: left;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9);
}
.title {
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 40px;
  text-align: center;
  text-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.9);
  margin-top: 25px;
}
.input {
  box-sizing: border-box;
  height: 50px;
  width: 500px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  background-color: #ffffff;

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

.btn {
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
.text-tip{
  font-size: 16px;
  letter-spacing: 0;
  line-height: 21px;
  text-align: center;
  text-shadow: 0 2px 10px 0 rgba(0,0,0,0.9);
}
ul li{
  list-style: none;
  margin: 5px 0;
}
</style>