<template>
    <div class="task35 border">
        <h3 class="header">35.1 Дан инпут. В этот инпут вводится текст. Сделайте так, чтобы по нажатию на клавишу Enter введенный текст появился в абзаце под инпутом. </h3>
        <input @keyup.enter="showText(1)" v-model="content">
        <p v-if="visible[1]">{{content}}</p>

        <h3 class="header">35.2 Дана ссылка. Сделайте так, чтобы по клику на эту ссылку, если в этот момент зажата клавиша Ctrl, в абзац под ссылкой вывелся какой-нибудь текст.</h3>
        <p>HTML</p>
        <a v-if="!visible[2]" @click.prevent.ctrl="showText(2)" href="#">подробнее...</a>
        <p v-if="visible[2]">это код, который используется для структурирования и отображения веб-страницы и её контента. Например, контент может быть структурирован внутри множества параграфов, маркированных списков или с использованием изображений и таблиц данных. Как видно из названия, эта статья даст вам базовое понимание HTML и его функций.</p>

        <h3 class="header">35.3 Дана ссылка. Сделайте так, чтобы по нажатию левой кнопки мыши на эту ссылку в абзац под ссылкой вывелся текст 'left', по нажатию правой кнопки мыши - текст 'right', а по нажатию средней кнопки - текст 'middle'.</h3>
        <a @click.prevent.left="showText(3)" @click.right="showText(4)" @click.middle="showText(5)" href="#">show text</a>
        <p v-if="visible[3]">left</p>
        <p v-if="visible[4]">right</p>
        <p v-if="visible[5]">middle</p>

        <br>

        <a @click.prevent.left="textLink(1)" @click.prevent.right="textLink(2)" @click.middle.prevent="textLink(3)" href="#">show text</a>
        <p>{{text}}</p> 



    </div>
</template>

<script>
export default {
    name: 'task35', 
    data() {
        return {
            visible: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
            },
            link: {
                1: 'left',
                2: 'right',
                3: 'middle',
            },
            text: '',
            content: ''
        }
    },
    methods: {
       showText: function(param) {
        this.visible[param] = true;
       },
        textLink: function(param) {
        this.text = this.link[param];
       } 

    }
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}


</style>