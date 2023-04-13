<template>
    <div class="task19 border">
        <h4 class="header">19. Дан объект,c помощью v-for выведите на экран следующее: ключи, значение и порядковые номера</h4>
        <ul>
            <li v-for="(elem, key, index) in obj">
                Номер {{ index + 1 }}. Ключ {{ key }}: значение - {{ elem }}
            </li>
        </ul>  
    </div>
</template>

<script>
export default {
    name: 'task19', 
    data() {
        return {
            obj: {
                user1: '100$',
                user2: '200$',
                user3: '300$',
            },
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