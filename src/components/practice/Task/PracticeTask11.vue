<template>
    <div class="task11 border">
        <h4 class="header">11. Пусть в data хранится свойство visible. Пусть у вас также есть два абзаца. Сделайте так, чтобы первый абзац был показан на экране, если свойство visible равно true, а второй абзац, наоборот, показан, если свойство visible равно false.</h4>
        <p v-if="visible[0]">true</p>
        <p v-if="!visible[1]">false</p>
    </div>
</template>

<script>
export default {
    name: 'task11', 
    data() {
        return {
            visible: {
                0: true,
                1: false,
            }
        }
    },
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}
</style>