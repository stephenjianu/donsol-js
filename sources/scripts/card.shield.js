'use strict'

function Card_Shield (sym, value, type, name = 'Unknown', svg = '') {
  Card.call(this, sym, value, type, name, svg)

  this.touch = function () {
    if (this.is_flipped == true) { console.log('Card is already flipped'); return }
    if (donsol.player.health.value < 1) { console.log('Player is dead'); return }
    this.flip()
    donsol.player.equip_shield(this.value)
    donsol.board.update()
  }
}
