<template>
  <header class="header">
    <a href="#"><img alt="Iris Digital" src="../assets/logo-iris.png" class="header_img"/></a>
    <nav class="header-nav">
      <ul class="header-nav-list">
        <li><a href="">NOS SOLUTIONS</a></li>
        <li><a href="">L'EQUIPE</a></li>
        <li><a href="">REALISATIONS</a></li>
        <li><a href="">NOS TARIFS</a></li>
        <li><a href="">CONTACT</a></li>
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