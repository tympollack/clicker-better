<template>
    <div :id="id" class="planet-info">
        <planet-info-item
                v-for="item in items"
                :key="item.name"
                :name="item.name"
                :amount="item.amount"
        ></planet-info-item>
    </div>
</template>

<script>
    import PlanetInfoItem from "./PlanetInfoItem"
    export default {
        name: "PlanetInfoSection",
        components: {PlanetInfoItem},
        props: {
            id: {
                type: String,
                required: true
            },

            items: {
                type: Array,
                default: () => []
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