<template>
  <div>
    <div class="title">
      <h1>Login to book</h1>
    </div>
    <el-form ref="loginForm" :rules="rules" :model="loginForm" class="loginInfo">
      <el-form-item class="account" prop="account">
        <el-input v-model="loginForm.account" placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item class="password" prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item class="submit">
        <el-button type="success" @click="onSubmit('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {
    msg: String
  },
  data() {
    return {
      loginForm: {
        account: '',
        password: '',
      },
      rules: {
        account: [
          {required: true, message: 'please input account', trigger: 'blur'},
          {min: 2, max: 100, message: '2-100 characters', trigger: 'blur'}
        ],
        password: [
          {required: true, message: 'please input password', trigger: 'blur'},
          {min: 6, max: 100, message: '6-100 characters', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let sha256 = require('js-sha256').sha256;

          let postData = this.$qs.stringify({
            email: this.loginForm.account,
            token: sha256(this.loginForm.password)
          });

          this.$axios({
              method: 'post',
              url: '/api/v1/user/login',
              data: postData
          }).then((res) => {
              if (res.data && res.data.status) {
                this.$message({
                  message: 'login success!',
                  type: 'success'
                });
              } else {
                this.$message.error('login failure!'+JSON.stringify(res));
              }
          }).catch((error) => {
            this.$message.error('login failure!'+JSON.stringify(error));
          });
        } else {
          this.$message.error('login failure!');
          return false;
        }
      });
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

.loginInfo {
  width: 440px;
  margin: 70px auto;
  padding: 0 0;
}

.account {
  margin: 0 0 30px;
  border: 0;
  padding: 0;
}

.password {
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
