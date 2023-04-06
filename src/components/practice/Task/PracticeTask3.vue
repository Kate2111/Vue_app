<template>
    <div class="task3 border">
        <h4 class="header">3. Пусть в data хранится следующий объект: obj: {x: 1, y: 2, z: 3}. Выведите на экран сумму элементов этого объекта.</h4> 
        <p>{{obj.x + obj.y + obj.z}}</p>

    </div>
</template>

<script>
export default {
    name: 'task3', 
    data() {
        return {
            obj: {x: 4, y: 5, z: 6},
        }
       } 
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}
</style>