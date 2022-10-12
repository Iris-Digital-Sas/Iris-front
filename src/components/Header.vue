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
  </header>
</template>

<script>
export default {
name: "Header_comp"
}
</script>

<style>
.header {
  background-color:  rgba(33, 33, 50, 0.86);;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .5% 4.5% 0% 8%;
  position: fixed;
  width: 86%;
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
</style>
