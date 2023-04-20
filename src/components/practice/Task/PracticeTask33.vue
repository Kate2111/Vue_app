<template>
    <div class="task34 border">
        <h4 class="header">33.1 Спросите у пользователя с помощью селекта в каком городе он живет. Сделайте так, чтобы выбранный город вывелся в абзаце под селектом.</h4>
        
        <select v-model="selected">
            <option value="">Выберите город</option>
            <option >Москва</option>
            <option>Находка</option>
            <option>Екатеринбург</option>
        </select>

        <p>{{selected}}</p>


        <h4 class="header">33.2 Сделайте селект, с помощью которого можно будет выбрать название дня недели.</h4>
        <select v-model="selected1">
            <option v-for="option in options">{{option}}</option>
        </select>
        <p>Сегодня {{ selected1 }}</p>

        <h4 class="header">32.3 Сделайте три селекта, с помощью которых можно будет выбрать день, месяц и год.</h4>
        <select v-model="selectedDay">
            <option v-for="day in 31">{{day}}</option>
        </select>
        <select v-model="selectedMonth">
            <option v-for="(month, index) in months" :value="index">{{month}}</option>
        </select>
        <select v-model="selectedYear">
            <option v-for="year in years">{{year}}</option>
        </select>
        <p>Какой сегодня день? {{selectedDay}} {{months[selectedMonth]}} {{selectedYear}} год</p>
    </div>
</template>

<script>
export default {
    name: 'task33', 
    data() {
        return {
          selected: '',
          options: ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
          selected1: 'пн',
      
          selectedDay: new Date().getDate(),
          months: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'],
          selectedMonth: new Date().getMonth(),
          years: [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
          selectedYear: new Date().getFullYear(),
        }
    },
    methods: {
       
    }
}
</script>

<style scoped>
.header{
    margin-top: 20px;
    margin-bottom: 10px;
}

</style>