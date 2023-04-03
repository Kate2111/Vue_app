<template>
    <div class="app">
        <form>
            <h4>Создание поста</h4>       
            <input class="input" type="text" placeholder="Название">
            <input class="input" type="text" placeholder="Описание">
            <button class="btn">Создать</button>
        </form>
        <div class="post" v-for="post in posts">
            <div>
                <strong>Название:</strong> {{ post.title }}
            </div>
            <div>
                <strong>Описание:</strong> {{ post.body }}
            </div>
            
        </div>
    </div>
    
</template>


<script>
    export default {
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
        width: 500px;
        margin-top: 15px;
        padding: 15px;
    }

    .post{
        border: 2px solid green;
        margin-top: 15px;
        padding: 15px;
    }
    
    form {
        display: flex;
        flex-direction: column;
    }

    .input {
        width: 100%;
        border: 1px solid green;
        margin-top: 15px;
        padding: 10px 15px;
    }

    .btn {
        align-self: flex-end;
        margin-top: 15px;
        background: none;
        padding: 10px 15px;
        color: green;
        border: 1px solid green;
    }


</style>