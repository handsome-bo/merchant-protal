<template>
  <div class="return-button pointer" @click="goBack">返回</div>
</template>

<script>
export default {
  methods: {
    goBack: function () {
      this.$router.go(-1);
    },
  },
};
</script>
 