<template>
  <div id="app">
    <gradation :duration="15" color="linear-gradient( 109.6deg, #FBE4E2 11.4%, #67A5DA 91.1% )">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </gradation>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Gradation from "./components/Gradation.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    Gradation
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
