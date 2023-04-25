<template>
    <div class="task39 border">
        <h3 class="header">39 Дан следующий массив с данными работников. С помощью цикла создайте на основе этого массива компоненты User, передав им соответствующие данные.</h3>
        
        <User 
            v-for="user in users"
            :name='user.name'
            :salary="user.salary"
            :age="user.age"
            :key="user.id"
        />
    </div>
</template>

<script>
import User from './User39.vue'
export default {
    name: 'task39',
    components: {User}, 
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

</style>