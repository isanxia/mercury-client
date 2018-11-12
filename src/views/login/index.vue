<template>
  <div class="login">
    <div class="login-box">
      <Card title="登录">
        <Form>
          <FormItem prop="username">
            <Input type="text" v-model="form.user" placeholder="Username">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="form.password" placeholder="Password">
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <Button type="primary" long @click="submit">登录</Button>
          <router-link
            class="ivu-btn ivu-btn-default ivu-btn-long"
            style="margin-top:10px;"
            to="/register"
          >注册</router-link>
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
  name: "Login",
  data() {
    return {
      form: {
        user: "",
        password: ""
      }
    };
  },
  methods: {
    submit() {
      console.log("调用登录接口");
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  background-color: red;
  &-box {
    width: 320px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
