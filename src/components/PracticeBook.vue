<template>
    <div class="practice">
        <div class="task1 border">
            <h4>1. Пусть в data хранится следующий массив: arr: ['x', 'y', 'z']. Выведите каждый элемент этого массива в отдельном абзаце.</h4>
            <p>{{ arrTask1[0] }}</p>
            <p>{{ arrTask1[1] }}</p>
            <p>{{ arrTask1[2] }}</p>
        </div>
        
        <div class="task2 border">
            <h4>2. Пусть в data хранится следующий массив: arr: [1, 2, 3]. Выведите на экран сумму элементов этого массива.</h4> 
            <p>{{arrTask2[0] + arrTask2[1] + arrTask2[2]}}</p>

        </div>
    </div>
</template>

<script>
    export default {
       data() {
        return {
            //task1
            arrTask1: ['x', 'y', 'z'],

            //task2
            arrTask2: [1, 2, 3]
        }
       } 
    }
</script>

<style scoped>
    .practice{
        margin: 20px;
    }

    .border{
        border: solid 1px green;
        margin: 10px 0;
        padding: 8px;
    }
</style>