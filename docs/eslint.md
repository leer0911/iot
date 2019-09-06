## Using Configuration Files

有两种方式使用配置文件。

使用配置文件的第一种方式是通过 `.eslintrc.\*`和 `package.json` 文件。ESLint 将自动在要检测的文件目录里寻找它们，紧接着是父级目录，一直到文件系统的根目录（除非指定 `root: true`）。当你想对一个项目的不同部分的使用不同配置，或当你希望别人能够直接使用 ESLint，而无需记住要在配置文件中传递什么，这种方式就很有用。

## Configuration File Formats

ESLint 支持几种格式的配置文件：

- JavaScript - 使用 `.eslintrc.js` 然后输出一个配置对象。
- YAML - 使用 `.eslintrc.yaml` 或 `.eslintrc.yml` 去定义配置的结构。
- JSON - 使用 `.eslintrc.json` 去定义配置的结构，ESLint 的 JSON 文件允许 JavaScript 风格的注释。
- (弃用) - 使用 `.eslintrc`，可以使 JSON 也可以是 YAML。
- `package.json` - 在 `package.json` 里创建一个 `eslintConfig` 属性，在那里定义你的配置。

如果同一个目录下有多个配置文件，ESLint 只会使用一个。优先级顺序如下：

- `.eslintrc.js`
- `.eslintrc.yaml`
- `.eslintrc.yml`
- `.eslintrc.json`
- `.eslintrc`
- `package.json`

## Configuration Cascading and Hierarchy

当使用 `.eslintrc.*` 和 `package.json` 文件的配置时，你可以利用层叠配置。例如，假如你有以下结构：

```
your-project
├── .eslintrc
├── lib
│ └── source.js
└─┬ tests
  ├── .eslintrc
  └── test.js
```

层叠配置使用离要检测的文件最近的 .eslintrc 文件作为最高优先级，然后才是父目录里的配置文件，等等。当你在这个项目中允许 ESLint 时，lib/ 下面的所有文件将使用项目根目录里的 .eslintrc 文件作为它的配置文件。当 ESLint 遍历到 test/ 目录，your-project/.eslintrc 之外，它还会用到 your-project/tests/.eslintrc。所以 your-project/tests/test.js 是基于它的目录层次结构中的两个.eslintrc 文件的组合，并且离的最近的一个优先。通过这种方式，你可以有项目级 ESLint 设置，也有覆盖特定目录的 ESLint 设置。

同样的，如果在根目录的 package.json 文件中有一个 eslintConfig 字段，其中的配置将使用于所有子目录，但是当 tests 目录下的 .eslintrc 文件中的规则与之发生冲突时，就会覆盖它。

如果同一目录下 .eslintrc 和 package.json 同时存在，.eslintrc 优先级高会被使用，package.json 文件将不会被使用。

注意：如果在你的主目录下有一个自定义的配置文件 (~/.eslintrc) ，如果没有其它配置文件时它才会被使用。因为个人配置将适用于用户目录下的所有目录和文件，包括第三方的代码，当 ESLint 运行时可能会导致问题。

默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。如果你想要你所有项目都遵循一个特定的约定时，这将会很有用，但有时候会导致意想不到的结果。为了将 ESLint 限制到一个特定的项目，在你项目根目录下的 package.json 文件或者 .eslintrc.\* 文件里的 eslintConfig 字段下设置 "root": true。ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。

例如，projectA 的 lib/ 目录下的 .eslintrc 文件中设置了 "root": true。这种情况下，当检测 main.js 时，lib/ 下的配置将会被使用，projectA/ 下的 .eslintrc 将不会被使用。

```
home
└── user
    ├── .eslintrc <- Always skipped if other configs present
    └── projectA
        ├── .eslintrc  <- Not used
        └── lib
            ├── .eslintrc  <- { "root": true }
            └── main.js
```

完整的配置层次结构，从最高优先级最低的优先级，如下:

行内配置
`/*eslint-disable*/`和 `/*eslint-enable*/`
`/*global*/`
`/*eslint*/`
`/*eslint-env*/`
命令行选项（或 CLIEngine 等价物）：
--global
--rule
--env
-c、--config
项目级配置：
与要检测的文件在同一目录下的 .eslintrc.\* 或 package.json 文件
继续在父级目录寻找 .eslintrc 或 package.json 文件，直到根目录（包括根目录）或直到发现一个有"root": true 的配置。
如果不是（1）到（3）中的任何一种情况，退回到 ~/.eslintrc 中自定义的默认配置。

## Extending Configuration Files

一个配置文件可以被基础配置中的已启用的规则继承。

指定配置的字符串(配置文件的路径、可共享配置的名称、eslint:recommended 或 eslint:all)
字符串数组：每个配置继承它前面的配置

ESLint 递归地扩展配置，因此基本配置也可以具有 extends 属性。extends 属性中的相对路径和可共享配置名从配置文件中出现的位置解析。

rules 属性可以做下面的任何事情以扩展（或覆盖）规则：

值为 "eslint:recommended" 的 extends 属性启用一系列核心规则，这些规则报告一些常见问题，在 规则页面 中被标记为 。这个推荐的子集只能在 ESLint 主要版本进行更新。

extends 属性值可以由以下组成：

plugin:
包名 (省略了前缀，比如，react)
/
配置名称 (比如 recommended)
JSON 格式的一个配置文件的例子：

```json
{
  "plugins": ["react"],
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "rules": {
    "no-set-state": "off"
  }
}
```
