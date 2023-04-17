<template>
    <div class="task23 border">
        <h4 class="header">23. Сделайте 30 абзацев, заполненных целыми числами по порядку.</h4>
        
        <div class="wrapper">
            <p v-for="num in 30">{{num}}</p>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'task23', 
    data() {
        return {
           
        }
    },
    methods: {
       
    }
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}

.wrapper{
    width: 400px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}

</style>