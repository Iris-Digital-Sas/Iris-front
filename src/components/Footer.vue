<template>
    <footer>
        <div>
            <span>2022 © IRIS Digital</span>
            <span>Mentions légales</span>
        </div>
        <a href="mailto:hello@irisdigital.fr">info@iris-digital.fr</a>
    </footer>
</template>

<script>
export default {
  name: "Footer_comp"
}
</script>

<style>
footer {
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  margin: 3.5% 4.5% 2.5% 8%;
  padding-bottom: 1%;
  border-bottom: 1px solid black;
}
footer div {
  flex-basis: 19%;
  display: flex;
  justify-content: space-between;
}
footer a {
  color: black;
}

@media screen and (max-width: 600px) {
  footer {
        margin: 25px 30px;
        flex-direction: column-reverse;
        border-bottom: 0;
  }
  footer a {
      text-align: center ;
      padding: 15px;
      margin-bottom: 15px;
      border-bottom: 1px black solid;
  }
}

</style>
