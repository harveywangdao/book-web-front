<template>
    <div class="header">
        <div class="logo">BOOK</div>
        <div v-if="!isLogined" class="loginOrReg">
            <router-link to="/login" class="login">
                登录
            </router-link>
            <router-link to="/register" class="register">
                注册
            </router-link>
        </div>
        <div v-else class="unlogin">
            <span style="cursor:pointer" @click="unlogin()">退出登录</span>
        </div>

        <router-link to="/addArticle" class="addArticle">
            写文章
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        components: {},
        data: function () {
            return {
                isLogined: false
            }
        },
        created: function() {
            this.getLoginStatus();
        },
        methods: {
            getLoginStatus: function (){
                this.$axios({
                    method: 'get',
                    url: '/api/v1/user/isLogined'
                }).then((res) => {
                    if (res.data && res.data.status) {
                        this.isLogined = true;
                    }else{
                        this.isLogined = false;
                    }
                }).catch((error) => {
                    this.$message.error('isLogined failure!'+JSON.stringify(error));
                });
            },
            unlogin: function (){
                this.$axios({
                    method: 'post',
                    url: '/api/v1/user/logout'
                }).then((res) => {
                    if (res.data && res.data.status) {
                      this.$message({
                        message: 'logout success!',
                        type: 'success'
                      });
                    } else {
                      this.$message.error('logout failure!'+JSON.stringify(res));
                    }

                    this.getLoginStatus();
                }).catch((error) => {
                    this.$message.error('logout failure!'+JSON.stringify(error));
                });
            }
        }
    }
</script>

<style scoped>
a {
    text-decoration: none;
}

.router-link-active {
    text-decoration: none;
}

.header-old {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: white;
}

.header {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: white;
    background-color: #242f42;
}

.logo {
    float: left;
    width: 250px;
    line-height: 70px;
}

.addArticle {
    float: right;
    width: 50px;
    line-height: 70px;
    font-size: 16px;
    color: white;
}

.unlogin {
    float: right;
    width: 250px;
    line-height: 70px;
    font-size: 16px;
}

.loginOrReg {
    float: right;
    line-height: 70px;
    padding-right: 50px;
    padding-left: 50px;
    font-size: 16px;
}

.login {
    float: left;
    width: 40px;
    line-height: 70px;
    color: white;
    margin: 0 20px 0;
}

.register {
    float: right;
    width: 40px;
    line-height: 70px;
    color: white;
    margin: 0 20px 0;
}

</style>
