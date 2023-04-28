<template>
    <div class="app">
        <h1>Список постов</h1>
        <my-button @click="featchPosts">получить посты</my-button>
        <my-button class="showBtn" @click="showDialog">
            Создать пост
        </my-button>
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost"/>
        </my-dialog>
        <post-list 
            :posts="posts"
            @remove="removeItem" 
        />



        <practice-book/>
        
    </div>
    
</template>


<script>
    import PostForm from './components/post/PostForm.vue';
    import PostList from './components/post/PostList.vue';
    import PracticeBook from './components/practice/PracticeBook.vue';
    import axios from 'axios';
    
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
                dialogVisible:false,
            }
        }, 
        methods: {
            createPost(post) {
                this.posts.push(post);
                this.dialogVisible = false;
            },
            removeItem(post) {
                this.posts = this.posts.filter(elem => elem.id != post.id)
            },
            showDialog() {
                this.dialogVisible = true;
            },
            async featchPosts() {
                try{
                    const response = await axios.get('https://my-json-server.typicode.com/typicode/demo/posts');
                    console.log(response);
                } catch(e) {
                    alert('error')
                }
            }

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

    .showBtn{
        margin: 15px 0;
    }
</style>