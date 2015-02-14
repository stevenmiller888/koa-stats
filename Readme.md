
# koa-stats

Gather stats for your Koa app

## Installation

    $ npm install koa-stats

## Demo

  ![Demo](http://cl.ly/image/1M0z2k2c3y07/Screen%20Shot%202015-02-13%20at%204.30.36%20PM.png)

## Example

```js
var koa = require('koa');
var app = koa();

app.use(stats());

app.listen(3000);
```

## Tests

```js
$ make test
```

## License

MIT
