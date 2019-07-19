<template>
    <div>
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