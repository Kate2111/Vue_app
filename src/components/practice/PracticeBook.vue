<template>
    <div class="practice">
        <PracticeTask1/>
        <PracticeTask2/>
        <PracticeTask3/>
        <PracticeTask4/>
        <PracticeTask5/>
        <PracticeTask6/>
        <PracticeTask7/>
        <PracticeTask8/>
    
    </div>
</template>

<script>
import PracticeTask1 from './Task/PracticeTask1';
import PracticeTask2 from './Task/PracticeTask2';
import PracticeTask3 from './Task/PracticeTask3';
import PracticeTask4 from './Task/PracticeTask4';
import PracticeTask5 from './Task/PracticeTask5';
import PracticeTask6 from './Task/PracticeTask6';
import PracticeTask7 from './Task/PracticeTask7';
import PracticeTask8 from './Task/PracticeTask8';

    export default {
       components: {
        PracticeTask1, PracticeTask2, PracticeTask3,
        PracticeTask4, PracticeTask5,PracticeTask6,
        PracticeTask7, PracticeTask8
    }, 
       data() {
        return {

        }
       } 
    }
</script>

<style scoped>
    .practice{
        margin: 20px;
    }

    .border{
        border: solid 1px green;
        margin: 10px 0;
        padding: 8px;
    }
    .header{
        margin-bottom: 5px;
    }
</style>