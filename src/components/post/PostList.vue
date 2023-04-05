<template>
    <div>
        <h3>Список инструментов</h3>
        <!-- Данный компонент не подсвечивается, застряла на этом моменте -->
        <post-item v-for="post in posts" :post="post"/>
    </div>
 
 

</template>

<script>
    import PostItem from './PostItem'
    export default {
        components: {
            PostItem
        },
        props: {
            posts: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
    .post{
        border: 2px solid green;
        margin-top: 15px;
        padding: 15px;
    }
</style>