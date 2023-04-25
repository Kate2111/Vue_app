<template>
    <div class="task40 border">
        <h3 class="header">40 Испускание событий в Vue. Передайте в дочерний компонент две функции. Сделайте в компоненте с работником кнопку, по нажатию на которую в родительский компонент будет передаваться имя и зарплата работника.</h3>
        <User 
            v-for="user in users" 
            :name="user.name"
            :salary="user.salary"
            :age="user.age"
            :key="user.id"
            :color="color"
            @show="showInfo"
        />

    </div>
</template>

<script>
import User from './User40.vue'

export default {
    name: 'task40',
    components: {User},
    emits: ['show'],
    data() {
        return {
            users: [
                {
                    id: 1,
                    name: 'name1',
                    salary: 100,
                    age: 30,
                },
                {
                    id: 2,
                    name: 'name2',
                    salary: 200,
                    age: 40,
                },
                {
                    id: 3,
                    name: 'name3',
                    salary: 300,
                    age: 50,
                },
            ],
            color: false,
        }
    },
    methods: {
       showInfo(name, age, salary) {
        alert(name, age, salary);  
       }
    }
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}

</style>