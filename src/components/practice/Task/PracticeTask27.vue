<template>
    <div class="task27 border">
        <h3 class="header">27. Двусторонняя привязка данных к инпутам в Vue</h3>
        
        <div class="wrapper">
            <h4 class="header">27.1. Дан инпут. Сделайте так, чтобы вводимый в инпут текст сразу выводился в верхнем регистре в абзаце под ним.</h4>
            <input v-model="text">
            <p>{{ text.toLocaleUpperCase() }}</p>
        </div>
        
        <div class="wrapper">
            <h4 class="header">27.2. Дан инпут. Пусть в него вводится число. Сделайте так, чтобы в абзаце по мере ввода выводился квадрат вводимого числа.</h4>
            <input type="number" v-model="number">
            <p>{{ Math.pow(Number(number), 2) }}</p>
        </div>

        
    </div>
</template>

<script>
export default {
    name: 'task27', 
    data() {
        return {
           text: '',
           number: '',
        }
    },
    methods: {
       
    }
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}

input{
    margin: 5px;
    padding: 5px;
}

.wrapper{
    margin-bottom: 10px;
}

</style>