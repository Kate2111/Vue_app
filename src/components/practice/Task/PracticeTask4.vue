<template>
    <div class="task4 border">
        <h4 class="header">4. Сделайте кнопку, по клику на которую алертом будет выводиться текущая дата.</h4> 
        <p>Какой сегодня день? 
            <button @click="showDate">показать</button>
        </p>

    </div>
</template>

<script>
export default {
    name: 'task4', 
    methods: {
        showDate: function () {
            alert((new Date).getDate() + '.' + ((new Date).getMonth()+1) + '.' + (new Date).getFullYear());
        }
    },
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}
</style>