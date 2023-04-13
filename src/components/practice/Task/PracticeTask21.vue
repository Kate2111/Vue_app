<template>
    <div class="task21 border">
        <h4 class="header">21. Перебор группы тегов в Vue</h4>
        
        <ul>
            <li v-for="elem in hrefs"><a :href="elem.href"> {{ elem.text }} </a></li>
        </ul>

    </div>
</template>

<script>
export default {
    name: 'task21', 
    data() {
        return {
            hrefs: [
                {href: '1.html', text: 'text1'},
                {href: '2.html', text: 'text2'},
                {href: '3.html', text: 'text3'},
            ]
        }
    },
    methods: {
       
    }
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}

ul{
    padding: 0 20px;
}

</style>