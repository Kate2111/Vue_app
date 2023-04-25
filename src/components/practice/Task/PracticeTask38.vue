<template>
    <div class="task38 border">
        <h3 class="header">38 Сделайте компонент User. Подключите его к основному компоненту. Выведите данные в компоненте User с помощью props</h3>

        <!-- Выводим компонент в виде тега с его именем -->
        <User name="Дни недели" :week="arr" :question="ask"/>
    </div>
</template>

<script>
//Подключение созданного компонента к основному компоненту.
import User from './User38.vue' 

export default {
    name: 'task38', 

    //Пропишем его имя в настройке components:
    components: {User},
    data() {
        return {
        //данные , которые отразятся в компоненте через пропсы. Возможна передача через свойство(как arr) или напрямую в атрибут(как name)
          arr: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'], 
          ask: 'Какой сегодня день недели?'
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




</style>