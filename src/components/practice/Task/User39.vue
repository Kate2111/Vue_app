<template>
    <div>
       <table>
        <tr>
            <td>{{name}}</td>
            <td>{{salary}}</td>
            <td>{{age}}</td>
        </tr>
       </table>
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
</style>