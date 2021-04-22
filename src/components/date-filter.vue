<template>
  <div class="outer-box">
    <div class="box">

    <div class="title-group flex space-between">
      <div class="title middle-center">{{$t("evoucher.selectdate")}}</div>
    </div>

    <div v-if="isMobile">
        <el-date-picker class="datepicker"
        v-model="selectDate"
        type="daterange"
        :range-separator="$t('datefilter.to')"
        :start-placeholder="$t('datefilter.startdate')"
        :end-placeholder="$t('datefilter.enddate')"
        format="yyyy-MM-dd"
      >
      </el-date-picker>
         <div class="flex space-between">
      <el-button class="search-btn" @click="search()">{{$t("evoucher.view")}}</el-button>
      <el-button class="download-btn" @click="download()">{{$t("evoucher.saveasexcel")}}</el-button>
    </div>
    </div>
    <div class="date-group" v-else>
      <el-date-picker class="datepicker"
        v-model="selectDate"
        type="daterange"
        :range-separator="$t('datefilter.to')"
        :start-placeholder="$t('datefilter.startdate')"
        :end-placeholder="$t('datefilter.enddate')"
        format="yyyy-MM-dd"
      >
      </el-date-picker>
    
    <div class="button-group flex space-between">
      <el-button class="search-btn" @click="search()">{{$t("evoucher.view")}}</el-button>
      <el-button class="download-btn" @click="download()">{{$t("evoucher.saveasexcel")}}</el-button>
    </div>
</div>
    </div>
  </div>
</template>

<script>
export default {
  
  name: "DateFilters",
  data() {
    return {
      selectDate: "",
      isMobile:true,
    };
  },
  methods: {
    search() {
      console.log(this.selectDate);
      this.$emit("search", this.selectDate);
    },
    download() {
      this.$emit("download", this.selectDate);
    },
  },
};
</script>

<style  scoped>
@media (max-width: 768px) {
  .outer-box {
  height: 257px;
  width: 335px;
  }
   .search-btn{
  height: 50px;
  width: 137px;
   }
   .download-btn{
     height: 50px;
  width: 137px;
   }        
        
}
@media (min-width: 768px) {
  .outer-box {
  height: 202px;
  width: 470px;
  }
  .search-btn{
  height: 50px;
  width: 210px;
  }
  .download-btn{
     height: 50px;
  width: 210px;
  }

}

.outer-box {

  border-radius: 10px;
  background-color: #d7c4a3;
}
.box {
  padding: 20px;
}
.title {
  font-size: 20px;
  text-align: center;
  width: 90%;
}

.date-group {
  width: 430px;
  margin-top: 20px;
}
.datepicker {
  height: 50px;
  width: 100%;
  border-radius: 10px;
  background-color: #ffffff;
}
.button-group {
  width: 430px;
  margin-top: 15px;
}
.search-btn {

  border-radius: 10px;
  background-color: #c77900;

  color: #ffffff;
  font-family: "Microsoft JhengHei";
  font-size: 20px;
  font-weight: bold;

  text-align: center;
  border: none;
}
.download-btn {
 
  border-radius: 10px;
  background-color: #e70048;
  color: #ffffff;
  font-family: "Microsoft JhengHei";
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  border: none;
}
</style>