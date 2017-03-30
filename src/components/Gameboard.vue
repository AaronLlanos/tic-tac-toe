<template lang="html">
  <table class="gameboard">
    <tr v-for="(row, rIndex) in gameboardRowCount">
      <td v-for="(column, cIndex) in gameboardColumnCount">
        <GameboardTile
          :isPlayerOne="isPlayerOne"
          :tile-value="gameManager.gameboard[rIndex][cIndex]"
          :r-index="rIndex"
          :c-index="cIndex"
          v-on:markTile="registerTileMark"
        ></GameboardTile>
      </td>
    </tr>
  </table>
</template>

<script>
import GameboardTile from './GameboardTile'
import GameManager from '../lib/GameManager'

// Default game settings.
const GameboardRowCount = 3
const GameboardColumnCount = 3
const GameboardTileArray = []

// Construct the board to keep track.
for (let r = 0; r < GameboardRowCount; r++) {
  let row = []
  for (let c = 0; c < GameboardColumnCount; c++) {
    // -1 Means that this tile is not played.
    // 0 Means player 1 played this tile
    // 1 Means player 2 played this tile
    row.push(-1)
  }
  GameboardTileArray.push(row)
}

export default {
  name: 'gameboard',
  components: { GameboardTile },
  data () {
    return {
      isPlayerOne: true,
      gameboardRowCount: GameboardRowCount,
      gameboardColumnCount: GameboardColumnCount,
      gameManager: new GameManager(GameboardTileArray)
    }
  },
  methods: {
    registerTileMark: function (row, column) {
      const playerMarking = this.isPlayerOne ? 0 : 1
      this.isPlayerOne = !this.isPlayerOne
      this.gameManager.gameboard[row][column] = playerMarking
      console.log(`set gameboard[${row}][${column}] to ${playerMarking}`)
    }
  }
}
</script>

<style lang="css">

</style>
