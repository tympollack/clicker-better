<template>
    <div :class="{ 'alert' : alert }">{{ name }}: {{ amount }}</div>
</template>

<script>
    export default {
        name: "PlanetInfoItem",

        props: {
            name: {
                type: String,
                required: true
            },

            amount: {
                type: Number,
                default: 0
            },

            alert: Boolean
        }
    }
</script>

<style scoped>
    .alert {
        color: red
    }
</style>