<template lang="html">
  <div class="playermarking">
    <button v-on:click="testSwap">Testing</button>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.component('playermarking', {
  name: 'playermarking',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isMain: true
    }
  },
  methods: {
    testSwap: function () {
      if (this.isMain) {
        this.msg = 'Fake secondary message'
      } else {
        this.msg = 'Welcome to Your Vue.js App'
      }
      this.isMain = !this.isMain
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
</style>
