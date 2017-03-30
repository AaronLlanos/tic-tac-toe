
export default class GameManager {
  constructor (gameboard) {
    // gameboard a matrix to keep track of the board.
    // each value in the matrix can be -1, 0, or 1
    // -1 indicates a no play.
    // 0 indicates player 1 has marked this tile
    // 1 indicates player 2 has marked this tile
    this.gameboard = gameboard
    this.markTile = this.markTile
    this.getTile = this.getTile
  }

  // Will update the value of the given row or column with the associated
  // player number.
  markTile (value, row, column) {
    this.gameboard[row][column] = value
  }

  getTile (row, column) {
    return this.gameboard[row][column]
  }
}
