<template>
    <div class="outer">
        <div class="group">
           <p>
            <i class="el-icon-warning">    
            </i>
           </p>
         <div class="text">
             {{$t('errorpage.errormessage')}}
             </div>   
      
        </div>
    </div>
</template>

<script>
export default {
    
    name:'ErrorPage',
}
</script>>

<style scoped>

   .group {
  margin: 0 auto;
  width: 295px;
  height: 321px;
  padding: 50px;
  color: #ffffff;
  font-family: "Microsoft JhengHei";
}
p{
    text-align: center;
}
.el-icon-warning {
    font-size: 50px;
 
 
 
}
.text {

  font-size: 30px;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 40px;
  text-align: center;
  text-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.9);
}
</style>