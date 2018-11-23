# mercury-client golang 问答系统前端客户端

## [接口文档](./doc/README.md)

### nodejs 安装

[下载 nodejs 安装包](https://nodejs.org/en/download/)

### 安装项目依赖

```
npm i
```

### 运行项目

```
npm run serve
```

### 打包

```
npm run build
```

### vscode 配置

插件：

- EditorConfig for VSCode
- Auto Rename Tag
- Vetur
- Prettoer-Code formatter

```json
"editor.formatOnSave": true,
"vetur.validation.template": false
```

### 生产部署

- 运行命令`npm run build`
- 发布 dist 目录下的所有静态文件到 web 服务器（如 nginx 站点目录）
