<template>
    <div class="task41 border">
        <h3 class="header">41 Проект Чеклист в Vue</h3>
        Давайте реализуем чеклист. Он будет представлять собой список запланированных дел. В этот список можно добавлять дела. Можно удалять дела. Можно также помечать дела сделанными, в этом случае их текст должен стать перечеркнутым. Можно также редактировать дела.

        <newTask @save="save"/>

        <ul>
            <li v-for="task in listTask">
                <label>
                    <input type="checkbox" placeholder="checkbox">
                </label>
                {{ task }}
            </li>
        </ul>

    </div>
</template>

<script>
import newTask from './UserTask41.vue'

export default {
    name: 'task41', 
    components: {newTask},
    data() {
        return {
            listTask: [],
        }
    },
    methods: {
       save(newTask) {
        this.listTask.push(newTask);
       }
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