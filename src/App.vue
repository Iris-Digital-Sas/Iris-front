<template>
  <Header_comp />
  <router-view />
 <Footer_comp />
</template>

<script>
import Header_comp from './components/Header.vue';
import Footer_comp from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer_comp,
    Header_comp
  }
}
</script>

<style>
* {
  box-sizing: content-box;
  font-family: 'Poppins', sans-serif;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
.bgc-dark-blue {
  background-color: #14142C;
  color: white;
}
section {
  height: 1080px;
}

</style>
