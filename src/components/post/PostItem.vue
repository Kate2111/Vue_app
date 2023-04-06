<template>
    <div class="post">
        <div>
            <div><strong>Название:</strong> {{ post.title }}</div>
            <div><strong>Описание:</strong> {{ post.body }}</div>
        </div>
        <div>
            <my-button>
                удалить
            </my-button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            post: {
                type: Object,
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
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>