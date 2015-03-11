# locate-firefox [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Find Firefox on your system.

## Usage

```js
var locateFirefox = require('locate-firefox');
// Use a callback
locateFirefox(function(l) {
  console.log(l);
});
// Use the returned Promise
locateFirefox.then(function(l) {
  console.log(l);
});
```

### CLI Usage

`stdout` path to Firefox (or `null`):
```bash
> locate-firefox
# /Applications/Firefox.app/Contents/MacOS/Firefox
```

Open Firefox (you'll need to use quotes if Firefox's path has spaces in it):

```bash
> "`locate-firefox`"
```
