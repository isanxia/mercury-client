# 获取token

### POST /api/issue

## 请求头

属性名 | 数据类型 | 是否必传 | 示例值 | 描述
-------|----------|----------|--------|------
 Content-Type | string | yes | application/json;charset=UTF-8 | 数据格式
 Authorization | string | yes | Bearer dgasdga4323dss | token

## 请求参数 -object

属性名 | 数据类型 | 是否必传 | 示例值 | 描述
-------|----------|----------|--------|------
 title | string | yes | fasfasf |  标题
 content | string | yes | fasfasf |  内容

 - 示例
 ``` json
 {
   "title": "jack",
   "content": "hgsdfhdfhdhdfghdf"
 }
 ```


## 响应参数

属性名 | 数据类型 | 示例值 | 描述
-------|----------|----------|--------|------
 code | number | 0 |  自定义状态码
 success | boolean | true | 是否成功
 message | string | ok | 提示文本
 data | string | 1000000 | 问题id

- 成功示例
``` json
{
  "code": 0,
  "success": true,
  "message": "ok",
  "data": {
    "token": "sdfasdfasfdasfdasdfasfasdfasfd"
  }
}
```

- 失败示例
``` json
{
  "code": 3106,
  "success": false,
  "message": "问题内容中包含非法关键字",
  "data": {}
}
```
