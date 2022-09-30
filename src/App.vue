<template>
  <Header_comp />
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import Header_comp from './components/Header.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Header_comp
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap');

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
</style>
