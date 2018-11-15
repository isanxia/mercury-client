# 获取token

### GET /api/issue/:id

## 请求头

属性名 | 数据类型 | 是否必传 | 示例值 | 描述
-------|----------|----------|--------|------
 Content-Type | string | yes | application/json;charset=UTF-8 | 数据格式
 Authorization | string | yes | Bearer dgasdga4323dss | token

## 请求参数 -object

属性名 | 数据类型 | 是否必传 | 示例值 | 描述
-------|----------|----------|--------|------
 id | string | yes | fasfasf |  问题id

 - 示例
 ``` json
 {
   "id": "10000000"
 }
 ```


## 响应参数

属性名 | 数据类型 | 示例值 | 描述
-------|----------|----------|--------
 code | number | 0 |  自定义状态码
 success | boolean | true | 是否成功
 message | string | ok | 提示文本
 data | object | 1000000 | 业务数据
 - id | string | 1000000 | 问题id
 - title | string | 1000000 | 问题标题
 - content | string | 1000000 | 问题内容
 - createAt | number | 1000000 | 提问时间
 - answers | [object] | 1000000 | 回答列表
 - - id | number | 523452345 | 回答id
 - - time | number | 523452345 | 回答时间
 - - content | number | 523452345 | 回答内容

- 成功示例
``` json
{
  "code": 0,
  "success": true,
  "message": "ok",
  "data": {
    "id": "532454235",
    "title": "fgdfgssdgsd",
    "content": "53245hdfghdfghdf4235",
    "createAt": 6554568877,
    "answers": [
      {
        "id": "4363566345",
        "time": 6554568877,
        "content": "4gsdfgsdfgdsfg363566345"
      }
    ]
  }
}
```

- 失败示例
``` json
{
  "code": 3103,
  "success": false,
  "message": "没有该问题",
  "data": {}
}
```
