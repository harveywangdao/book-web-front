<template>
    <div class="wrapper">
        <v-head></v-head>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <div class="content">
                <transition name="move" mode="out-in">
                    <keep-alive :include="tagsList">
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import vHead from './Header.vue';
    import bus from './bus';
    export default {
        components:{
            vHead
        }
    }
</script>

<style scoped>
a {
  text-decoration: none;
}

.wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

</style>
