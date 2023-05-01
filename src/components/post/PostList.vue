<template>
    <div class="wrapper">
        <div v-if="posts.length > 0">
            <h3>Список постов</h3>
            
            <!-- transition-group - встроенный тег для анимации списков -->
            <transition-group name="list">
                <post-item
                v-for="post in posts"
                :post="post"
                @remove="$emit('remove', post)" 
                :key="post.id"
                />
                <!--  @remove="$emit('remove', post)" т.к. posts передан в качестве пропса, изменять мы его не можем, поэтому так же передаем вверх родителю -->
            </transition-group>
            
        </div>
        <h2 v-else class="empty">Список постов пуст. Добавьте первый пост</h2>
    </div>
    
</template>

<script>
    import postItem from './PostItem.vue';

    export default {
        components: {postItem},
        props: {
            posts: {
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