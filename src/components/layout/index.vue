<template>
  <div class="layout-page">
    <Menu mode="horizontal" active-name="1">
      <MenuItem name="1">
        <router-link to="/">首页</router-link>
      </MenuItem>
      <MenuItem name="2">
        <router-link to="/login">登录</router-link>
      </MenuItem>
      <MenuItem name="3">
        <router-link to="/register">注册</router-link>
      </MenuItem>
    </Menu>
    <div class="main-page">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout"
};
</script>
