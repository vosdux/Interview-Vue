<template>
  <div class="wrapper">
    <p class="timer">{{ seconds }}</p>
    <img src="../assets/green.png" :class="{ hide: isHide }">
  </div>
</template>

<script>
export default {
  data () {
    return {
      seconds: 15,
      isHide: false
    }
  },
  mounted () {
    const timer = setInterval(() => {
      console.log(this.seconds)
      this.seconds--
      if (this.seconds === 3) this.isHide = true
      if (this.seconds === 2) this.isHide = false
      if (this.seconds === 1) this.isHide = true
      if (this.seconds === 0) {
        this.$router.push('/1')
        clearInterval(timer)
      }
    }, 1000)
  }
}
</script>

<style scoped>
img {
  height: 190px;
  width: 220px;
  top: 390px;
  left: calc(50% - 115px);
}
</style>
