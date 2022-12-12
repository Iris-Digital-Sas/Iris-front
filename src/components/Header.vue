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
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li><router-link to="/solutions">NOS SOLUTIONS</router-link></li>
        <li><router-link to="/team">L'EQUIPE</router-link></li>
        <li><router-link to="/achievements">REALISATIONS</router-link></li>
        <li><router-link to="/prices">NOS TARIFS</router-link></li>
        <li><router-link to="/contact">CONTACT</router-link></li>
    </ul>   
  </header>
</template>

<script>

export default {
  name: "Header_comp"
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
.menu {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.menu > li {
  margin: 0 1rem;
  overflow: hidden;
}

.menu-button-container {
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#menu-toggle {
  display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
  display: block;
  background-color: #fff;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}

.menu-button::before {
  content: '';
  margin-top: -8px;
}

.menu-button::after {
  content: '';
  margin-top: 8px;
}

#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0px;
  transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0px;
  transform: rotate(-405deg);
}

@media (max-width: 1000px) {
  .menu-button-container {
    display: flex;
  }
  .menu {
    position: absolute;
    top: 0;
    margin-top: 77px;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
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
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0.5em 0;
    width: 100%;
    color: white;
    background-color: rgba(20, 20, 44, 1);;
  }
  .menu > li a{
    color: white;
  }
  .menu > li:not(:last-child) {
    border-bottom: 1px solid #444;
  }
  .header-nav {
    display: none;
  }
  #slide{
    display: contents;
  }
}
@media (min-width: 1000px) {
  .menu {
      display: none;
  }
}
</style>
