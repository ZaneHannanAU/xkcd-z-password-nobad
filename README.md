# [xkcd-z-password-nobad][xkcd-z-password-nobad-n]

Extended form of [@ZaneHannanAU/xkcd-z-password][xkcd-z-password-g], doing simple removal of "bad" words from the main package, further cutting it (by default) to 70669 total possible items from 70806 by default.

[Original remover function gist](https://gist.github.com/ZaneHannanAU/e9c89a44ebc3cd4b4a58e0a8a9ad06cf).

[xkcd-z-password-g]: https://github.com/ZaneHannanAU/xkcd-z-password
[xkcd-z-password-n]: https://www.npmjs.com/package/xkcd-z-password
[xkcd-z-password-nobad-g]: https://github.com/ZaneHannanAU/xkcd-z-password-nobad
[xkcd-z-password-nobad-n]: https://www.npmjs.com/package/xkcd-z-password-nobadwords

## Usage

```javascript
const xkcdPassword = require('xkcd-z-password-nobadwords')();

xkcdPassword.generate().then(arr => console.log(arr.join(' ')))
// Shouldn't have any "bad" words
```

Defaults:

```javascript
const nobad = require('xkcd-z-password-nobadwords')
const xkcdPassword = nobad({
  numWords: 4, minLength: 5, maxLength: 8,
  // badwords: new nobad.Badwords(), // a function with a .test(word) method
  // filter(word) {return minLength <= word.length <= maxLength} // one word function.
})
```

## Reporting

If you find more bad words in the list, please [submit an issue](https://github.com/ZaneHannanAU/xkcd-z-password-nobad/issues).

If the issue is not relevant to this list, please submit an issue on [the main package](https://github.com/ZaneHannanAU/xkcd-z-password).
