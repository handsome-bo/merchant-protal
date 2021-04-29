<template>
  <div class="outer">
    <div class="group">
      <back-button />
      <div class="title">{{$t("updatepassword.title")}}</div>
      <div class="mgtop-15"><input class="input" :placeholder="$t('updatepassword.username')" v-model="username"/></div>

      <div class="mgtop-15">
        <input class="input" type="password" :placeholder="$t('updatepassword.password')" v-model="password"/>
      </div>

      <div class="text-center">
        <el-button class="btn" @click="nextStep">{{$t("updatepassword.continue")}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdatePassword1",
  data(){                       
    return{
    username:'',
    password:'',
    }
  },
  
  methods: {
    nextStep() {
     if(this.username==""||this.password==""){
       this.alertMessage();
     }
     else{
     this.$router.push({ name: "UpdatePassword2" });
     }
    },
       alertMessage(){
         this.$message({
          message: '用户名或密码输入有误,请重新登录',
          type: 'warning'
        });
       },
  },
};
</script>

<style   scoped>

@media (max-width: 768px){
  .group{
    height: 307px;
  width: 305px;
  }

.title{
  height: 32px;
  color: #FFFFFF;
  font-family: "Microsoft JhengHei";
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  text-shadow: 0 2px 10px 0 rgba(0,0,0,0.8);
}

.input {
  
  width: 305px;
  
}
}

@media (min-width: 768px){
.group{
   margin: 0 auto;
  width: 500px;
}

.input{
       width: 500px;
    }

}

.outer {
  padding-top: 161px;
}
.group {
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
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9);
}
.input {
  box-sizing: border-box;
  height: 50px;
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
</style>