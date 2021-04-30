<template>
  <div id="Index">
    <el-container>
      <el-header>
        <headercomponent></headercomponent>
      </el-header>
      <el-main>
        <div class="main">
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
import headercomponent from "../../components/mobile/header";
import footercomponent from "../../components/mobile/footer";
export default {
  components: { headercomponent, footercomponent },
};
</script>

<style  scoped>
.main {
  height: 830px;
  background: url("../../assets/images/bg2.jpg") no-repeat 0;
}
</style>