const fs = require('fs');
const path = require('path');
const xkcdPassword = require('xkcd-z-password');
const {EventEmitter} = require('events');

class Badwords extends EventEmitter {
  constructor({
    files = [path.join(__dirname, 'badwords.txt')], encode = 'utf8'
  } = {}) {
    super()

    this.badwordsRaw = new Set()
    for (const file of files) this.add(
      fs.readFileSync(file, encode)
      .split(/\r?\n/g)
      .filter(word => !!word && !/^(#|\/\/).+$/gm.test(word))
    )
    this.on('update', () => this.regen())
    this.emit('update', this)
  }
  regen() {
    this.re = new RegExp(`^(${[...this.badwordsRaw].join('|')})$`, 'gi')
  }
  add(...words) {
    if (Array.isArray(words[0])) {
      for (const word of words[0]) {
        this.badwordsRaw.add(word)
      }
    } else {
      for (const word of words) {
        this.badwordsRaw.add(word)
      }
    }
    this.emit('update', this)
    this.emit('ready', this)
  }
  test(tx) {
    return this.re.test(tx)
  }
}

module.exports = exports = ({
  numWords = 4, minLength = 5, maxLength = 8, badwords = new Badwords(),
  filter = s => s.length >= minLength && s.length <= maxLength,
  wordList, wordFileZ, wordFile, caseSensitive, readableinputs
} = {}) => xkcdPassword.init({
  numWords, minLength, maxLength, filter(word) {
    return filter(word) && !badwords.test(word)
  },
  wordList, wordFileZ, wordFile, caseSensitive, readableinputs
});

exports.Badwords = Badwords;
