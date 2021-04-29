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
@media (max-width: 768px){
    .group{
        height: 321px;
        width: 295px;
    }
}
@media (min-width: 768px){
    .group{
 width: 500px;
    }
}
   .group {
  margin: 0 auto;
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