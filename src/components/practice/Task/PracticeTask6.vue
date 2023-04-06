<template>
    <div class="task6 border">
        <h4 class="header">6. Сделайте вспомогательный метод, который параметром будет получать число, а возвращать день недели, соответствующий этому числу.</h4>
        <p>
            Какой сегодня день недели?
            <button @click="showDate">показать</button>
        </p>

    </div>
</template>

<script>
export default {
    name: 'task6', 
    data() {
        return {
            days: {
                0: 'воскресенье',
                1: 'понедельник', 
                2: 'вторник',
                3: 'среда',
                4: 'четверг', 
                5: 'пятница',
                6: 'суббота',
            } 
        }
    },
    methods: {
        showDate: function () {
            const nowDay = new Date().getDay();
            alert(this.isDate(nowDay));
        },
        isDate: function (param) {
            return this.days[param];
        }
    },
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}
</style>