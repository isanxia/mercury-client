# 获取token

### POST /api/token

## 请求头

属性名 | 数据类型 | 是否必传 | 示例值 | 描述
-------|----------|----------|--------|------
 Content-Type | string | yes | application/json;charset=UTF-8 | 数据格式

## 请求参数 -object

属性名 | 数据类型 | 是否必传 | 示例值 | 描述
-------|----------|----------|--------|------
 username | string | yes | fasfasf |  用户名
 password | string | yes | fasfasf |  密码

 - 示例
 ``` json
 {
   "username": "jack",
   "password": "123456"
 }
 ```


## 响应参数

属性名 | 数据类型 | 示例值 | 描述
-------|----------|----------|--------|------
 code | number | 0 |  自定义状态码
 success | boolean | true | 是否成功
 message | string | ok | 提示文本
 token | string | dgasdga4323dss | token

- 成功示例
``` json
{
  "code": 0,
  "success": true,
  "message": "ok",
  "token": "sdfasdfasfdasfdasdfasfasdfasfd"
}
```

- 失败示例
``` json
{
  "code": 3306,
  "success": false,
  "message": "用户名密码错误",
  "data": {}
}
```
