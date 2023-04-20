<template>
    <div class="task32 border">
        <h4 class="header">32 Спросите у пользователя с помощью радиокнопочек, какой язык для него родной. Сделайте так, чтобы выбранный язык вывелся в абзаце под радиокнопками.</h4>

        <div class="wrapper">
            <p>Какой язык ваш родной?</p>
            <label>
                <input type="radio" name="radio" v-model="choise" value="English">
                Английский
            </label>
            
            <label>
                <input type="radio" name="radio" v-model="choise" value="Русский">
                Русский
            </label>
            
            <label>
                <input type="radio" name="radio" v-model="choise" value="German">
                Немецкий
            </label>
        </div>
        
        <p v-if="!choise"></p>
        <p v-else-if="choise === 'Русский'">Ваш родной язык - Русский</p>
        <p v-else-if="choise === 'English'">Your native language - English</p>
        <p v-else-if="choise === 'German'">Ihre Muttersprache ist Deutsch</p>
       
    </div>
</template>

<script>
export default {
    name: 'task32', 
    data() {
        return {
          choise: ''
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

.wrapper{
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}
</style>