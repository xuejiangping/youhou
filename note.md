1. `package.json`中`bin` 可以指向：

- JavaScript 文件
- Python、Ruby 等带 shebang 的脚本
- Shell 脚本
- 编译后的二进制文件
- 其他操作系统可执行文件

2. `pnpx/(pnpm dlx) --package=包名 bin中配置的命令名 参数1 参数2` 来执行包中的命令
3. `pnpm create 项目名` 会查找 的包，然后执行bin字段下名为 `create-项目名`的命令

## 油猴脚本项目结构

每个油猴脚本独立维护，入口文件只负责油猴元数据和初始化；具体功能放到 `features`，多个脚本复用的能力放到 `utils` 或 `shared`。

```text
src/
├── scripts/
│   └── webhook-test/
│       ├── index.js              # 油猴脚本入口、元数据、初始化
│       └── features/             # webhook-test 的具体功能
│           └── webhook.js
└── utils/                        # 多个脚本共用的工具
	├── GamepadController.js
	├── sayHello.js
	└── index.js
```

### 目录职责

- `scripts/<脚本名>/index.js`：UserScript 元数据、入口初始化，不放大量业务逻辑
- `scripts/<脚本名>/features/`：脚本功能，例如签到、Webhook、批量操作
- `scripts/<脚本名>/services/`：接口请求和业务服务
- `scripts/<脚本名>/ui/`：按钮、面板、弹窗等页面交互
- `utils/`：通用、尽量无副作用的工具函数
- `shared/`：多个脚本共用的请求、DOM、存储等模块（需要时再创建）

### 构建命令

- `pnpm build:yhscript:raw`：推荐的油猴脚本构建，保留元数据和可读格式，不使用 UMD 工厂包装
- `pnpm build:yhscript`：旧的 UMD 构建方式，入口已同步到 `src/scripts/webhook-test/index.js`
- `pnpm build:utils`：构建公共 `YHUtils` 工具包

新增油猴脚本时，创建 `src/scripts/<脚本名>/index.js`，再为它创建独立的 Vite 配置和构建命令。只有真正复用的代码才放入 `utils` 或 `shared`。
