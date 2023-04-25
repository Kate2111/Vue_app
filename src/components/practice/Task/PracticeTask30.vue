<template>
    <div class="task30 border">
        <h3 class="header">30. Работа с чекбоксами в Vue</h3>
        
        <div class="wrapper">
            <h4 class="header">30.1 Дан чекбокс. Дан абзац. С помощью директивы v-if сделайте следующее: если чекбокс отмечен - абзац должен быть показан, а если не отмечен - то скрыт.</h4>
            <input type="checkbox" v-model="checked" placeholder="1">
            <p v-if="checked">text</p>
        </div>

        <div class="wrapper">
            <h4 class="header">30.1 Дан чекбокс. Дан абзац. С помощью директивы v-if сделайте следующее: если чекбокс отмечен - текст красного цвета, а если не отмечен - то зеленого.</h4>
            <input type="checkbox" v-model="hasChecked" placeholder="1">
            <p v-if="hasChecked" :style="{color: 'red'}">text </p>
            <p v-else :style="{color: 'green'}">text </p>
        </div>

        <div class="wrapper">
            <h4 class="header">30.3 Дан чекбокс. Дан абзац.Если чекбокс отмечен - абзац имеет желтый фон , а если не отмечен - то зеленый.</h4>
            <input type="checkbox" v-model="isChecked" placeholder="1">
            <p :class="{yellow: isChecked, green: !isChecked}">text </p>
        </div>
        

    </div>
</template>

<script>
export default {
    name: 'task30', 
    data() {
        return {
           checked: true,
           hasChecked: true,
           isChecked: true,
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

.yellow{
    width: 100px;
    background-color:rgb(242, 229, 53);
    text-align: center;
}

.green {
    width: 100px;
    text-align: center;
    background-color: rgb(150, 255, 127);
}
</style>