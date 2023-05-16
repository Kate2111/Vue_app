import Main from "@/pages/Main";
import MealPage from '@/pages/MealPage';
import TaskPage from '@/pages/TaskPage';
import MealPageID from '@/pages/MealPageID';
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/Vue-app/',
        component: Main,
    },
    {
        path: '/Vue-app/task',
        component: TaskPage,
    },
    {
        path: '/Vue-app/meal',
        component: MealPage,
    },
    {
        path: '/Vue-app/meal/:id',
        component: MealPageID,
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;