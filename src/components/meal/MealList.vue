<template>
    <div class="wrapper">
        <div v-if="meals.length > 0">
            <h3>Список рецептов</h3>
            
            <!-- transition-group - встроенный тег для анимации списков -->
            <transition-group name="list">
                <meal-item
                v-for="meal in meals"
                :meal="meal"
                @remove="$emit('remove', meal)" 
                :key="meal.id"
                />
                <!--  @remove="$emit('remove', meal)" т.к. meals передан в качестве пропса, изменять мы его не можем, поэтому так же передаем вверх родителю -->
            </transition-group>
            
        </div>
        <h2 v-else class="empty">Список постов пуст. Добавьте первый пост</h2>
    </div>
    
</template>

<script>
    import mealItem from './MealItem.vue';

    export default {
        components: {mealItem},
        props: {
          meals: {
                type: Array,
                required: true
          }
        }
    }
</script>

<style scoped>
   .wrapper{
    min-height: 200px;
   }

   .empty{
    color: rgba(255, 0, 0, 0.755);
   }

   .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 0.4s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .list-move {
    transition: transform 1s;
  }
</style>