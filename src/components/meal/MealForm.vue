<template>
    <form @submit.prevent>
        <h4>Создание поста</h4>       
        <my-input 
            v-model="meals.title"
            type="text" 
            placeholder="Название">
        </my-input>
        <my-input 
            v-model="meals.body"
            type="text" 
            placeholder="Описание">
        </my-input>
        <my-button class="mealsBtn" @click="createMeals"> Создать</my-button>    
    </form>
</template>


<script>
    export default {
        data() {
            return {
                meals: {
                    title: '',
                    ingredients: ''
                }
            }
        },
        methods: {
            createMeals() {
                this.meals.id = Date.now();
                this.$emit('create', this.meals);
                this.meals = {
                    title: '',
                    ingredients: ''
                }
            }
        },
    }
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
    }

    .mealsBtn {
        align-self: flex-end;
        margin-top: 15px;
        margin-right: 17px;
    }
</style>