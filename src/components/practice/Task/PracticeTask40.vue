<template>
    <div class="task40 border">
        <h3 class="header">40 Испускание событий в Vue. Сделайте в компоненте с работником кнопку, по нажатию на которую в родительский компонент будет передаваться имя и зарплата работника. Сделайте в каждом компоненте кнопку для его удаления</h3>
        <UserForm
            @addUser="addUser"
        />

        <User 
            v-for="user in users" 
            :id="user.id"
            :name="user.name"
            :salary="user.salary"
            :age="user.age"
            :key="user.id"
            @show="showInfo"
            @remove="remove"
            @edit="edit"
        />

    </div>
</template>

<script>
import UserForm from './UserForm40.vue';
import User from './User40.vue';

export default {
    name: 'task40',
    components: {UserForm, User},
    emits: ['addUser', 'show', 'remove', 'edit'],
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
        addUser(name, salary, age) {
            let id = this.users.length + 1;

            this.users.push({
                id,
                name,
                salary,
                age
            })
        },
        showInfo(name, age, salary) {
            console.log(name, age, salary)
        },
        remove(index) {
            this.users = this.users.filter(user => {
                return user.id !== index;
            })
        },
        edit(index, name, salary, age) {
            this.users = this.users.map(user => {
                if(user.id === index) {
                    this.name = name;
                    this.salary = salary;
                    this.age = age; 
                }
                return user;
            })
        }
    }
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}

</style>