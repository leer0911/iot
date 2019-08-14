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
