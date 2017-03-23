<template lang="html">
  <table class="gameboard">
    <tr v-for="row in gameboardRowCount">
      <td v-for="column in gameboardColumnCount">
        <playermarking></playermarking>
      </td>
    </tr>
  </table>
</template>

<script>
import PlayerMarking from './PlayerMarking'

export default {
  name: 'gameboard',
  components: { PlayerMarking },
  data () {
    return {
      gameboardRowCount: 3,
      gameboardColumnCount: 3
    }
  },
  methods: {}
}
</script>

<style lang="css">

</style>
