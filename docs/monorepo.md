## 步骤

- 安装基础全局命令行工具

```bash
npm i -g lerna
npm i -g create-react-app
```

- 创建项目

```bash
cd ~/desktop
mkdir monorepo-react
cd monorepo-react
```

- 初始化 Lerna

```bash
lerna init
```

- 安装基础依赖

```bash
npm i -D react react-dom @babel/core@^7.0.0-0 @babel/cli babel-plugin-transform-es2015-modules-commonjs babel-jest enzyme enzyme-adapter-react-16 jest react-test-renderer babel-core@7.0.0-bridge.0 @babel/preset-env @babel/preset-react
```

- Create Your React App

```bash
create-react-app --scripts-version @react-workspaces/react-scripts my-app
```

## Lerna + Monorepo

目前最常见的 monorepo 解决方案是 Lerna 和 yarn 的 workspaces 特性

用 yarn 来处理依赖问题，用 lerna 来处理发布问题

通过使用 workspace，yarn install 会自动的帮忙解决安装和 link 问题

yarn install # 等价于 lerna bootstrap --npm-client yarn --use-workspaces

使用 commitizen 和 cz-lerna-changelog 来规范提交，为后面自动生成日志作好准备

```bash
yarn add  -D commitizen
yarn add  -D cz-lerna-changelog
```

安装完成后，在 package.json 中增加 config 字段，把 cz-lerna-changelog 配置给 commitizen。同时因为 commitizen 不是全局安全的，所以需要添加 scripts 脚本来执行 git-cz

```json
{
  "name": "root",
  "private": true,
  "scripts": {
    "commit": "git-cz"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-lerna-changelog"
    }
  },
  "devDependencies": {
    "commitizen": "^3.1.1",
    "cz-lerna-changelog": "^2.0.2",
    "lerna": "^3.15.0"
  }
}
```

校验的工作由 commitlint 来完成，校验的时机则由 husky 来指定。husky 继承了 Git 下所有的钩子，在触发钩子的时候，husky 可以阻止不合法的 commit,push 等等

安装 commitlint 以及要遵守的规范

```bash
yarn add -D @commitlint/cli @commitlint/config-conventional
```

在工程根目录为 commitlint 增加配置文件 commitlint.config.js 为 commitlint 指定相应的规范

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

安装 husky

```bash
yarn add -D husky
```

在 package.json 中增加如下配置

```json
 "husky": {
 		"hooks": {
    		"commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
     }
 }
```

"commit-msg"是 git 提交时校验提交信息的钩子，当触发时便会使用 commitlit 来校验。安装配置完成后，想通过 git commit 或者其它第三方工具提交时，只要提交信息不符合规范就无法提交。从而约束开发者使用 yarn run commit 来提交。

## eslint && lint-staged

除了规范提交信息，代码本身肯定也少不了靠规范来统一风格。

eslint 就是完整的一套 JavaScript（typescript） 代码规范，自带 linter & 代码自动修正。自动格式化代码并修正，提前发现风格以及程序问题, 同时也支持 typescript 的代码规范校验

lint-staged staged 是 Git 里的概念，表示暂存区，lint-staged 表示只检查并矫正暂存区中的文件。一来提高校验效率，二来可以为老的项目带去巨大的方便。

```json
// package.json
{
  "name": "root",
  "private": true,
  "scripts": {
    "c": "git-cz"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-lerna-changelog"
    }
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "*.js": ["eslint --fix", "git add"]
  },
  "devDependencies": {
    "@commitlint/cli": "^8.1.0",
    "@commitlint/config-conventional": "^8.1.0",
    "commitizen": "^3.1.1",
    "cz-lerna-changelog": "^2.0.2",
    "husky": "^3.0.0",
    "lerna": "^3.15.0",
    "lint-staged": "^9.2.0"
  }
}
```
