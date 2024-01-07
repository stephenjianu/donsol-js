'use strict'

const HEART = 'heart'
const DIAMOND = 'diamond'
const CLOVE = 'clove'
const SPADE = 'spade'
const JOKER = 'joker'

function Donsol () {
  this.defaultTheme = {
    background: '#000000',
    f_high: '#000000',
    f_med: '#a93232',
    f_low: '#aaaaaa',
    f_inv: '#ffffff',
    b_high: '#ffffff',
    b_med: '#cccccc',
    b_low: '#333333',
    b_inv: '#a93232'
  }
  this.apolloTheme= {
    background: '#29272b',
    f_high: '#ffffff',
    f_med: '#e47464',
    f_low: '#66606b',
    f_inv: '#000000',
    b_high: '#000000',
    b_med: '#201e21',
    b_low: '#322e33',
    b_inv: '#e47464'
  }
  this.battlestationTheme = {
    background: '#222222',
    f_high: '#ffffff',
    f_med: '#affec7',
    f_low: '#888888',
    f_inv: '#000000',
    b_high: '#555555',
    b_med: '#333333',
    b_low: '#111111',
    b_inv: '#affec7'
  }
  this.gameboyTheme = {
    background: '#9BBC0F',
    f_high: '#0F380F',
    f_med: '#0F380F',
    f_low: '#306230',
    f_inv: '#9BBC0F',
    b_high: '#8BAC0F',
    b_med: '#8BAC0F',
    b_low: '#9BBC0F',
    b_inv: '#0F380F'
  }
  this.nightowlTheme = {
    background: '#011627',
    f_high: '#7fdbca',
    f_med: '#82aaff',
    f_low: '#c792ea',
    f_inv: '#637777',
    b_high: '#5f7e97',
    b_med: '#456075',
    b_low: '#2f4759',
    b_inv: '#7fdbca'
  }
  this.rogueliteTheme = {
    background: '#352b31',
    f_high: '#f5f5d4',
    f_med: '#70838c',
    f_low: '#4a6b83',
    f_inv: '#352b31',
    b_high: '#96cf85',
    b_med: '#5a6970',
    b_low: '#4a3b44',
    b_inv: '#f5f5d4'
  }
  this.tapeTheme = {
    background: '#dad7cd',
    f_high: '#696861',
    f_med: '#ffffff',
    f_low: '#b3b2ac',
    f_inv: '#43423e',
    b_high: '#43423e',
    b_med: '#c2c1bb',
    b_low: '#e5e3dc',
    b_inv: '#eb3f48'
  }

  this.theme = new Theme(this.defaultTheme)

  this.deck = new Deck()
  this.board = new Board()
  this.player = new Player()
  this.timeline = new Timeline()
  this.controller = new Controller()
  this.speaker = new Speaker()
  this.walkthrough = new Walkthrough()

  this.is_complete = false
  this.difficulty = 1

  this.install = function (host = document.body) {
    this.theme.install(host)
  }

  this.start = function () {
    donsol.board.element = document.getElementById('board')
    donsol.player.element = document.getElementById('player')

    this.theme.start()
    this.deck.start()
    this.player.install()
    donsol.timeline.install(donsol.player.element)
    this.player.start()

    this.board.enter_room(true)
    donsol.deck.shuffle()

    this.update()
  }

  this.new_game = function () {
    this.deck = new Deck()
    this.deck.start()

    this.player.start()
    this.board.enter_room(true)
    donsol.deck.shuffle()

    this.update()
  }

  this.toggle_difficulty = function () {
    this.difficulty = this.difficulty < 3 ? this.difficulty + 1 : 0
    donsol.new_game()
  }

  this.set_difficulty = function (id) {
    this.difficulty = id
    donsol.new_game()
  }

  this.get_difficulty = function () {
    return this.difficulty == 3 ? 'Expert' : this.difficulty == 2 ? 'Hard' : this.difficulty == 1 ? 'Normal' : 'Easy'
  }

  this.update = function () {
    console.log('Difficulty', this.get_difficulty())
  }

  this.skip = function () {
    if (donsol.player.experience.value < 1) {
      donsol.new_game()
    } else {
      donsol.player.escape_room()
    }
  }
}
