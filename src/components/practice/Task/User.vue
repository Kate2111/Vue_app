<template>
    <div>
        <!-- Выводим данные из пропса name -->
        <ul> {{ name }}
            <!-- С помощью цикла выводим данные из пропса week -->
            <li v-for="elem in week">{{elem}}</li>
        </ul>
        <!-- Выводим данные из пропса question -->
        {{ question }}
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
    
    data () {
        return {
            
        }
    }
}
</script>

<style>

</style>