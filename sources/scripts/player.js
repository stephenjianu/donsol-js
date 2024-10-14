'use strict'

function Player () {
  this.element = null
  this.health = new Gage_Health('Health', 21, '#ff0000')
  this.shield = new Gage_Shield('Shield', 0, '#72dec2')
  this.experience = new Gage('Experience', 0, '#ffffff')
  this.settings = new Settings()

  this.can_drink = true
  this.has_escaped = false
  this.escape_button = document.createElement('a')
  this.timeline_element = document.createElement('div')

  this.escape_button.addEventListener('mousedown', () => { donsol.player.escape_room() })

  this.start = function () {
    this.health.show_limit = false
    this.health.units = 'HP'
    this.shield.units = 'DP'
    this.experience.units = 'XP'
    this.experience.show_limit = false

    this.health.value = 21
    this.shield.value = 0
    this.shield.break_limit = null
    this.experience.limit = 54
    this.experience.value = 0

    this.can_drink = true
    this.has_escaped = false

    this.update()
  }

  this.install = function () {
    this.element.appendChild(this.settings.install())
    this.element.appendChild(this.experience.install())
    this.element.appendChild(this.shield.install())
    this.element.appendChild(this.health.install())

    this.escape_button.setAttribute('class', 'escape button')
    this.escape_button.innerHTML = 'Escape'
    this.element.appendChild(this.escape_button)
    this.timeline_element.setAttribute('class', 'timeline')
    this.timeline_element.innerHTML = ''
    this.update()
  }

  this.attack = function (card) {
    console.log('<attack>' + card.value)
    const attack_value = card.value
    let damages = attack_value
    let shield_event = ''

    // Shield
    if (this.shield.value > 0) {
      // Damaged shield
      if (this.shield.is_damaged() === true && attack_value >= this.shield.break_limit) {
        this.shield.value = 0
        this.shield.break_limit = null
        shield_event = 'your shield broke'
      } else {
        this.shield.break_limit = attack_value
        damages = attack_value > this.shield.value ? Math.abs(attack_value - this.shield.value) : 0
        shield_event = `your shield absorbed ${damages < 1 ? 'everything' : attack_value > this.shield.value ? this.shield.value : attack_value}`
      }
    }

    // Damages went through
    if (damages > 0) {
      this.health.value -= damages
    }

    // Timeline
    if (this.health.value < 1) {
      donsol.player.health.add_event('-' + damages)
      donsol.timeline.add_event('<span>The ' + card.name + ' killed you!</span>')
      donsol.board.dungeon_failed()
      this.update()
    } else {
      donsol.timeline.add_event(`${damages > 0 ? 'Battled' : 'Killed'} the ${card.name}${shield_event !== '' ? ', ' + shield_event : ''}.`)
    }

    // Experience
    donsol.player.experience.add_event('+1')

    this.can_drink = true
    donsol.is_complete = false
    this.shield.update()
    this.health.update()
  }

  this.equip_shield = function (shield_value) {
    console.log('<shield>' + shield_value)

    this.shield.value = shield_value
    this.shield.break_limit = null

    // donsol.player.shield.add_event(shield_value);
    donsol.player.experience.add_event('+1')
    donsol.timeline.add_event('Equipped shield ' + shield_value + '.')
    this.can_drink = true
    donsol.is_complete = false
    this.shield.update()
    this.health.update()
  }

  this.drink_potion = function (potion_value) {
    console.log('<potion>' + potion_value)

    if (this.can_drink === false) {
      donsol.timeline.add_event('Wasted potion!')
      donsol.player.health.add_event('Wasted')
      return
    }
    const before_health = this.health.value
    let new_health = this.health.value + potion_value; new_health = new_health > 21 ? 21 : new_health

    const mod = new_health - before_health
    donsol.player.health.value = new_health
    donsol.player.health.add_event(mod > 0 ? '+' + mod : 'Wasted')
    donsol.player.experience.add_event('+1')
    donsol.timeline.add_event('Drank potion.')
    this.can_drink = false
    donsol.is_complete = false
    this.health.update()
    this.shield.update()
  }

  this.escape_room = function () {
    donsol.speaker.play_effect('click2')
    if (this.health.value < 1 || donsol.is_complete === true || this.experience.value == 0) {
      donsol.new_game()
      return
    }
    if (this.can_escape() !== true) {
      donsol.timeline.add_event('Cannot escape the room!')
      return
    }

    this.has_escaped = true
    this.can_drink = true

    donsol.board.return_cards()
    donsol.board.enter_room()
    donsol.timeline.add_event('Escaped the room!')
  }

  this.change_theme = function (theme_value) {
    let new_theme = ''
    if (theme_value.localeCompare('theme') === 0) {
      new_theme = donsol.defaultTheme
    }
    if (theme_value.localeCompare('apollo') === 0) {
      new_theme = donsol.apolloTheme
    }
    if (theme_value.localeCompare('battlestation') === 0) {
      new_theme = donsol.battlestationTheme
    }
    if (theme_value.localeCompare('berry') === 0) {
      new_theme = donsol.berryTheme
    }
    if (theme_value.localeCompare('bigtime') === 0) {
      new_theme = donsol.bigtimeTheme
    }
    if (theme_value.localeCompare('boysenberry') === 0) {
      new_theme = donsol.boysenberryTheme
    }
    if (theme_value.localeCompare('coal') === 0) {
      new_theme = donsol.coalTheme
    }
    if (theme_value.localeCompare('cobalt') === 0) {
      new_theme = donsol.cobaltTheme
    }
    if (theme_value.localeCompare('commodore') === 0) {
      new_theme = donsol.commodoreTheme
    }
    if (theme_value.localeCompare('forestlawn') === 0) {
      new_theme = donsol.forestlawnTheme
    }
    if (theme_value.localeCompare('frameio') === 0) {
      new_theme = donsol.frameioTheme
    }
    if (theme_value.localeCompare('gameboy') === 0) {
      new_theme = donsol.gameboyTheme
    }
    if (theme_value.localeCompare('garden') === 0) {
      new_theme = donsol.gardenTheme
    }
    if (theme_value.localeCompare('gotham') === 0) {
      new_theme = donsol.gothamTheme
    }
    if (theme_value.localeCompare('haxe') === 0) {
      new_theme = donsol.haxeTheme
    }
    if (theme_value.localeCompare('isotope') === 0) {
      new_theme = donsol.isotopeTheme
    }
    if (theme_value.localeCompare('kawaii') === 0) {
      new_theme = donsol.kawaiiTheme
    }
    if (theme_value.localeCompare('laundry') === 0) {
      new_theme = donsol.laundryTheme
    }
    if (theme_value.localeCompare('lotus') === 0) {
      new_theme = donsol.lotusTheme
    }
    if (theme_value.localeCompare('mahou') === 0) {
      new_theme = donsol.mahouTheme
    }
    if (theme_value.localeCompare('nightowl') === 0) {
      new_theme = donsol.nightowlTheme
    }
    if (theme_value.localeCompare('roguelite') === 0) {
      new_theme = donsol.rogueliteTheme
    }
    if (theme_value.localeCompare('tape') === 0) {
      new_theme = donsol.tapeTheme
    }
    donsol.theme = new Theme(new_theme)
    donsol.theme.load(new_theme)
    donsol.theme.install(document.body)
    donsol.theme.start()
  }

  this.update = function () {
    if (this.health.value < 1) {
      this.escape_button.innerHTML = 'Restart'
      this.element.setAttribute('class', 'death')
    } else if (this.can_escape() === true) {
      this.escape_button.innerHTML = 'Run'
      this.element.setAttribute('class', 'unlocked')
    } else {
      this.escape_button.innerHTML = 'Locked'
      this.element.setAttribute('class', 'locked')
    }

    this.health.clear_event()
    this.shield.clear_event()
    this.experience.clear_event()

    this.health.update()
    this.shield.update()
    this.experience.update()
  }

  this.can_escape = function () {
    // Basic Overrides
    if (this.health.value < 1) { return true } // Death
    if (this.experience.value === 0) { return true } // New Game

    // - All monsters have been delt with. (Easy Mode)
    // - The player has not escaped the previous room. (Normal Mode)
    // - There is only one card left in the room. (Hard Mode)
    // - Can never escape. (Expert Mode)

    // Easy
    if (donsol.difficulty == 0) {
      if (!this.has_escaped) { return true }
      if (donsol.board.has_monsters()) { console.warn('Monsters present.'); return false }
      return true
    }

    // Normal
    if (donsol.difficulty == 1) {
      if (!this.has_escaped) { return true }
      if (donsol.board.has_monsters()) { console.warn('Monsters present.'); return false }
      return true
    }

    // Hard
    if (donsol.difficulty == 2) {
      if (!this.has_escaped) { return true }
      if (!donsol.board.cards_flipped().length != 3) { console.warn('Cards remain.'); return false }
      if (donsol.board.has_monsters()) { console.warn('Monsters present.'); return false }
      return true
    }

    // Expert
    if (donsol.difficulty == 3) {
      console.warn('Cannot escape(expert).')
      return false
    }

    return false
  }
}
