<template>
    <div :class="{ 'alert' : alert }">{{ name }}: {{ value }}</div>
</template>

<script>
    export default {
        name: "PlanetInfoItem",

        props: {
            name: {
                type: String,
                required: true
            },

            value: {
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