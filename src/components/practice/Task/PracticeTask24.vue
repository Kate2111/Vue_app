<template>
    <div class="task24 border">
        <h4 class="header">24.1 Дан следующий массив: items: [1, -2, 3, -4, 5]. Переберите этот массив циклом и выведите только положительные элементы массива.</h4>
        
        <ul> Положительные числа массива:
            <template v-for="item in items">
                <li v-if="item > 0">{{item}}</li>
            </template>
        </ul>
        
        <br>

        <h4 class="header">24.2 Переберите циклом следующий массив и выведите названия продуктов в виде списка ul, используя атрибут key в Vue</h4>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'task24', 
    data() {
        return {
            items: [1, -2, 3, -4, 5],
            products: [
			{
				id: 1,
				name: 'product1',
			},
			{
				id: 2,
				name: 'product2',
			},
			{
				id: 3,
				name: 'product3',
			},
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