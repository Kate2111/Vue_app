<template>
    <div class="task15 border">
        <h4 class="header">15. Пусть в data хранится следующее возраст черловека, введенный в инпут. Если возраст меньше 18 - выведите на экран 'подросток', если оно от 19 до 25 - выведите на экран 'молодой человек', а если более 26 - выведите на экран 'мужчина'.</h4>

        <input v-model="answer" type="text" placeholder="Введите ваш возраст">
        <button @click="showAge">показать категорию</button>
        <p v-if="age < 18 && visible">подросток</p>
        <p v-else-if="age > 19 && age < 25 &&  visible">молодой человек</p>
        <p v-else-if=" visible">взрослый</p>
    </div>
</template>

<script>
export default {
    name: 'task15', 
    data() {
        return {
            answer: '',
            age: '',
            visible: false
        }
    },
    methods: {
        showAge: function() {
            this.age = this.answer;
            this.visible = true;
            this.answer = '';
        }
    }
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}

</style>