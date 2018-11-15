# 接口文档

## 接口规范

- http状态码使用标准的状态码
- 业务状态码使用自定义的状态码,属性名code,成功返回0
- 响应体success属性,表示业务执行是否成功
- 响应体message属性,返回提示信息,成功统一返回ok
- 响应体data属性,返回业务数据

## 所有接口

- [获取token](./token.md)
- [发布问题](./post-issue.md)
- [问题详情](./get-issue.md)
