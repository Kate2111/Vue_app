<template>
    <div class="task36 border">
        <h3 class="header">36 Дан массив. Дан инпут. Дана кнопка. Выведите элементы этого массива в виде списка ul. Сделайте так, чтобы по нажатию на кнопку в конец списка добавился текст из инпута.</h3>
        <input v-model="task" @keyup.enter="addTask"  placeholder="введите задачу">
        <ul> Список задач:
            <li v-for="(elem, index) in arrTask" :key="index">
                {{index+1}}: {{elem}}
                <a class="delete" @click.prevent="removeTask(index)">del</a>
            </li>
        </ul>
        <button @click="addTask">add</button>
    </div>
</template>

<script>
export default {
    name: 'task36', 
    data() {
        return {
            task: '',
            arrTask: [],
        }
    },
    methods: {
       addTask: function() {
        this.arrTask.push(this.task);
        this.task = '';
       },
       removeTask(param) {
        this.arrTask.splice(param, 1)
       }
    }
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}

ul{
    padding: 15px;
}

input, button {
    padding: 3px 10px;
}

.delete{
    margin-left: 30px;
}

</style>