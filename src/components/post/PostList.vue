<template>
    <div>
        <h3>Список инструментов</h3>
        <component is="PostItem" v-for="post in posts" :post="post">

        </component>
       <!--  <post-item v-for="post in posts" :post="post"/> -->
    </div>
 
 

</template>

<script>
    import PostItem from './PostItem.vue';

    export default {
        components: {PostItem},
        props: {
            posts: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
   
</style>