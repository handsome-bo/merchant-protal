<template>
  <div class="counter flex">
    <div class="label-counter" @click="reduce">
      <i class="el-icon-minus"></i>
    </div>
    <input class="counter-text" v-model="textValue" />
    <div class="label-counter" @click="add" v-if="textValue <= maxValue">
      <i class="el-icon-plus"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "counter",
  data() {
    return {
      textValue: this.value,
    };
  },
  props: {
    value: Number,
    maxValue: Number,
  },
  methods: {
    reduce: function () {
      if (this.textValue <= 0) {
        this.textValue = 0;
      } else {
        this.textValue--;
      }
      console.log(this.textValue);
      this.$emit("add", this.textValue);
    },
    add: function () {
      if (this.textValue < this.maxValue) {
        this.textValue++;
      }
      this.$emit("reduce", this.textValue);
    },
  },
};
</script>

<style  scoped>
.counter {
  height: 50px;
  width: 132px;
  border-radius: 10px;
  background-color: #ffffff;
  justify-content: space-around;
}
.counter-text {
  color: #222222;
  font-family: Ubuntu;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 21px;
  text-align: center;
  width: 20%;
  border: none;
}
.label-counter {
  width: 20%;
  text-align: center;
  color: #c77900;
  cursor: pointer;
}
</style>