<template>
  <div id="footer">
    <div class="footer-logo">
      <img src="../assets/Images/footer_logo2.png" />
      <img src="../assets/Images/footer_logo1.png" />
    </div>
    <div class="footer-text">
      {{ $t("footer.copyright") }}
    </div>

    <div class="text-center termofuse">
      {{ $t("footer.termofuse") }} ｜ {{ $t("footer.notice") }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style   scoped>
@media (max-width: 768px) {
  #footer {
 
    border-top: 3px solid #c77800;
    width: 100%;
  }
}
@media (min-width: 768px) {
  #footer {
    padding: 20px;
    border-top: 3px solid #c77800;
    max-width: 1920px;
  }
}
.footer-logo {
  height: 30px;

  text-align: center;
}
.footer-text {
  color: #222222;
  font-family: "Microsoft JhengHei";
  font-size: 14px;
  letter-spacing: 0;
  line-height: 19px;
  text-align: center;
}
.termofuse {
  height: 25px;
  padding: 5px;
}
</style>