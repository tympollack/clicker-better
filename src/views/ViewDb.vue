<template>
    <div>db view</div>
</template>

<script>
    export default {
        name: "view-db",

        data: () => ({
            planets: []
        }),

        mounted () {
            dispatch('planetsModule/fetchAndAdd')
        }
    }
</script>

<style scoped>

</style>