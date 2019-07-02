<!--
            i don't think this is being used anymore
-->

<template>
    <planet-info-section
        :items="items"
    ></planet-info-section>
</template>

<script>
    import PlanetInfoSection from "./PlanetInfoSection"
    export default {
        name: "PlanetInfoPlanetTilesSection",

        components: {PlanetInfoSection},

        data: () => ({
            items: [
                { name: 'total', amount: 0 },
                { name: 'pollution', amount: 0 },
                { name: 'waste', amount: 0 },
                { name: 'logistics', amount: 0 },
                { name: 'buildings', amount: 0 },
                { name: 'total discovered', amount: 0 },
                { name: 'eff logistics', amount: 0 },
                { name: 'usable remaining', amount: 0 },
                { name: 'storage space', amount: 0 },
            ]
        })
    }
</script>

<style scoped>

</style>