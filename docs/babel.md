# Babel

## 介绍

- 转译

- 语法扩展，能支持像 React 所用的 JSX 语法

## babel-cli

- 全局安装 `babel-cli`

- 本地安装，在 `package.json` 的写 script

- `babel-register` 

- 以编程的方式来使用 Babel 可以使用 `babel-core` 这个包

## 配置 Babel

可以通过安装插件（plugins）或预设 （presets，也就是一组插件）来指示 Babel 去做什么事情

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

## 基于环境自定义 Babel

```json
{
  "presets":["es2015"],
  "plugins":[],
  "env":{
    "development":{
      "plugins":[]
    },
    "production":{
      "plugins":[]
    }
  }
}
```

当前环境可以使用 process.env.BABEL_ENV 来获得。 如果 BABEL_ENV 不可用，将会替换成 NODE_ENV，并且如果后者也没有设置，那么缺省值是"development"。

## `babel-polyfill`

## `babel-runtime`

## 其他

babel-preset-stage-x

JavaScript 还有一些提案，正在积极通过 TC39 的流程成为标准的一部分，这个流程分为 5（0-4）个阶段，最终在阶段 4 被标准正式采纳。