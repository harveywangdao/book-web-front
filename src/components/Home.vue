<template>
    <div class="home">
        <Header/>
        <div class="content1">
            <div class="content2">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './Header.vue';
    export default {
        name: 'Home',
        components:{
            Header
        }
    }
</script>

<style scoped>
a {
  text-decoration: none;
}

.home {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.content {
    position: absolute;
    left: 0;
    right: 0;
    top: 100px;
    bottom: 0;
    width: auto;
    height: 100%;
    background: #f760f0;
    overflow-y: scroll;
}

.content1 {
    position: absolute;
    left: 0;
    right: 0;
    top: 70px;
    bottom: 0;
    padding-bottom: 30px;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background: #ffffff;
}

.content2 {
    width: auto;
    height: 100%;
    padding: 10px;
    overflow-y: scroll;
    box-sizing: border-box;
}

</style>
