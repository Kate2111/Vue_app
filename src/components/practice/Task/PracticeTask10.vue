<template>
    <div class="task10 border">
        <h4 class="header">10. Дана ссылка. Привяжите к ней обработчик клика. Сделайте так, чтобы клик по ссылке не приводил к переходу по ней.</h4>
       <a @click.once.prevent="clickLink" href="#">click</a>
       <p>{{ counter }}</p>

    </div>
</template>

<script>
export default {
    name: 'task10', 
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
       clickLink: function () {
        this.counter += 1;
       },
    },
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}
</style>