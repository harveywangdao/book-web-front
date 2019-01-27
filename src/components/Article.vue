<template>
    <div class="articleList">
        <div class="articleInfo">
            <div class="articleTitle">
                {{title}}
            </div>
            <div class="articleCreateTime">
                {{createTime}}
            </div>
            <div class="articleTags">
                {{tags}}
            </div>
            <div class="articleText">
                {{text}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Article',
        components: {},
        data: function () {
            return {
                id: 0,
                title: 'Title',
                createTime: '5.20',
                tags: '美食,旅游',
                text: '这里是文章内容'
            }
        },
        computed: {
            
        },
        created: function() {
            this.getArticle();
        },
        mounted: function () {

        },
        methods: {
            getArticle: function (){
                this.id = this.$route.query.id;

                this.$axios({
                    method: 'get',
                    url: '/api/v1/article/queryOneArticle/'+this.id
                }).then((res) => {
                    if (res.data && res.data.status) {
                        this.title = res.data.data.title;
                        let temp = new Date(res.data.data.createTime)
                        this.createTime = temp.toLocaleDateString() + ' ' + temp.toTimeString().split(' ')[0];
                        this.tags = res.data.data.tags;
                        this.text = res.data.data.text;
                    } else {
                        this.$message.error('queryOneArticle!'+JSON.stringify(res.data));
                    }
                }).catch((error) => {
                    this.$message.error('queryOneArticle!'+JSON.stringify(error));
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
</style>
