<template>
    <div class="task16 border">
        <h4 class="header">16. Пусть у вас даны три абзаца и кнопка. Сделайте так, чтобы по нажатию на кнопку эти абзацы скрывались.</h4>
        <div v-show="visible">
            <p>Абзац №1</p>
            <p>Абзац №2</p>
            <p>Абзац №3</p>
        </div>
        <button @click="hidden">{{visible ? 'hide' : 'show'}}</button>
    </div>
</template>

<script>
export default {
    name: 'task16', 
    data() {
        return {
           visible: true,
        }
    },
    methods: {
        hidden: function() {
            this.visible = !this.visible;
        }
    }
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}
button{
    margin: 10px 15px 5px;
    padding: 3px 5px;
}
</style>