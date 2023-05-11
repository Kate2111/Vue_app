<template>
    <div class="dialog" v-if="show" @click="hideDialog" @click.stop>
        <div class="content" @click.stop> <!--  @click.stop или stopPropagation() отмена всплытия события , чтобы диалоговое окно не закрывалось при клике на само окно -->
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-dialog',
    props: {
        show:{
            type: Boolean,
            default: false,
        }
   },
   methods: {
    hideDialog() {
        this.$emit('update:show', false) // 'update:show' через v-model:show="dialogVisible" связываем компонент с родителем
    }
   }
}
</script>

<style scoped>
    .dialog{
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.503);
        display: flex;
    }

    .content{
        background-color: white;
        border-radius: 12px;
        min-width: 300px;
        min-height: 200px;
        margin: auto;
        padding: 10px;
    }
</style>