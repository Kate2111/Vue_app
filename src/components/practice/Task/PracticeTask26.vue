<template>
    <div class="task26 border">
        <h4 class="header">26. Объект с CSS классами в Vue</h4>
        
        <p :class="obj">text</p>

        <!-- <button @click="hideText">hide</button> -->
    </div>
</template>

<script>
export default {
    name: 'task26', 
    data() {
        return {
            obj: {
			    hidden: true,
		    },
        }
    },
    methods: {
       hideText: function() {
            this.obj.hidden = false;
       }
    }
}
</script>

<style scoped>
.header{
    margin-bottom: 10px;
}

</style>