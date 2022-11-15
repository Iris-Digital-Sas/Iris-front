<template>
  <header class="header">
    <router-link to="/"><img alt="Iris Digital" src="../assets/logo-iris.png" class="header_img"/></router-link>
    <nav class="header-nav">
      <ul class="header-nav-list">
        <li><router-link to="/solutions">NOS SOLUTIONS</router-link></li>
        <li><router-link to="/team">L'EQUIPE</router-link></li>
        <li><router-link to="/achievements">REALISATIONS</router-link></li>
        <li><router-link to="/prices">NOS TARIFS</router-link></li>
        <li><router-link to="/contact">CONTACT</router-link></li>
      </ul>
    </nav>
    <div>
      <Slide closeOnNavigation="true" right id="slide">
        <ul class="slide-nav-list">
          <li><router-link to="/solutions">NOS SOLUTIONS</router-link></li>
          <li><router-link to="/team">L'EQUIPE</router-link></li>
          <li><router-link to="/achievements">REALISATIONS</router-link></li>
          <li><router-link to="/prices">NOS TARIFS</router-link></li>
          <li><router-link to="/contact">CONTACT</router-link></li>
        </ul>
    </Slide>
    </div>    
  </header>
</template>

<script>
import { Slide } from 'vue3-burger-menu'  

export default {
  name: "Header_comp",
  components: {
        Slide,
  }
}
</script>

<style>
.header {
  background-color: rgba(20, 20, 44, 0.92);
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5% 4.5% 0% 8%;
  position: fixed;
  width: 87.5%;
}
.header img {
  width: 50%;
}
.header-nav {
  flex-basis: 52.5%;
}
.header-nav-list {
  display: flex;
  justify-content: space-between;
}
.header-nav-list a {
  font-weight: 400;
  font-size: 18px;
  color: white;
}
.header-nav-list a:hover {
  color: #9EAAFF;
}
#slide{
  display: none;
}
.bm-menu {
  background-color: rgb(20, 20, 44);
  padding-top: 90px;
  height: 35%;
}
.bm-item-list {
  height: 100%;
  padding: 0;
}
.bm-burger-button {
  left: 350px;
  top: 30px;
}
.bm-burger-button > * {
  background-color: white;
}
.bm-cross-button, .bm-burger-button {
  top: 30px;
  left: 75%;
}
.slide-nav-list {
  padding: 0;
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.slide-nav-list a {
  font-weight: 400;
  font-size: 18px;
  color: white;
}
.slide-nav-list a:hover {
  color: #9EAAFF;
}

@media screen and ( max-width: 600px) {
  .header-nav {
    display: none;
  }
  #slide {
    display: contents;
  }
}
</style>
