<template>
    <div class="task17 border">
        <h4 class="header">17. Пусть в data хранится следующий массив items: [1, 2, 3, 4, 5]. </h4>
        <div class="wrapper">
            <div class="item">
                <h5>Выведите каждый элемент этого массива в своем теге div.</h5>
                <div v-for="item in items">{{item}}</div>
            </div>
            <div class="item">
                <h5>Выведите квадрат каждого элемента этого массива в своем теге div.</h5>
                <div v-for="item in items">{{Math.pow(item, 2)}}</div>
            </div>
            <div class="item">
                <h5>Выведите элементы этого массива в виде списка ul.</h5>
                <ul>
                    <li v-for="item in items">{{item}}</li>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'task17', 
    data() {
        return {
            items: [1, 2, 3, 4, 5],
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
    display: flex;
}

.item{
    padding: 3px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>