<template>
  <div>
    <div class="hello">
      <h1>{{ msg }}</h1>
    </div>
    <div class="account1">
      <el-input v-model="input" placeholder="邮箱"></el-input>
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
      input: ''
    }
  }
}
</script>

<style scoped>
.account1 {
  width: 500px;
  margin: 0 auto;
}
</style>
