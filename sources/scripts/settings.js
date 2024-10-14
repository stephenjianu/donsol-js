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
    this.theme_button.innerHTML += '<option value=\"battlestation\">Battlestation</option>'
    this.theme_button.innerHTML += '<option value=\"berry\">Berry</option>'
    this.theme_button.innerHTML += '<option value=\"bigtime\">Big Time</option>'
    this.theme_button.innerHTML += '<option value=\"boysenberry\">Boysenberry</option>'
    this.theme_button.innerHTML += '<option value=\"coal\">Coal</option>'
    this.theme_button.innerHTML += '<option value=\"cobalt\">Cobalt</option>'
    this.theme_button.innerHTML += '<option value=\"commodore\">Commodore</option>'
    this.theme_button.innerHTML += '<option value=\"forestlawn\">Forest Lawn</option>'
    this.theme_button.innerHTML += '<option value=\"frameio\">Frame.io</option>'
    this.theme_button.innerHTML += '<option value=\"gameboy\">Game Boy</option>'
    this.theme_button.innerHTML += '<option value=\"garden\">Garden</option>'
    this.theme_button.innerHTML += '<option value=\"gotham\">Gotham</option>'
    this.theme_button.innerHTML += '<option value=\"haxe\">Haxe</option>'
    this.theme_button.innerHTML += '<option value=\"isotope\">Isotope</option>'
    this.theme_button.innerHTML += '<option value=\"kawaii\">Kawaii</option>'
    this.theme_button.innerHTML += '<option value=\"laundry\">Laundry</option>'
    this.theme_button.innerHTML += '<option value=\"lotus\">Lotus</option>'
    this.theme_button.innerHTML += '<option value=\"mahou\">Mahou</option>'
    this.theme_button.innerHTML += '<option value=\"marble\">Marble</option>'
    this.theme_button.innerHTML += '<option value=\"murata\">Murata</option>'
    this.theme_button.innerHTML += '<option value=\"muzieca\">Muzieca</option>'
    this.theme_button.innerHTML += '<option value=\"nightowl\">Night Owl</option>'
    this.theme_button.innerHTML += '<option value=\"ninetynine\">Ninety Nine</option>'
    this.theme_button.innerHTML += '<option value=\"noir\">Noir</option>'
    this.theme_button.innerHTML += '<option value=\"roguelite\">Roguelite</option>'
    this.theme_button.innerHTML += '<option value=\"tape\">Tape</option>'
    this.theme_button.addEventListener('mousedown', () => { donsol.player.change_theme(this.theme_button.value) })
    this.theme_button.addEventListener('change', () => { donsol.player.change_theme(this.theme_button.value) })

    this.element.appendChild(this.theme_button)

    return this.element
  }
}
