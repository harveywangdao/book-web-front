<template>
  <div>
    <div class="title">
      <h1>{{ msg }}</h1>
    </div>
    <div class="registerInfo">
      <div class="account">
        <el-input v-model="account" placeholder="邮箱"></el-input>
      </div>
      <div class="password">
        <el-input v-model="passward" placeholder="密码"></el-input>
      </div>
      <div class="submit">
        <el-button type="success">成功按钮</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  props: {
    msg: String
  },
  data() {
    return {
      account: '',
      passward: ''
    }
  }
}
</script>

<style scoped>
.title {
  margin: 200px 0 0;
  border: 0;
  padding: 0;
}

.registerInfo {
  width: 440px;
  margin: 100px auto;
  padding: 0 0;
}

.account {
  margin: 0 0 20px;
  border: 0;
  padding: 0;
}

.passward {
  margin: 0;
  border: 0;
  padding: 0;
}

.submit {
  margin: 30px 0 0;
  border: 0;
  padding: 0;
}
</style>
