<template>
    <div class="task18 border">
        <h4 class="header">18. Дан следующий массив arr: ['x', 'y', 'z']. Выведите ключи этого массива в виде списка ul.</h4>
        <ul>
            <li v-for="(elem, key) in arr">Ключ - {{key}}, значение - {{elem}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'task18', 
    data() {
        return {
            arr: ['x', 'y', 'z'],
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

ul{
    padding: 0 20px;
}

</style>