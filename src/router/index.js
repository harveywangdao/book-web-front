import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/articlelist'
        },
        {
            path: '/register',
            component: resolve => require(['../components/Register.vue'], resolve)
        },
        {
            path: '/login',
            component: resolve => require(['../components/Login.vue'], resolve)
        },
        {
            path: '/home',
            component: resolve => require(['../components/Home.vue'], resolve),
            meta: { title: 'MainPage' },
            children:[
                {
                    path: '/articlelist',
                    component: resolve => require(['../components/ArticleList.vue'], resolve),
                    meta: { title: 'Article List' }
                },
                {
                    path: '/article',
                    component: resolve => require(['../components/Article.vue'], resolve),
                    meta: { title: 'Article' }
                },
                {
                    path: '/addArticle',
                    component: resolve => require(['../components/AddArticle.vue'], resolve),
                    meta: { title: 'AddArticle' }
                }
            ]
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
