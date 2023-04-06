<template>
    <div class="task9 border">
        <h4 class="header">9. Пусть в свойстве cost хранится цена продукта, а в свойстве amount - количество этих продуктов. Сделайте вычисляемое свойство price, которое будет содержать полную стоимость продуктов (цена умножить на количество)</h4>
       <table>
            <tr>
                <td>Название</td>
                <td>Цена</td>
                <td>Количество</td>
                <td>Итого</td>
            </tr>
            <tr>
                <td>{{ name }}</td>
                <td>
                    {{ cost }}
                    <button @click="plusClick">+</button>
                    <button @click="minusClick">-</button>
                </td>
                <td>{{ amount }}</td>
                <td>{{ fullPrice }}</td>
            </tr>
       </table>

    </div>
</template>

<script>
export default {
    name: 'task9', 
    data() {
        return {
            name: 'яблоки',
            cost: 60,
            amount: 2,  
        }
    },
    methods: {
        plusClick: function () {
            this.cost += 1;
        },
        minusClick: function () {
            this.cost -= 1;
        }
    },
    computed: {
        fullPrice: function() {
            return this.cost * this.amount;
        }
    },
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}
button{
    width: 15px;
    height: 15px;
    line-height: 12px;
}

td{
    padding: 3px 7px;
    border: 1px solid black;
}
</style>