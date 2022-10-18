<template>
  <Header_comp />
  <div id="container">
    <main>
      <router-view />
    </main>    
    <Footer_comp />
  </div>  
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
body {
  margin: 0;
}
#container {
  height: 100%;
}
#container main {
  min-height: 100%;
  position: relative;
  padding-bottom: 100px;
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
