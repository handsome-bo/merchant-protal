<template>
  <div class="outer-box">
    <div class="box">
      <div class="title-group flex space-between">
        <div class="title middle-center">{{ $t("evoucher.selectdate") }}</div>
      </div>
      <div class="date-group">
        <el-date-picker
          class="datepicker"
          v-model="selectDate"
          type="daterange"
          range-separator="到"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          format="yyyy-MM-dd"
        >
        </el-date-picker>
      </div>
      <div class="button-group flex space-between">
        <el-button class="search-btn" @click="search()">{{
          $t("evoucher.view")
        }}</el-button>
        <el-button class="download-btn" @click="download()">{{
          $t("evoucher.saveasexcel")
        }}</el-button>
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
.outer-box {
  height: 202px;
  width: 470px;
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
  height: 50px;
  width: 210px;
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
  height: 50px;
  width: 210px;
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