<template>
  <div class="return-button pointer" @click="goBack">{{$t("button.back")}}</div>
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
 