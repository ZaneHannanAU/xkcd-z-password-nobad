# xkcd-z-password-nobad

Simple removal of "bad" words from the main package, further cutting it (by default) to 70669 total possible items from 70806 by default.

[The main package](https://github.com/ZaneHannanAU/xkcd-z-password).

[Original remover function gist](https://gist.github.com/ZaneHannanAU/e9c89a44ebc3cd4b4a58e0a8a9ad06cf).

## Usage

```javascript
const xkcdPassword = require('xkcd-z-password-nobadwords')();

xkcdPassword.generate().then(arr => console.log(arr.join(' ')))
// Shouldn't have any "bad" words
```

If you find more bad words in the list, please [submit an issue](https://github.com/ZaneHannanAU/xkcd-z-password/issues).
