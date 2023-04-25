<template>
    <div>
        <ul>
            <li>
                Имя: {{ name }}, возраст: {{ age }}, запралата: {{ salary }}
            </li>
        </ul>
      <button @click="handler">click</button>
      <!-- <button @click="$emit('show', 'kate')">click</button> -->
    </div>
</template>

<script>
export default {
    //атрибуты которые передает от родителя
    props: {
       name: String,
       salary: Number,
       age: Number,
    },
    data() {
        return{

        }
    },
    methods: {
        handler() {
            this.$emit('show', this.name, this.age, this.salary)
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
td {
    border: solid 1px black;
    min-width: 70px;
    height: 30px;
    padding: 3px 10px;
}

.fontColor{
    color: rgba(0, 128, 0, 0.571);
}
</style>