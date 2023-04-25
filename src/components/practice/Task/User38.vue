<template>
    <div>
        <!-- Выводим данные из пропса name -->
        <ul> {{ name }}
            <!-- С помощью цикла выводим данные из пропса week -->
            <li v-for="elem in week" @click="chooseDay(elem)">{{elem}}</li>
        </ul>
        <!-- Выводим данные из пропса question -->
        {{ question }} <input v-model="day" placeholder="Выберите из списка">
    </div>
</template>

<script>
export default {
    //атрибуты которые передает от родителя
    props: {
        name: String,
        week: Array,
        question: String,
    },
    data() {
        return{
            day: '',
        }
    },
    methods: {
        chooseDay(param) {
            this.day = param;
        }
    }
    
    //Необходимо указывать тип входного параметра
    //Имя пропса: его тип
    /* props: {
        title: String,
        likes: Number,
        isPublished: Boolean,
        commentIds: Array,
        author: Object,
        callback: Function,
        contactsPromise: Promise 
    } */
}
</script>

<style>
ul{
    padding: 3px 15px;
}
</style>