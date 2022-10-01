<template>
  <Header_comp/>
  <HomePage />
</template>

<script>
import Header_comp from "./components/Header.vue";
import HomePage from "@/components/Home-page";

export default {
  name: "App",
  components: {
    Header_comp,
    HomePage,
  },
};
</script>

<style>
* {
  box-sizing: content-box;
  font-family: "Poppins", sans-serif;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
