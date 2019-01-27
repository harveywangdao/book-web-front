<template>
    <div class="articleList">
        <div class="articles">
            <div v-for="article in articleList" :key="article.id" class="articleInfo">
                <div class="articleTitle">
                    <router-link :to="{path:'/article',query:{id:article.id}}" class="articleTitleLink">
                        {{article.title}}
                    </router-link>
                </div>
                <div class="articleCreateTime">
                    {{article.createTime}}
                </div>
                <div class="articleTags">
                    {{article.tags}}
                </div>
                <div class="articleText">
                    {{article.text}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ArticleList',
        components: {},
        data: function () {
          return {
            articleList: [
                {
                    id: 0,
                    title: 'Title',
                    createTime: '5.20',
                    tags: '美食,旅游',
                    text: '这里是文章内容'
                },
                {
                    id: 1,
                    title: 'Title',
                    createTime: '5.20',
                    tags: '美食,旅游',
                    text: '这里是文章内容'
                }
            ]
          }
        },
        computed: {
            
        },
        created: function() {
            this.getAllArticles();
        },
        mounted: function () {

        },
        methods: {
            getAllArticles: function (){
                this.$axios({
                    method: 'get',
                    url: '/api/v1/article/queryAllArticles'
                }).then((res) => {
                    if (res.data && res.data.status) {
                        this.articleList = [];

                        for (let i = 0; i < res.data.data.length; i++) {
                            let item = {};

                            item.id = res.data.data[i].id;
                            item.title = res.data.data[i].title;
                            let temp = new Date(res.data.data[i].createTime)
                            item.createTime = temp.toLocaleDateString() + ' ' + temp.toTimeString().split(' ')[0];
                            item.tags = res.data.data[i].tags;
                            item.text = res.data.data[i].text;

                            this.articleList.push(item);
                        }
                    } else {
                        this.$message.error('queryAllArticles!'+JSON.stringify(res.data));
                    }
                }).catch((error) => {
                    this.$message.error('queryAllArticles!'+JSON.stringify(error));
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

.articles {
    margin: 0 auto;
    padding: 0;
    width: 100%;
    height: auto;
}

.articleInfo {
    margin: 0 auto 40px;
    padding: 0;
    width: 100%;
    height: auto;
    /*background-color: #f0f4f0;*/
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
}

.articleTitle {
    text-align:left;
    font-size: 26px;
    line-height: 40px;
    width: 100%;
    height: 40px;
}

.articleCreateTime {
    float:left;
    text-align:left;
    font-size: 12px;
    line-height: 20px;
    width: 25%;
    height: 20px;
}

.articleTags {
    float:right;
    text-align:left;
    font-size: 12px;
    line-height: 20px;
    width: 75%;
    height: 20px;
}

.articleText {
    margin: 30px 0 0 0;
    text-align:left;
    font-size: 17px;
    line-height: 23px;
    width: 100%;
    height: auto;
}

.articleTitleLink {
    color: black;
}

</style>
