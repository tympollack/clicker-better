<template>
    <div class="container">
        <div>planet overview</div>
        <div>{{ planet }}</div>

        <div>
            <planet-info-section
                    title="stats"
                    :items="statsInfos"
            ></planet-info-section>

            <planet-info-section
                    title="discovered resources"
                    :items="discoveredResourcesInfos"
            ></planet-info-section>

            <planet-info-section
                    title="planetary resources"
                    :items="planetResourcesInfos"
            ></planet-info-section>
        </div>

        <div>
            <resource-panel

            ></resource-panel>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import store from '../store/store'
    import PlanetInfoSection from "../components/PlanetInfoSection"
    import ResourcePanel from "../components/ResourcePanel"

    export default {
        components: {ResourcePanel, PlanetInfoSection},
        name: 'view-planet',

        computed: {
            discoveredResourcesInfos: function() {
                return this.planet
                    ? this.populatePlanetInfoSectionItemsFromObject(this.planet.discoveredResources)
                    : []
            },

            planetResourcesInfos: function() {
                return this.planet
                    ? this.populatePlanetInfoSectionItemsFromObject(this.planet.planetResources)
                    : []
            },

            playerResourcesInfos: function() {
                return this.planet
                    ? this.populatePlanetInfoSectionItemsFromObject(this.planet.playerResources)
                    : []
            },

            statsInfos: function() {
                return this.planet
                    ? this.populatePlanetInfoSectionItemsFromObject(this.planet.stats)
                    : []
            },

            planet: function() {
                return store.getters.getPlanet
            }
        },

        methods: {
            ...mapActions({
                getActivePlanet: 'getActivePlanet'
            }),

            populatePlanetInfoSectionItemsFromObject: (obj) => {
                const infos = []
                for (const prop in obj) {
                    infos.push({name: prop, value: obj[prop]})
                }

                return infos
            }
        },

        created () {
            this.getActivePlanet()
        }
    }
</script>

<style scoped>

</style>