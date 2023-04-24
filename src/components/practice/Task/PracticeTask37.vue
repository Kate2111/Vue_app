<template>
    <div class="task37 border">
        <h3 class="header">37 Дан следующий массив с данными работников. Выведите данные работников в виде HTML таблицы. Сделайте колонку с ссылками для удаления работников.</h3>
        
        <table>
            <tr>
                <th>name</th>
                <th>salary</th>
                <th>age</th>
                <th></th>
                <th></th>
            </tr>
            
            <tr v-for="user in users">
                <template v-if="!user.isEdit">
                    <td>{{user.name}}</td>
                    <td>{{user.salary}}</td>
                    <td>{{user.age}}</td>
                    <td><a @click.prevent="deleteUser(user.id)" :style="{color: 'red'}"  href="#">del</a></td>
                    <td><a @click.prevent="editUser(user)" href="#">edit</a></td>
                </template>
                <template v-if="user.isEdit">
                    <td><input v-model="user.name"></td>
                    <td><input v-model="user.salary"></td>
                    <td><input v-model="user.age"></td>
                    <td><a @click.prevent="deleteUser(user.id)" :style="{color: 'red'}" href="#">del</a></td>
                    <td><a @click.prevent="saveUser(user)" :style="{color: 'green'}" href="#">save</a></td>
                </template>
            </tr>
            
        </table>
    </div>
</template>

<script>
export default {
    name: 'task37', 
    data() {
        return {
            users: [
			{
				id: 1,
				name: 'name1',
				salary: 100,
				age: 30,
                isEdit: false,
			},
			{
				id: 2,
				name: 'name2',
				salary: 200,
				age: 40,
                isEdit: false,
			},
			{
				id: 3,
				name: 'name3',
				salary: 300,
				age: 50,
                isEdit: false,
			},
		],
        }
    },
    methods: {
        deleteUser(param) {
        this.users = this.users.filter(user => {
            return user.id !== param;
        })
       },
       editUser(param) {
        param.isEdit = true;
       },
       saveUser(param){
        param.isEdit = false;
       }
    }
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}

th{
    background-color: rgba(2, 206, 2, 0.678);
}

td {
    border: solid 1px black;
    min-width: 70px;
    height: 30px;
    padding: 3px 10px;
}

input{
    border: none;
    width: 100%;
}

a{
    text-decoration: none;
}
</style>