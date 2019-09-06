## 配置 Babel

- `babel.config.js` 可以以编程的方式创建配置文件，编译 node_modules 目录下的模块

- `.babelrc` 需要一个简单的并且只用于单个软件包的配置

### `babel.config.js`

```js
module.exports = function (api) {
  api.cache(true);

  const presets = [ ... ];
  const plugins = [ ... ];

  return {
    presets,
    plugins
  };
}
```

### `.babelrc`

```json
{
  "presets": [...],
  "plugins": [...]
}
```

### package.json

```json
{
  "name": "my-package",
  "version": "1.0.0",
  "babel": {
    "presets": [ ... ],
    "plugins": [ ... ],
  }
}
```

### .babelrc.js

与 .babelrc 的配置相同，但你可以使用 JavaScript 编写。

## babel-loader

```js
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```