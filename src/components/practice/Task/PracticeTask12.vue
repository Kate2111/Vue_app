<template>
    <div class="task12 border">
        <h4 class="header">12. Дан абзац и две кнопки. Пусть первая кнопка показывает абзац, а вторая - скрывает его. Сделайте так, чтобы на экране всегда была видна только одна из кнопок: если абзац показан, то кнопка для сокрытия, а если скрыт - то кнопка для показа.</h4>
        <p v-if="visible">text</p>
        <button v-if="showBtn" @click="show">show</button>
        <button v-if="hideBtn" @click="hide">hide</button>
    </div>
</template>

<script>
export default {
    name: 'task12', 
    data() {
        return {
            visible: true,
            showBtn: false,
            hideBtn: true,
        }
    },
    methods: {
        show: function() {
            this.visible = true;
            this.hideBtn = true;
            this.showBtn = false;
        },
        hide: function() {
            this.visible = false;
            this.showBtn = true;
            this.hideBtn = false;
        },
    }
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}
</style>