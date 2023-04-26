<template>
    <div>
        <input v-model="newTask" type="text" placeholder="Введите задачу">
        <button @click="add">add</button>
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
button{
    padding: 2px 10px;
    margin-left: 5px;
}


</style>