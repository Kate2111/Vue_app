<template>
    <div class="task29 border">
        <h4 class="header">29. Дан текстареа и кнопка. В текстареа вводится текст. По нажатию на кнопку получите массив введенных в текстареа слов и выведите элементы этого массива в виде списка ul.</h4>
        
        <div class="wrapper">
            <textarea cols="30" rows="5" v-model="text"></textarea>
            <button @click="getList">получить список</button>
            <ul>
                <li v-for="elem in arr">{{elem}}</li>
            </ul>
        </div>
        
        
        

    </div>
</template>

<script>
export default {
    name: 'task29', 
    data() {
        return {
           text: '',
           arr: [],
        }
    },
    methods: {
       getList: function() {
        let items = this.text.split(' ')
        this.arr = [...items];
        console.log(this.arr);
       }
    }
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}
.wrapper{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

button{
    margin-top: 10px;
    padding: 2px 3px;
}

ul{
    padding-left: 20px;
}

</style>