<template>
    <div>
        <input class="newTask" v-model="newTask" type="text" placeholder="Введите задачу">
        <button class="add" @click="add" @keyup.enter="add">add</button>
    </div>
</template>

<script>
export default {
    //атрибуты которые передает от родителя
    props: {
    
    },
    data() {
        return{
            newTask: '',
        }
    },
    methods: {
       add() {
        this.$emit('save', this.newTask);
        this.newTask = '';
       }
    }
    
    
}
</script>

<style>
.add{
    padding: 2px 10px;
    height: 30px;
    background-color:rgba(0, 128, 0, 0.5);
    border: none;
    margin: 0;
}

.newTask{
    width: 200px;
    height: 30px;
    padding: 2px 10px;
    margin: 10px 0;
    border: solid 1px rgba(0, 128, 0, 0.5);
}

</style>