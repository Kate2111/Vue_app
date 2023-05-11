import { createApp } from 'vue';
import App from './App';
import components from '@/components/meal/UI';
import tasks from '@/components/practice/Task';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from '@/router/router';


const app = createApp(App);
app.use(VueAxios, axios);

//глобальная регистрация компонентов UI, чтобы не регистрировать отдельно в каждом компоненте
components.forEach(component => {
    app.component(component.name, component)
});

tasks.forEach(task => {
    app.component(task.name, task)
});


app.use(router);
app.mount('#app');
