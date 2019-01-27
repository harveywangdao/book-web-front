<template>
    <div class="articleList">
        <el-form ref="articleForm" :rules="rules" :model="articleForm" class="articleInfo">
          <el-form-item class="articleTitle" prop="title">
            <el-input v-model="articleForm.title" placeholder="标题" spellcheck="false"></el-input>
          </el-form-item>
          <el-form-item class="articleTags" prop="tags">
            <el-input v-model="articleForm.tags" placeholder="标签" spellcheck="false"></el-input>
          </el-form-item>
          <el-form-item class="articleText" prop="text">
            <el-input type="textarea" :rows="10" v-model="articleForm.text" placeholder="文章内容" spellcheck="false"></el-input>
          </el-form-item>
          <el-form-item class="submit">
            <el-button type="success" @click="onSubmit('articleForm')">提交</el-button>
          </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: 'AddArticle',
        components: {},
        data: function () {
            return {
                articleForm: {
                  title: '',
                  tags: '',
                  text: ''
                },
                rules: {
                  title: [
                    {required: true, message: 'please input title', trigger: 'blur'},
                    {min: 2, max: 100, message: '2-100 characters', trigger: 'blur'}
                  ],
                  tags: [
                    {required: true, message: 'please input tags', trigger: 'blur'},
                    {min: 2, max: 100, message: '2-100 characters', trigger: 'blur'}
                  ],
                  text: [
                    {required: true, message: 'please input text', trigger: 'blur'},
                    {min: 10, max: 200, message: '10-200 characters', trigger: 'blur'}
                  ]
                }
            }
        },
        computed: {
            
        },
        created: function() {
            
        },
        mounted: function () {

        },
        methods: {
            onSubmit(formName) {
              this.$refs[formName].validate((valid) => {
                if (valid) {
                  let postData = this.$qs.stringify({
                    title: this.articleForm.title,
                    tags: this.articleForm.tags,
                    text: this.articleForm.text
                  });

                  this.$axios({
                      method: 'post',
                      url: '/api/v1/article/addArticle',
                      data: postData
                  }).then((res) => {
                      if (res.data && res.data.status) {
                        this.$message({
                          message: 'add article success!',
                          type: 'success'
                        });
                        this.$router.push('/articlelist');
                      } else {
                        this.$message.error('add article failure!'+JSON.stringify(res));
                      }
                  }).catch((error) => {
                    this.$message.error('add article failure!'+JSON.stringify(error));
                  });
                } else {
                  this.$message.error('add article failure!');
                  return false;
                }
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

.articleList {
    margin: 0 auto;
    padding: 0;
    width: 50%;
    height: auto;
}

.articleInfo {
    margin: 0 auto 40px;
    padding: 0;
    width: 100%;
    height: auto;
    /*background-color: #f0f4f0;*/
}

.articleTitle {
    
}

.articleTags {

}

.articleText {

}

</style>
