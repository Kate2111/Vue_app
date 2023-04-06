<template>
    <div class="task2 border">
        <h4 class="header">2. Пусть в data хранится следующий массив: arr: [1, 2, 3]. Выведите на экран сумму элементов этого массива.</h4> 
        <p>{{arr[0] + arr[1] + arr[2]}}</p>

    </div>
</template>

<script>
export default {
    name: 'task2', 
    data() {
        return {
            arr: [1, 2, 3],
        }
       } 
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}
</style>