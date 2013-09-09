Detect AMD
==========

Detects AMD support from JavaScript source files.

Examples
--------

```js
var detect = require('detect-amd');

detect('foo = {};');
// false

detect("define('foo', ['./bar', 'baz'], function(){});");
// { deps: [ './bar', 'baz' ],
//   id: 'foo',
//   hasRelativeDeps: true }

detect.fromFile('jquery.js');
// { deps: [],
//   id: 'jquery',
//   hasRelativeDeps: false }

detect.fromFile('angular.js');
// false

detect.fromFile('ember.js');
// false
```

