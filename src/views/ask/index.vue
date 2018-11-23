<template>
  <div>
    <Card title="提问">
      <Form label-position="top" :model="form">
        <FormItem prop="title" label="标题">
          <Input type="text" v-model="form.title" placeholder="请输入标题" />
        </FormItem>
        <FormItem prop="category" label="类别">
          <Select v-model="form.category" placeholder="请选择类别">
            <Option value="1">技术</Option>
            <Option value="2">生活</Option>
            <Option value="3">搞笑</Option>
          </Select>
        </FormItem>
        <FormItem prop="centent" label="内容">
          <Input type="textarea" v-model="form.centent" placeholder="请输入内容" />
        </FormItem>
        <Button type="primary" @click="submit">提交</Button>
      </Form>
    </Card>
  </div>
</template>

<script>
export default {
  name: "Ask",
  data() {
    return {
      form: {
        title: ""
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
