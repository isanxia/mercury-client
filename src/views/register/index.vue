<template>
  <div class="login">
    <div class="login-box">
      <Card title="注册">
        <Form>
          <FormItem prop="sex">
            <RadioGroup v-model="form.sex">
            <Radio :label="1">男</Radio>
            <Radio :label="2">女</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem prop="nickname">
            <Input type="text" v-model="form.nickname" placeholder="昵称">
              <Icon type="ios-chatbubbles-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="email">
            <Input type="text" v-model="form.email" placeholder="Email">
              <Icon type="ios-mail-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="user">
            <Input type="text" v-model="form.user" placeholder="Username">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="form.password" placeholder="Password">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <Button type="primary" long @click="submit">注册</Button>
          <router-link
            class="ivu-btn ivu-btn-default ivu-btn-long"
            style="margin-top:10px;"
            to="/login"
          >登录</router-link>
          <div style="margin-top:10px;text-align:right;">
            <router-link class="ivu-btn ivu-btn-text" to="/">返回首页</router-link>
          </div>
        </Form>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Regiter",
  data() {
    return {
      form: {
        user: "",
        nickname: "",
        sex: 1,
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async submit() {
      let res = await this.$http.post("/api/user/register", this.form);
      if (res.code === 0) {
        this.$Message.success("注册成功");
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style lang="scss" scoped src="../login/style.scss">
</style>
