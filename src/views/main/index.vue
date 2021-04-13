<template>
  <div id="Index">
    <el-container>
      <el-header>
        <headercomponent></headercomponent>
      </el-header>
      <el-main>
        <div class="main-wrapper">
        <router-view />
        </div>
      </el-main>
      <el-footer>
        <footercomponent></footercomponent>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import headercomponent from "../../components/Header";
import footercomponent from "../../components/Footer";
export default {
  name: "index",
  components: { headercomponent, footercomponent },
};
</script>

<style  scoped>

</style>