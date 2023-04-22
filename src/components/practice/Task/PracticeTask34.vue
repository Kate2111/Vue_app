<template>
    <div class="task34 border">
        <h4 class="header">34 Дан инпут. Сделайте так, чтобы состояние инпута регулировалось чекбоксом: если чекбокс отмечен, то инпут отблокирован, а если не отмечен - то инпут заблокирован.</h4>
        <label>
            <input v-model="isChecked" type="checkbox">
            <input class="text" v-if="isChecked" v-bind:disabled="isDisabled" type="text" placeholder="Введите текст"  v-model="contant">
            <input class="text" v-else type="text" placeholder="Введите текст" v-model="contant">
        </label>
        
    </div>
</template>

<script>
export default {
    name: 'task34', 
    data() {
        return {
            isChecked: true,
            isDisabled: true,
            contant: '',
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

.text{
    margin-left: 10px;
}


</style>