'use strict'

function Settings () {
  this.element = null
  this.theme_button = null

  this.install = function () {
    this.element = document.createElement('div')
    this.element.setAttribute('class', 'settings')

    this.theme_button = document.createElement('select')
    this.theme_button.setAttribute('class', 'theme button')
    this.theme_button.innerHTML = '<option value=\"theme\">Theme (default)</option>'
    this.theme_button.innerHTML += '<option value=\"apollo\">Apollo</option>'
    this.theme_button.innerHTML += '<option value=\"gameboy\">Game Boy</option>'
    this.theme_button.innerHTML += '<option value=\"nightowl\">Night Owl</option>'
    this.theme_button.innerHTML += '<option value=\"roguelite\">Roguelite</option>'
    this.theme_button.innerHTML += '<option value=\"tape\">Tape</option>'
    this.theme_button.addEventListener('mousedown', () => { donsol.player.change_theme(this.theme_button.value) })
    this.theme_button.addEventListener('change', () => { donsol.player.change_theme(this.theme_button.value) })

    this.element.appendChild(this.theme_button)

    return this.element
  }
}
