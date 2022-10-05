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
bgc-dark-blue {
  background-color: #14142C;
  color: white;
}
.bgc-grey {
  background-color: #F5F5F5;
}
.lavender-text {
  color: #9EAAFF;
}
.lavender-box {
  color: white;
  background-color: #9EAAFF;
}
.lavender-button {
  color: #9EAAFF;
  border: solid 3px #9EAAFF;
  background-color: #0000;
  font-weight: 500;
  font-size: 137%;
  line-height: 154%;
  border-radius: 50px;
  padding: 1% 4%;
}
section {
  height: 1080px;
}

</style>
