<template>
    <div class="general">
        <img @click="$router.push('/')" src="./../../img/icon-vue-js.svg" alt="icon_vue">
        <div class="box-button">
            <my-button @click="$router.push('/meal')">приложение</my-button>
            <my-button @click="$router.push('/task')">практика</my-button>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style>
.general{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: rgba(128, 128, 128, 0.501);
    box-shadow: 2px 2px 4px grey;
}

.box-button{
    display: flex;
    gap: 20px;
}


</style>