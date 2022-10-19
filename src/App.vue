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
body {
  margin: 0;
}
.bgc-dark-blue {
  background-color: #14142C;
  color: white;
}
.bgc-grey {
  background-color: #F5F5F5;
}
.bgc-grey {
  background-color: #F5F5F5;
}
.lavender-text {
  color: #9EAAFF;
}
.bgc-grey {
  background-color: #F5F5F5;
}
.lavender-text {
  color: #9EAAFF;
}
.bgc-grey {
  background-color: #F5F5F5;
}
.lavender-text {
  color: #9EAAFF;
 }
section {
  height: 1080px;
}
.lavender-text {
  color: #9EAAFF;
}
.lavender-box {
  position: relative;
  border-radius: 40px;
  border: 3px solid #9EAAFF;
  overflow: hidden;
  width: 330px;
  height: 65px;
}
.lavender-box .lavender-box-text {
  color: white;
  z-index: 1;
  text-align: center;
}
.lavender-box::after {
  content: " ";
  background-color: #9EAAFF;
  position: absolute;
  left: 0px;
  top: 0px;
  border-radius: 40px;
  display: block;
  width: 100%;
  height: 100%;  
  transform: translateX(0);
  opacity: 1;
  transition: transform 1ms, opacity 300ms 1ms;
}
.lavender-box:hover .lavender-box-text {
  color: #9EAAFF;
  transition: all 100ms;
}
.lavender-box:hover::after  {
  transform: translateX(330px);
  opacity: 0;
  transition: transform 500ms ,opacity 1ms 500ms;
}
.lavender-button {
  position: relative;
  border: solid 3px #9EAAFF;
  overflow: hidden;
  width: 100px;
  height: 1px;
  font-weight: 500;
  font-size: 137%;
  line-height: 154%;
  border-radius: 40px;
  padding: 30px 70px;
}
.lavender-button .lavender-button-text  {
  z-index: 1;
  position: absolute;
  text-align: center;
  color: #9EAAFF;
  top: 10px;
  left: 15px;
}
.lavender-button::after {
  content: " ";
  background-color: #9EAAFF;
  position: absolute;
  left: -350px;
  top: 0px;
  border-radius: 40px;
  display: block;
  width: 120%;
  height: 100%;
  transition: background-color 50ms;
}
.lavender-button:hover .lavender-button-text {
  color: white;
  transition: all 100ms;
}
.lavender-button:hover::after  {
  transform: translateX(350px);
  transition: transform 500ms;
}  

 </style>
