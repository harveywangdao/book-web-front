<template>
  <div>
    <div class="title">
      <h1>{{ msg }}</h1>
    </div>
    <el-form ref="registerForm" :rules="rules" :model="registerForm" class="registerInfo">
      <el-form-item class="account" prop="account">
        <el-input v-model="registerForm.account" placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item class="password" prop="password">
        <el-input type="password" v-model="registerForm.password" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item class="confirmPassword" prop="confirmPassword">
        <el-input type="password" v-model="registerForm.confirmPassword" placeholder="再次输入密码"></el-input>
      </el-form-item>
      <el-form-item class="submit">
        <el-button type="success" @click="onSubmit('registerForm')">注册</el-button>
      </el-form-item>
    </el-form>
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
      registerForm: {
        account: '',
        password: '',
        confirmPassword: ''
      },
      rules: {
        account: [
          {required: true, message: 'please input account', trigger: 'blur'},
          {min: 2, max: 100, message: '2-100 characters', trigger: 'blur'}
        ],
        password: [
          {required: true, message: 'please input password', trigger: 'blur'},
          {min: 6, max: 100, message: '6-100 characters', trigger: 'blur'}
        ],
        confirmPassword: [
          {required: true, message: 'please input confirmPassword', trigger: 'blur'},
          {min: 6, max: 100, message: '6-100 characters', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.registerForm.password !== this.registerForm.confirmPassword) {
            this.$message.error('two password different!');
            return false;
          }

          let sha256 = require('js-sha256').sha256;

          let postData = this.$qs.stringify({
            email: this.registerForm.account,
            token: sha256(this.registerForm.password)
          });

          this.$axios({
              method: 'post',
              url: '/api/v1/user/register',
              data: postData
          }).then((res) => {
              if (res.data && res.data.status) {
                this.$message({
                  message: 'register success!',
                  type: 'success'
                });
              } else {
                this.$message.error('register failure!'+JSON.stringify(res));
              }
          }).catch((error) => {
            this.$message.error('register failure!'+JSON.stringify(error));
          });
        } else {
          this.$message.error('register failure!');
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

.registerInfo {
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
  margin: 0 0 30px;
  border: 0;
  padding: 0;
}

.submit {
  margin: 30px 0 0;
  border: 0;
  padding: 0;
}
</style>
