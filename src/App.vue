<template>
    <div class="app">
        <h1>Список постов</h1>
        <div class="menu">
            <my-button class="showBtn" @click="showDialog">
                Создать пост
            </my-button>
            <my-select 
                v-model="selectedSort"
                :options="sortOption"
            >

            </my-select>
        </div>
       
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost"/>
        </my-dialog>

        <post-list 
            :posts="posts"
            @remove="removeItem" 
            v-if="!isLoading"
        />
        <div v-else>Идет загрузка...</div>



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
                posts: [],
                dialogVisible:false,
                isLoading: false,
                selectedSort: '',
                sortOption: [
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По содержимому'},
                ]
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
                this.isLoading = true;
                try{
                    const response = await axios.get('https://my-json-server.typicode.com/Kate2111/Vue_app/posts');
                    this.posts = response.data;                 
                } catch(e) {
                    alert('error')
                } finally{
                    this.isLoading = false;
                }
            }

        },
        mounted() {
            this.featchPosts()
        },
        watch: {
            selectedSort(newvalue) {
                this.posts.sort((post1, post2)=> {
                    return post1[newvalue]?.localeCompare(post2[newvalue]);
                })
            }
        }
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

    .menu{
        display: flex;
        justify-content: space-between;
        margin: 15px 0;
    }

</style>