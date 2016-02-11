## Usage

```javascript
var repeat = require('string-repeater')
  , str = repeat('foo ', 7);
// 'foo foo foo foo foo '
```

Or if you prefer to polyfill `String.prototype`:

```javascript
var repeat = require('string-repeater');
String.prototype.repeat = String.prototype.repeat || repeat.impl;
```
