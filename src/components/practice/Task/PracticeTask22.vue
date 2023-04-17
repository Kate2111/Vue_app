<template>
    <div class="task22 border">
        <h4 class="header">22. Дан массив с продуктами, с помощью цикла выведите данные в таблицу</h4>
    
        <table>
            <tr v-for="product in products">
                <td>{{product.name}}</td>
                <td>{{product.price}}</td>
                <td>{{product.quantity}}</td>
            </tr>
        </table>    

    </div>
</template>

<script>
export default {
    name: 'task22', 
    data() {
        return {
            products: [
			{
				name: 'product1',
				price: 100,
				quantity: 5
			},
			{
				name: 'product2',
				price: 200,
				quantity: 4
			},
			{
				name: 'product3',
				price: 300,
				quantity: 3
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

td {
    width: 70px;
    height: 20px;
    border: 1px solid black;
    text-align: center;
}

</style>