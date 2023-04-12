<template>
    <div class="task14 border">
        <h4 class="header">14.1 Дано свойство isAdmin.В зависимости от значения свойства выведите или один текст, или другой.</h4>
        <p v-if="isAdmin">Пользователь зарегистрирован</p>
        <p v-else>Пройдите регистрацию</p>

        <h4 class="header header_two">14.2 Дано свойство day, в котором записан текущий день недели. Пусть также у вас есть семь абзацев, в каждом из которых написано название дня недели. Сделайте так, чтобы на экране был виден только абзац, содержащий название текущего дня недели.</h4>
        <p v-if="day === 1">понедельник</p>
        <p v-if="day === 2">вторник</p>
        <p v-if="day === 3">среда</p>
        <p v-if="day === 4">четверг</p>
        <p v-if="day === 5">пятница</p>
        <p v-if="day === 6">суббота</p>
        <p v-if="day === 0">воскресенье</p>
        
    </div>
</template>

<script>
export default {
    name: 'task14', 
    data() {
        return {
            isAdmin: false,
            day: new Date().getDay(),
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

.header_two{
    margin-top: 10px;
}

</style>