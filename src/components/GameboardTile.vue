<template lang="html">
  <div class="playermarking">
    <button v-on:click="markTile" v-if="tileValue === -1">
      Click me
    </button>
    <div v-if="tileValue === 0">X</div>
    <div v-if="tileValue === 1">O</div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.component('GameboardTile', {
  props: ['rIndex', 'cIndex', 'tileValue'],
  data () {
    return {}
  },
  methods: {
    markTile: function () {
      this.$emit('markTile', this.rIndex, this.cIndex)
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css">
</style>
