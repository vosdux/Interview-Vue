<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {}
  }
}
</script>

<style>
body {
  height: 100%;
  margin: 0;
  padding-top: 40px;
}
#app {
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  background: url('./assets/traffic_light.png') fixed no-repeat center center;
  background-size: 250px 500px;
  position: relative;

}
img {
  position: absolute;
}
.timer {
  font-size: 30px;
  font-weight: bold;
  margin: 0;
}
.hide {
  display: none;
}
</style>
