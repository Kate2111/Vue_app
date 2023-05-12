<template>
    <div class="meals">
        <div>
            <div><strong>Название:</strong> {{ meal.title }}</div>
            <div><strong>Описание:</strong> {{ meal.ingredients }}</div>
        </div>
        <div class="box-button">
            <my-button @click="$router.push(`/meals/${meal.id}`)">
                открыть
            </my-button>
            <my-button @click="$emit('remove', meal)"> <!-- передаем вверх родителю конкретный meals, на который совершен клик -->
                удалить
            </my-button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            meal: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style scoped>
    .meals{
        border: 2px solid green;
        margin-top: 15px;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>