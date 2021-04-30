<template>
   <div class="outer">
    <div class="group">
      <div class="text">
        {{$t("updatepassword.errormessage")}}
        <div class="text-center">
        <el-button class="btn"  @click="clickContinue">{{$t("updatepassword.continue")}}</el-button>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdatePassword3",
  data(){
    return{
      oldPassword:'',
      newPassword:'',
      confirmNewPassword:''
    }
  },
  methods:{
    clickContinue(){
      this.$router.push("/");
    },
  }
};
</script>

<style   scoped>
.text {
 
  font-size: 30px;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 40px;
  text-align: center;
  text-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.9);
}
.outer {
  padding-top: 161px;
}
.group {
  margin: 0 auto;
  height: 181px;
  width: 210px;
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