<template>
    <div class="task25 border">
        <h4 class="header">25 Дана кнопка. Дан массив. Выведите элементы этого массива в виде списка ul. Сделайте так, чтобы по нажатию на кнопку...</h4>
        
        <div class="wrapper">
            <div class="subtask">
                <p>...в конец этого списка добавился новый пункт.</p>
                <ul>
                    <li v-for="color in colors">
                        {{ color }}
                    </li>
                </ul>
                <button @click="addElem">add</button>
            </div>

            <div class="subtask">
                <p>...из списка удалялся первый пункт.</p>
                <ul>
                    <li v-for="color in colors">
                        {{ color }}
                    </li>
                </ul>
                <button @click="shiftElem">del first elem</button>
            </div>

            <div class="subtask">
                <p>...из  списка удалялся последний пункт.</p>
                <ul>
                    <li v-for="color in colors">
                        {{ color }}
                    </li>
                </ul>
                <button @click="popElem">del last elem</button>
            </div>

            <div class="subtask">
                <p>...из списка удалялся предпоследний пункт.</p>
                <ul>
                    <li v-for="color in colors">
                        {{ color }}
                    </li>
                </ul>
                <button @click="penultimateElem">del second to last elem</button>
            </div>

            <div class="subtask">
                <p>...пункты списка отсортировались.</p>
                <ul>
                    <li v-for="color in colors">
                        {{ color }}
                    </li>
                </ul>
                <button @click="sortElem">sort elem</button>
            </div>

            <div class="subtask">
                <p>...пункты списка выстроились в обратном порядке.</p>
                <ul>
                    <li v-for="color in colors">
                        {{ color }}
                    </li>
                </ul>
                <button @click="reversElem">revers elem</button>
            </div>
        </div>
        
       
        

        

    </div>
</template>

<script>
export default {
    name: 'task25', 
    data() {
        return {
           colors: ['red', 'blue', 'yellow', 'black'],
        }
    },
    methods: {
       addElem: function() {
        this.colors.push('new color');
       },
       shiftElem: function() {
        this.colors.shift();
        /* this.nums.splice(0, 1); */
       },
       popElem: function() {
        this.colors.pop();
       },
       penultimateElem: function() {
        this.colors.splice(-2, 1);
       },
       sortElem: function() {
        this.colors.sort()
       },
       reversElem: function() {
        this.colors.reverse();
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
    flex-wrap: wrap;
}

li{
    list-style: none;
    padding: 0 10px;
}

li:hover{
    color: blueviolet;
    font-size: 18px;
}

p{
    width: 250px;
    height: 35px;
    margin-bottom: 10px;
}

button{
    min-width: 50px;
    min-height: 20px;
    margin: 10px;
    padding: 3px 5px;
}

button:hover{
    background-color: rgba(137, 43, 226, 0.463);
}
</style>