<template >
  <div id="app">
    <TitleBar />
    <router-view></router-view>
  </div>
</template>

<script>
import TitleBar from "./components/TitleBar";

export default {
  name: 'app',
  components: {
    TitleBar,
  },
}
</script>

<style>
#app {
  font-family: Verdana, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ebebeb;
  background-color: #333943;
  background-image: url('assets/black-linen.png');
  min-height: 100vh;
}
</style>
