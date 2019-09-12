<template>
  <div class="wrapper">
    <p class="timer">{{ seconds }}</p>
    <img src="../assets/yellow.png">
  </div>
</template>

<script>
export default {
  data () {
    return {
      seconds: 3
    }
  },
  mounted () {
    const timer = setInterval(() => {
      console.log(this.seconds)
      this.seconds--
      if (this.seconds === 0) {
        this.$router.push('/3')
        clearInterval(timer)
      }
    }, 1000)
  }
}
</script>

<style scoped>
img {
  height: 150px;
  width: 190px;
  top: 260px;
  left: calc(50% - 95px);
}
</style>
