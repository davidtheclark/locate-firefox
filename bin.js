#!/usr/bin/env node

var locateFirefox = require('./');

locateFirefox().then(function(r) {
  console.log(r);
});
