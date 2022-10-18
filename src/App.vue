<template>
  <Header_comp />
  <main>
    <router-view />
  </main>
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
body {
margin: 0
}
body {
  margin: 0;
}
body {
  margin: 0;
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
.lavender-box {
  color: white;
  background:linear-gradient(  .25turn , #9EAAFF 100%,white 100% );
  transform: translateX(5);
  border: 50px linear #9EAAFF;
}
.lavender-box:hover {
  color: #9EAAFF;
  transition: color 1ms, border 1ms;
  animation: button-opening 4000ms;
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
@keyframes button-opening {
  0% {
    background:linear-gradient(  .25turn , #9EAAFF 100% );
  }
  30% {
    background: linear-gradient(  .25turn ,white 10% , #9EAAFF 100%);
  }
  50% {
    background: linear-gradient(  .25turn ,white 40% , #9EAAFF 100%);
  }
  80% {
    background: linear-gradient(  .25turn ,white 90% , #9EAAFF 100%);
  }
  100% {
    background: linear-gradient(  .25turn ,white 100% , #9EAAFF 100%);
  }
}

</style>

