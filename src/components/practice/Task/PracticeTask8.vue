<template>
    <div class="task8 border">
        <h4 class="header">8. Сделайте две кнопки. По нажатию на первую кнопку выведите квадрат числа 2, а по нажатию на вторую - квадрат числа 3.</h4>
        <p>
            {{ text }}
            <button @click="changeValue('Как дела?')">one</button>
            <button @click="changeValue('Где ты живешь?')">two</button>
        </p>

    </div>
</template>

<script>
export default {
    name: 'task8', 
    data() {
        return {
            text: 'Привет'
        }
    },
    methods: {
        changeValue: function (str) {
            this.text = str
        }
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