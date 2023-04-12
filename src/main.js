import { createApp } from 'vue';
import App from './App';
import components from '@/components/post/UI';
import tasks from '@/components/practice/Task';


const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
});

tasks.forEach(task => {
    app.component(task.name, task)
});


app.mount('#app');
