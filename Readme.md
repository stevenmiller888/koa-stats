
# koa-stats

Gather stats for your Koa app
  ![](http://cl.ly/image/3v0q0Z3G3o3v/Screen%20Shot%202015-02-14%20at%207.50.05%20PM.png)

## Installation

    $ npm install koa-stats

## Example

```js
var stats = require('koa-stats');
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
