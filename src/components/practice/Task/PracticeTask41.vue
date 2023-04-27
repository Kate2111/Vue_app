<template>
    <div class="task41 border">
        <h3 class="header">41 Проект Чеклист в Vue</h3>
        Давайте реализуем чеклист. Он будет представлять собой список запланированных дел. В этот список можно добавлять дела. Можно удалять дела. Можно также помечать дела сделанными, в этом случае их текст должен стать перечеркнутым. Можно также редактировать дела.

        <newTask @save="save"/>

        <showTask 
            v-for="(task, index) in listTask"
            :task="task"
            :index="index"
            :key="index"
            @remove="removeElem"
            @edit="editElem"
        />

    </div>
</template>

<script>
import newTask from './UserNewTask41.vue';
import showTask from './UserShowTask41.vue';

export default {
    name: 'task41', 
    components: {newTask, showTask},
    data() {
        return {
            listTask: [],
        }
    },
    methods: {
       save(newTask) {
        this.listTask.push(newTask);
       },
       removeElem(id){
        this.listTask.splice(id, 1);
       },
       editElem(id, newTask){
        this.listTask = this.listTask.map((task,  i) => {
            if(i == id) {
                this.task = newTask;
            }
            return task;
        })
       },
    }
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}

ul{
    list-style-type: none;
}


</style>