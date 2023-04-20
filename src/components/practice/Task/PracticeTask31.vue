<template>
    <div class="task31 border">
        <h3 class="header">31 С помощью чекбоксов спросите у пользователя какие языки он знает. Сложите полученные значения в массив и выведите в виде списка ul.</h3>
        <p>Какие языки вы знаете?</p>
        <div class="wrap">
            <label name="EN">
                <input type="checkbox" v-model="arr" value="Английский" name="EN">
                Английский
            </label>
            <label name="SP">
                <input type="checkbox" v-model="arr" value="Испанский" name="SP">
                Испанский
            </label>
            <label name="GER">
                <input type="checkbox" v-model="arr" value="Немецкий" name="GER">
                Немецкий
            </label>
            <label name="TUR">
                <input type="checkbox" v-model="arr" value="Турецкий" name="TUR">
                Турецкий
            </label>
            <label name="CS">
                <input type="checkbox" v-model="arr" value="Китайский" name="CS">
                Китайский
            </label>
        </div>

        <ul>
            {{ arr.length>0 ? 'Список языков' : ''}}
            <li v-for="elem in arr">{{elem}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'task31', 
    data() {
        return {
            cheked: true,
            arr: []
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

.wrap{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}

ul{
    padding: 10px 20px;
}

</style>