1. `package.json`中`bin` 可以指向：

- JavaScript 文件
- Python、Ruby 等带 shebang 的脚本
- Shell 脚本
- 编译后的二进制文件
- 其他操作系统可执行文件

2. `pnpx/(pnpm dlx) --package=包名 bin中配置的命令名 参数1 参数2` 来执行包中的命令
3. `pnpm create 项目名` 会查找 的包，然后执行bin字段下名为 `create-项目名`的命令
