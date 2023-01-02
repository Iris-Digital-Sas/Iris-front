<template>
  <header class="header">
    <router-link to="/Iris-front/"><img alt="Iris Digital" src="../assets/logo-iris.png" class="header_img"/></router-link>
    <nav class="header-nav">
      <ul class="header-nav-list">
        <li><router-link to="/solutions">NOS SOLUTIONS</router-link></li>
        <li><router-link to="/team">L'EQUIPE</router-link></li>
        <li><router-link to="/prices">NOS TARIFS</router-link></li>
        <li><router-link to="/contact">CONTACT</router-link></li>
      </ul>
    </nav>
    <Slide :closeOnNavigation="true">
      <ul class="menu" >
        <li><router-link to="/solutions">NOS SOLUTIONS</router-link></li>
        <li><router-link to="/team">L'EQUIPE</router-link></li>
        <li><router-link to="/prices">NOS TARIFS</router-link></li>
        <li><router-link to="/contact">CONTACT</router-link></li>
      </ul>
    </Slide>
  </header>
</template>

<script>
import { Slide } from 'vue3-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`

export default {
  name: "Header_comp",
  components: {
        Slide // Register your component
    },
    data() {
      return {
        isOpen: false
      }
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
.bm-burger-button span {
  background-color: white;
}
.bm-cross-button{
  height: 50px;
  width: 50px;
}
.cross-style {
  top: 20px;
  right: 175px;
}
.bm-cross-button .bm-cross {
  width: 5px !important; 
  height: 40px !important;
}
header .bm-menu {
  height: 28.5%;
  padding-top: 75px;
  background-color: rgba(20, 20, 44, 1);
}
.bm-item-list > * {
  padding: 0;
}
.bm-burger-button {
  position: absolute;
  width: 40px;
  left: 50px;
  top: 25px;
}
#menu-toggle ~ .menu li {
  height: 0;
  margin: 0;
  padding: 0;
  border: 0;
  transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
}
#menu-toggle:checked ~ .menu li {
  border: 1px solid #333;
  height: 2.5em;
  padding: 0.5em;
  transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
}
.menu > li {
  flex-basis: 25%;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0.5em 0;
  width: 100%;
  color: white;
  background-color: rgba(20, 20, 44, 1);
}
.menu > li a{
  color: white;
  align-self: center;
}
.menu > li:not(:last-child) {
  border-bottom: 1px solid #444;
}

@media (max-width: 1000px) {
  .header {
    background-color: rgba(20, 20, 44, 1);
    flex-direction: row-reverse;
    padding: 0;
    width: 100%;
  }
  .menu {
    margin-bottom: 0;
    height: 75%;
    position: absolute;
    top: 0;
    margin-top: 75px;
    left: 0;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .menu-button-container {
    display: flex;
  }
  .header-nav {
    display: none;
  }
  #slide{
    display: contents;
  }
}
@media (min-width: 1000px) {
  .menu, header > div  {
      display: none;
  }
  
}
</style>
