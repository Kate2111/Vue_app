import Main from "@/pages/Main";
import MealPage from '@/pages/MealPage';
import TaskPage from '@/pages/TaskPage';
import MealPageID from '@/pages/MealPageID';
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/task',
        component: TaskPage,
    },
    {
        path: '/meal',
        component: MealPage,
    },
    {
        path: '/meal/:id',
        component: MealPageID,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;