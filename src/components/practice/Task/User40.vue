<template>
    <div>
        <ul>
            <li v-if="!isEdit">
                Имя: {{ newName }}, возраст: {{ newAge }}, запралата: {{ newSalary }}
                <button @click="handler">info_console</button>
                <button @click="$emit('remove', id)">del</button>
                <button @click="edit">edit</button>
            </li>
            <li v-else>
                <input type="text" v-model="newName">
                <input type="text" v-model="newAge">
                <input type="text" v-model="newSalary">
                <button @click="handler">info_console</button>
                <button @click="$emit('remove', id)">del</button>
                <button @click="save">save</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    //атрибуты которые передает от родителя
    props: {
        id: Number,
        name: String,
        salary: Number,
        age: Number,
    },
    data() {
        return{
            isEdit: false,
            newName: this.name,
            newAge: this.age,
            newSalary: this.salary,
        }
    },
    methods: {
        handler() {
            this.$emit('show', this.name, this.age, this.salary)
        },
        edit() {
            this.isEdit = true;
        },
        save(){
            this.isEdit = false;
            this.$emit('edit', this.id, this.newName, this.newAge, this.newSalary)
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