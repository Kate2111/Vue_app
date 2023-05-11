<template>
    <nav-menu></nav-menu>
    <div  class="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import navMenu from '@/components/meal/NavMenu.vue'
    export default {
        components: {navMenu},
    }
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


</style>