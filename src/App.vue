<template>
    <div class="container">
        {{msg}}
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './component/Header.vue'
    export default {
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            appHeader :Header
        }
    }
</script>

<style>

</style>
