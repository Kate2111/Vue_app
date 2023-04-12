<template>
    <div class="task13 border">
        <h4 class="header">13. Даны три абзаца и три кнопки. Сделайте так, чтобы каждая кнопка тогглила свой абзац.</h4>
        <div class="wrapper">
            <div>
                <p v-if="visible[0]">абзац №1</p>
                <button @click="toggle(0)">{{visible[0] ? 'hide' : 'show'}}</button>
            </div>
            
            <div>
                <p v-if="visible[1]">абзац №2</p>
                <button @click="toggle(1)">{{visible[1] ? 'hide' : 'show'}}</button>
            </div>
            
            <div>
                <p v-if="visible[2]">абзац №3</p>
                <button @click="toggle(2)">{{visible[2] ? 'hide' : 'show'}}</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'task13', 
    data() {
        return {
            visible: {
                0: true,
                1: true,
                2: true,
            }, 
        }
    },
    methods: {
        toggle: function(num) {
            this.visible[num] = !this.visible[num];
        },
    }
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}

.wrapper{
    display: flex;
    justify-content: space-around;
}

button{
    margin-top: 10px;
    width: 100%;
}
</style>