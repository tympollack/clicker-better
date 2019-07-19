<template>
    <div class="resource-panel px-3">
        <v-btn
                v-for="resource in resources"
                :key="resource.name"
                :color="getColor(resource.productionAmount)"
                class="mt-1 py-1"
                @click="$emit('click', resource.name)"
        >
            {{ resource.name }} - {{resource.amount | roundTo(2)}} - {{ resource.productionAmount | roundTo(2) }} per second
        </v-btn>
    </div>
</template>

<script>
    import {roundTo} from '../utils/utils'

    export default {
        name: "resource-panel",

        filters: {
            roundTo: roundTo
        },

        props: {
            resources: {
                type: Array,
                default: () => []
            }
        },

        methods: {
            getColor: (productionAmount) => {
                return productionAmount > 0 ? 'success' : 'error'
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