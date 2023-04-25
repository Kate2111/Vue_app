<template>
    <div class="task28 border">
        <h3 class="header">28. Получение данных формы по событию в Vue</h3>

        <div class="wrapper">
            <h4 class="header">28.1 Дан инпут. Дана кнопка. Дан абзац. В инпут вводится число. Сделайте так, чтобы по нажатию на кнопку абзаце появился квадратный корень этого числа.</h4>
            <input type="number" v-model="task1.num" placeholder="Введите число">
            <p>{{task1.res}}</p>
            <button @click="getPow">click</button>
        </div>
        
        <div class="wrapper">
            <h4 class="header">28.2  Даны два инпута. Дана кнопка. Дан абзац. В каждый инпут вводятся числа. Сделайте так, чтобы по нажатию на кнопку в абзаце появилась сумма этих чисел.</h4>
            <input type="number" v-model="task2.num1" placeholder="Введите число">
            <input type="number" v-model="task2.num2" placeholder="Введите число">
            <p>{{task2.sum}}</p>
            <button @click="getSum">click</button>
        </div>

        <div class="wrapper">
            <h4 class="header">28.3  Даны два инпута. Дана кнопка. В каждый инпут вводится какой-то текст. Сделайте так, чтобы по нажатию на кнопку текст первого инпута стал во втором и наоборот.</h4>
            <input v-model="task3.text1" placeholder="Введите текст">
            <input v-model="task3.text2" placeholder="Введите текст">
            <button @click="getText">click</button>
        </div>


        <div class="wrapper">
            <h4 class="header">28.4  Дан инпут, 3 абзаца и кнопка. В инпут вводится ФИО пользователя через пробел. Сделайте так, чтобы по нажатию на кнопку в первом абзаце появилась фамилия пользователя, во втором - имя, а в третьем - отчество.</h4>
            <input class="fullName" type="text" v-model="task4.name" @click="task4.name = ''" placeholder="Введите ФИО">
            <p :class="{color: isColor}">{{task4.surname}}</p>
            <p :class="{color: isColor}">{{task4.firstname}}</p>
            <p :class="{color: isColor}">{{task4.lastname}}</p>
            <button @click="getName">click</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'task28', 
    data() {
        return { 
            task1: {
                num: '',
                res: 0,
            },
            task2: {
                num1: '',
                num2: '',
                sum: 0,
            },
            task3: {
                text1: '', 
                text2: '',
                res1: '', 
                res2: '',
            },
            task4: {
                name: 'Введите ваше ФИО',
                surname: 'Фамилия',
                firstname: 'Имя',
                lastname: 'Отчество',
            },
            isColor: true,  
        }
    },
    methods: {
       getPow: function() {
        this.task1.res = Math.pow(Number(this.task1.num), 2);
        this.task1.num = '';
       }, 
       getSum: function() {
        this.task2.sum = Number(this.task2.num1) + Number(this.task2.num2);
        this.task2.num1 = '';
        this.task2.num2 = '';
       },
       getText: function() {
        this.task3.res1 = this.task3.text1;
        this.task3.res2 = this.task3.text2;
        this.task3.text1 = this.task3.res2;
        this.task3.text2 = this.task3.res1;
       },
       getName: function() {
        let arr = this.task4.name.split(' ');

        this.task4.surname = arr[0];
        this.task4.firstname = arr[1];
        this.task4.lastname = arr[2];

        this.isColor = false;
       }
    }
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}


button{
    width: 50px;
    height: 20px;
    margin: 10px;
    padding: 3px 5px;
    line-height: 9px;
}

input{
    width: 100px;
    margin-right: 10px;
}

.fullName{
    width: 200px;
    margin: 10px 0;
}

.color{
    color: rgba(128, 128, 128, 0.758);
    font-size: 14px;
    line-height: 1.5;
}

</style>