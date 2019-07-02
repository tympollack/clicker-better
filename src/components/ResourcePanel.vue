<template>
    <div class="resource-panel">
        <v-btn
                v-for="resource in resources"
                :key="resource.name"
                :color="color"
                class="mt-1 py-1 px-3"
        >
            {{ resource.name }} - test
        </v-btn>
    </div>
</template>

<script>
    export default {
        name: "resource-panel",

        props: {
            color: {
                type: String,
                default: 'error'
            },

            resources: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style scoped>
    .resource-panel button {
        width: 100%;
        text-align: left;
    }
</style>