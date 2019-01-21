import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/register'
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
            path: '*',
            redirect: '/404'
        }
    ]
})
