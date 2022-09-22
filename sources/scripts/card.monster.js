'use strict'

function Card_Monster (sym, value, type, name = 'Unknown', svg = '') {
  Card.call(this, sym, value, type, name, svg)

  this.touch = function () {
    if (this.is_flipped) { console.log('Card is already flipped'); return }
    if (donsol.player.health.value < 1) { console.log('Player is dead'); return }
    this.flip()
    donsol.player.attack(this)
    donsol.board.update()
  }
}
