<template>
    <div class="task1 border">
        <h4 class="header">1. Пусть в data хранится следующий массив: arr: ['x', 'y', 'z']. Выведите каждый элемент этого массива в отдельном абзаце.</h4>
        <p>{{ arr[0] }}</p>
        <p>{{ arr[1] }}</p>
        <p>{{ arr[2] }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr: ['x', 'y', 'z'],
        }
       } 
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}
</style>