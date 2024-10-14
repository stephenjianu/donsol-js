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
  this.berryTheme = {
    background: '#9EB7FF',
    f_high: '#3e8281',
    f_med: '#FFFFFF',
    f_low: '#c5f0ec',
    f_inv: '#FFFFFF',
    b_high: '#1C0A16',
    b_med: '#499897',
    b_low: '#6ADEDC',
    b_inv: '#6ADEDC'
  }
  this.bigtimeTheme = {
    background: '#4682B4',
    f_high: '#000000',
    f_med: '#2F4F4F',
    f_low: '#FFA500',
    f_inv: '#9932CC',
    b_high: '#F8F8FF',
    b_med: '#696969',
    b_low: '#778899',
    b_inv: '#6B8E23'
  }
  this.boysenberryTheme = {
    background: '#171717',
    f_high: '#efefef',
    f_med: '#999999',
    f_low: '#873260',
    f_inv: '#919191',
    b_high: '#373737',
    b_med: '#272727',
    b_low: '#000000',
    b_inv: '#873260'
  }
  this.coalTheme = {
    background: '#EDEAEA',
    f_high: '#393B3F',
    f_med: '#808790',
    f_low: '#A3A3A4',
    f_inv: '#000000',
    b_high: '#333333',
    b_med: '#777777',
    b_low: '#DDDDDD',
    b_inv: '#ffffff'
  }
  this.cobaltTheme = {
    background: '#18364A',
    f_high: '#ffffff',
    f_med: '#ffc600',
    f_low: '#0088ff',
    f_inv: '#000000',
    b_high: '#1B1A1C',
    b_med: '#204863',
    b_low: '#15232D',
    b_inv: '#ffffff'
  }
  this.commodoreTheme = {
    background: '#a5a7fc',
    f_high: '#ffffff',
    f_med: '#444ae3',
    f_low: '#ffd7cd',
    f_inv: '#444ae3',
    b_high: '#c2c4ff',
    b_med: '#babcff',
    b_low: '#b0b2ff',
    b_inv: '#ffffff'
  }
  this.forestlawnTheme = {
    background: '#cd853f',
    f_high: '#000000',
    f_med: '#8b0000',
    f_low: '#8b4513',
    f_inv: '#00ced1',
    b_high: '#90ee90',
    b_med: '#32cd32',
    b_low: '#9acd32',
    b_inv: '#000000'
  }
  this.frameioTheme = {
    background: '#333848',
    f_high: '#cccccc',
    f_med: '#5b52fe',
    f_low: '#4c576f',
    f_inv: '#ffffff',
    b_high: '#edeef2',
    b_med: '#262b37',
    b_low: '#394153',
    b_inv: '#5b52fe'
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
  this.gardenTheme = {
    background: '#28211c',
    f_high: '#ffefc9',
    f_med: '#9f9fa2',
    f_low: '#a3832c',
    f_inv: '#666666',
    b_high: '#aa0000',
    b_med: '#214c05',
    b_low: '#48413a',
    b_inv: '#4cb1cf'
  }
  this.gothamTheme = {
    background: '#0A0F14',
    f_high: '#FFFFFF',
    f_med: '#98D1CE',
    f_low: '#EDB54B',
    f_inv: '#C33027',
    b_high: '#093748',
    b_med: '#081F2D',
    b_low: '#10151B',
    b_inv: '#8FAF9F'
  }
  this.haxeTheme = {
    background: '#141419',
    f_high: '#FAB20B',
    f_med: '#F47216',
    f_low: '#F1471D',
    f_inv: '#141419',
    b_high: '#141419',
    b_med: '#141419',
    b_low: '#141419',
    b_inv: '#FFFFFF'
  }
  this.isotopeTheme = {
    background: '#000000',
    f_high: '#FFFFFF',
    f_med: '#33FF00',
    f_low: '#FF0099',
    f_inv: '#000000',
    b_high: '#505050',
    b_med: '#000000',
    b_low: '#000000',
    b_inv: '#FFFFFF'
  }
  this.kawaiiTheme = {
    background: '#d09090',
    f_high: '#000000',
    f_med: '#fffafa',
    f_low: '#6ea2a1',
    f_inv: '#ff1493',
    b_high: '#7fffd4',
    b_med: '#6ADEDC',
    b_low: '#b08686',
    b_inv: '#7fffd4'
  }
  this.laundryTheme = {
    background: '#1b1a1e',
    f_high: '#ffffff',
    f_med: '#ff2851',
    f_low: '#3e3d42',
    f_inv: '#000000',
    b_high: '#bdbcc1',
    b_med: '#63606b',
    b_low: '#151417',
    b_inv: '#ff2851'
  }
  this.lotusTheme = {
    background: '#161616',
    f_high: '#f0c098',
    f_med: '#999999',
    f_low: '#444444',
    f_inv: '#222222',
    b_high: '#ffffff',
    b_med: '#333333',
    b_low: '#222222',
    b_inv: '#f0c098'
  }
  this.mahouTheme = {
    background: '#E0B1CB',
    f_high: '#231942',
    f_med: '#48416d',
    f_low: '#917296',
    f_inv: '#E0B1CB',
    b_high: '#5E548E',
    b_med: '#FFFFFF',
    b_low: '#BE95C4',
    b_inv: '#9F86C0'
  }
  this.marbleTheme = {
    background: '#FBFBF2',
    f_high: '#3a3738',
    f_med: '#847577',
    f_low: '#bdb8b8',
    f_inv: '#A6A2A2',
    b_high: '#676164',
    b_med: '#A6A2A2',
    b_low: '#CFD2CD',
    b_inv: '#676164'
  }
  this.murataTheme = {
    background: '#111111',
    f_high: '#ffffff',
    f_med: '#e8dacb',
    f_low: '#5a6970',
    f_inv: '#000000',
    b_high: '#bbbbbb',
    b_med: '#8498a2',
    b_low: '#333333',
    b_inv: '#b9615a'
  }
  this.muziecaTheme = {
    background: '#090909',
    f_high: '#818181',
    f_med: '#707070',
    f_low: '#595959',
    f_inv: '#272727',
    b_high: '#272727',
    b_med: '#181818',
    b_low: '#111111',
    b_inv: '#818181'
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
  this.ninetynineTheme = {
    background: '#000000',
    f_high: '#efefef',
    f_med: '#cdcdcd',
    f_low: '#676767',
    f_inv: '#0a0a0a',
    b_high: '#eeeeee',
    b_med: '#ffd220',
    b_low: '#464646',
    b_inv: '#ff3300'
  }
  this.noirTheme = {
    background: '#222222',
    f_high: '#ffffff',
    f_med: '#cccccc',
    f_low: '#999999',
    f_inv: '#ffffff',
    b_high: '#888888',
    b_med: '#666666',
    b_low: '#444444',
    b_inv: '#000000'
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
