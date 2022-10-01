<template>
  <div>
    <div class="homeContainer">
      <img alt="" src="../assets/acceuil.svg" class="homeImage" />
      <h1 class="textOnImage">
        IRIS met à votre service l’Intelligence Artificielle.
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home-page.vue",
};
</script>

<style scoped lang="scss">
.homeImage {
  width: 100%;
}
.textOnImage {
  position: absolute;
  font-style: normal;
  font-weight: 600;
  font-size: 58px;
  line-height: 87px;
  text-transform: uppercase;
  color: #ffffff;
  bottom: 0;
}
.homeContainer {
  position: relative;
}
</style>
