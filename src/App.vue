<template>
    <div class="app">
        <post-form @create="createPost"/>
        <post-list :posts="posts"/>
        <practice-book/>
        
    </div>
    
</template>


<script>
    import PostForm from './components/post/PostForm.vue';
    import PostList from './components/post/PostList.vue';
    import PracticeBook from './components/practice/PracticeBook.vue';
   
    
    export default {
        components: {
            PostList, PostForm, PracticeBook
        },
        data() {
            return {
                posts: [
                    {id:1, title: 'JS', body: 'Описание 1'},
                    {id:2, title: 'HTML', body: 'Описание 2'},
                    {id:3, title: 'CSS', body: 'Описание 3'},
                ],
            }
        }, 
        methods: {
            createPost(post) {
                this.posts.push(post);
            },
        },
    }
</script>


<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .app {
        width: 650px;
        margin-top: 15px;
        padding: 15px;
    }
</style>