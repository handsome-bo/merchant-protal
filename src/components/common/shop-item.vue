<template>
  <div class="shop-item">
    <div
      v-if="showPreview"
      @click="preview"
      class="preview middle-center pointer"
    >
      <i class="el-icon-view" />
      預覽
    </div>
    <div class="shop-name middle-center" :class="{ fullwidth: !showClose }">
      {{ label }}
    </div>
    <div class="middle-center close" v-if="showClose" @click="remove">
      <i class="el-icon-close"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    plabel: String,
    pid: String,
    showClose: Boolean,
    showPreview: Boolean,
  },
  data() {
    return {
      label: this.plabel,
    }
  },
  mounted() {},
  methods: {
    remove: function () {
      this.$emit("onRemove", this.pid);
    },
    preview: function () {
      this.$emit("onPreview", this.pid);
    },
  },
};
</script>

<style   scoped>
.shop-item {
  height: 50px;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
.shop-name {
  width: 90%;
  text-align: center;
}
.fullwidth {
  width: 100%;
}

.close {
  width: 40px;
  cursor: pointer;
}
.preview {
  width: 70px;
  font-size: 16px;
  font-weight: bold;
  color: #c77900;
}
</style>