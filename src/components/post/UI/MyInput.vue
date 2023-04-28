<template>
    <input :value="modelValue" @input="updateInput" class="postInput" type="text">
</template>

<script>

export default{
    name: 'my-input',
    props: {
        modelValue: [String, Number],
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        },
    }
}
</script>

<style scoped>
.postInput {
    width: 100%;
    border: 1px solid green;
    margin-top: 15px;
    padding: 10px 15px;
}

</style>