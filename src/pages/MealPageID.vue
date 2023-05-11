<template>
    <div>
        <div class="container">
            <h3>{{$route.params.title}}</h3>
            <p>{{$route.params.includes}}</p>
            <p>{{$route.params.more}}</p>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style>

</style>