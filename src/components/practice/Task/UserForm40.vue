<template>
    <div>
        <input type="text" v-model="newName" placeholder="Введите имя">
        <input type="text" v-model="newSalary" placeholder="Введите зарплату">
        <input type="text" v-model="newAge" placeholder="Введите возраст">
     
        <button @click="save">add</button>
    </div>
</template>

<script>
export default {
    //атрибуты которые передает от родителя
    props: {
    
    },
    data() {
        return{
            newName: '',
            newAge: '',
            newSalary: '',
        }
    },
    methods: {
        save(){
            this.$emit('addUser', this.newName, this.newSalary, this.newAge);
            this.newName = '';
            this.newAge = '';
            this.newSalary = '';
        }
    }
    
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
}
</script>

<style>
button{
    padding: 2px 10px;
    margin-left: 5px;
}

.fontColor{
    color: rgba(0, 128, 0, 0.571);
}
</style>