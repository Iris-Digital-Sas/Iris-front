<template>
  <Header_comp />
</template>

<script>
import Header_comp from './components/Header.vue';

export default {
  name: 'App',
  components: {
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
</style>
