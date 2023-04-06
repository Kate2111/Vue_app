<template>
    <div class="task5 border">
        <h4 class="header">5. Пусть в data хранятся два числа. Сделайте метод, который при клике на кнопку выведет сумму алертом наших чисел? </h4>
        <p>
            Узнать сумму чисел {{ num1 }} и {{ num2 }}
            <button @click="showDate">показать</button>
        </p>

    </div>
</template>

<script>
export default {
    name: 'task5', 
    data() {
        return {
            num1: 3,
            num2: 2,
        }
    },
    methods: {
        showDate: function () {
            alert(this.num1 + this.num2);
        }
    },
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}
</style>