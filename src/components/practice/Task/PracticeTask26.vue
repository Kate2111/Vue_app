<template>
    <div class="task26 border">
        <h4 class="header">26. Объект с CSS классами в Vue</h4>
        
        <div class="wrapper">
            <p>Сделайте кнопку, нажатие на которую будет показывать элемент.</p>
            <p :class="p1">text</p>
            <button @click="showText">show</button>
        </div>
        
        <div class="wrapper">
            <p>Сделайте кнопку, нажатие на которую будет прятать элемент.</p>
            <p :class="p2">text</p>
            <button @click="hideText">hide</button>
        </div>
        
        <div class="wrapper">
            <p>Сделайте кнопку, нажатие на которую будет тогглить элемент</p>
            <p :class="p3">text</p>
            <button @click="toggleText">toggle</button>
        </div>

        <div class="wrapper">
            <p>Дан следующий объект с CSS классами: {color: true, 'font-size': false}. Примените данный объект к какому-нибудь тегу.</p>
            <p :class="{color: true, 'font-size': false}">text</p>
            <button @click="editFontSize">click</button>
        </div>

        <div class="wrapper">
            <p>CSS классы через data в Vue</p>
            <p :class="{color: isColor, 'font-size': isSize}">text</p>
            <button @click="editFontSize">click</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'task26', 
    data() {
        return {
            p1: {
			    hidden: true,
                show: false,
		    },
            p2: {
			    hidden: false,
		    },
            p3: {
                toggle: true,
            },
            isColor: false,
            isSize: true,
        }
    },
    methods: {
       showText: function() {
            this.p1.hidden = false;
            this.p1.show = true;
       },
       hideText: function() {
            this.p2.hidden = true;
       },
       toggleText: function() {
        this.p3.toggle = !this.p3.toggle;
       },
       editFontSize: function() {
        
       }
    }
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}

.wrapper{
    margin-top: 15px;
}
.hidden {
	display: none;
}
.show{
    display: block;
}

.toggle{
    display: none;
}

.color{
    color:blueviolet;
}

.font-size{
    font-size: 30px;
}

</style>