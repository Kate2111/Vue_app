<template>
    <div style="padding: 15px">
        <h1>Список постов</h1>
        <my-input
            v-model="searchQuery"
            placeholder="поиск...">

        </my-input>
        <div class="menu">
            <my-button class="showBtn" @click="showDialog">
                Создать пост
            </my-button>
            <my-select 
                v-model="selectedSort"
                :options="sortOption"
            >

            </my-select>
        </div>
       
        <my-dialog v-model:show="dialogVisible">
            <meal-form @create="createMeal"/>
        </my-dialog>

        <meal-list 
            :meals="sortedAndSearchedMeal"
            @remove="removeItem" 
            v-if="!isLoading"
        />
        <div v-else>Идет загрузка...</div>


        <div class="page__wrapper">
            <div 
            v-for="pageNumber in totalPages" 
            :key="pageNumber" 
            class="page"
            :class="{
                'current__page': page === pageNumber
            }"
            @click="changePage(pageNumber)"
        >
            {{pageNumber}}
        </div>
        </div>
        
    </div>
    
</template>


<script>
    import MealForm from '@/components/meal/MealForm.vue';
    import MealList from '@/components/meal/MealList.vue';
    import axios from 'axios';
    
    export default {
        components: {
            MealList, MealForm
        },
        data() {
            return {
                meals: [],
                dialogVisible:false,
                isLoading: false,
                searchQuery: '',
                selectedSort: '',
                page: 1,
                limit: 4,
                totalPages: 0,
                sortOption: [
                    {value: 'title', name: 'По названию'},
                    {value: 'ingredients', name: 'По индигриентам'},
                ]
            }
        }, 
        methods: {
            createMeal(meal) {
                this.meals.push(meal);
                this.dialogVisible = false;
            },
            removeItem(meal) {
                this.meals = this.meals.filter(elem => elem.id != meal.id)
            },
            showDialog() {
                this.dialogVisible = true;
            },
            changePage(pageNumber) {
                this.page = pageNumber;
            },
            async featchMeals() {
                this.isLoading = true;
                try{
                    const response = await axios.get('https://my-json-server.typicode.com/Kate2111/Vue_app/meals', {
                        params:{
                            _page: this.page,
                            _limit: this.limit
                        }
                    });
                    this.totalPages = Math.ceil( response.headers['x-total-count'] / this.limit);
                    this.meals = response.data;                 
                } catch(e) {
                    alert('error')
                } finally{
                    this.isLoading = false;
                }
            }

        },
        mounted() {
            this.featchMeals()
        },
        computed: {
            sortedMeal() {
                return [...this.meals].sort((meal1, meal2)=> {
                    return meal1[this.selectedSort]?.localeCompare(meal2[this.selectedSort]);
                })
            },
            sortedAndSearchedMeal() {
                return this.sortedMeal.filter(meal => meal.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
            }
        },
        watch: {
            page() {
                this.featchMeals();
            }
        }
        /* watch: {
            selectedSort(newvalue) {
                this.meals.sort((meal1, meal2)=> {
                    return meal1[newvalue]?.localeCompare(meal2[newvalue]);
                })
            }
        } */
    }
</script>


<style>
    .menu{
        display: flex;
        justify-content: space-between;
        margin: 15px 0;
    }

    .page__wrapper{
        display: flex;
        margin-top: 10px;
    }

    .page{
        border: 1px solid black;
        padding: 1px 6px;
    }

    .current__page{
        border: 1px solid green;
        background-color: rgba(0, 128, 0, 0.4);
    }

</style>