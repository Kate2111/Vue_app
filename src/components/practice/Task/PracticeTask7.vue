<template>
    <div class="task7 border">
        <h4 class="header">7. Сделайте две кнопки. По нажатию на первую кнопку выведите квадрат числа 2, а по нажатию на вторую - квадрат числа 3.</h4>
        <p>
            <button @click="powNum(this.number[0])">Получить квадрат {{ number[0] }}</button>
    
            <button @click="powNum(this.number[1])">Получить квадрат {{ number[1] }}</button>
        </p>

    </div>
</template>

<script>
export default {
    name: 'task7', 
    data() {
        return {
            number: [2, 3]
        }
    },
    methods: {
        powNum: function (num) {
            alert(Math.pow(num, 2));
        },
    },
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}
button{
    margin: 0 5px;
}
</style>