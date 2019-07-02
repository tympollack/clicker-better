<template>
    <div class="planet-info pr-3">
        <p>{{ title }}</p>
        <planet-info-item
                v-for="item in items"
                :key="item.name"
                :name="item.name"
                :value="item.value"
        ></planet-info-item>
    </div>
</template>

<script>
    import PlanetInfoItem from "./PlanetInfoItem"
    export default {
        name: "PlanetInfoSection",
        components: {PlanetInfoItem},
        props: {
            items: {
                type: Array,
                default: () => []
            },

            title: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
    .planet-info {
        display: inline-block;
        width: 250px;
        border: 1px dotted cornflowerblue;
        vertical-align: top;
        height: 30%;
        overflow-y: auto;
    }
</style>