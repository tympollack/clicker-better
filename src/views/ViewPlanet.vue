<template>
    <div class="container">
        <div>planet overview</div>
        <div>{{ planet }}</div>

        <planet-info-section
                title="stats"
                :items="statsInfos"
        ></planet-info-section>

        <planet-info-section
                title="player resources"
                :items="playerResourcesInfos"
        ></planet-info-section>

        <planet-info-section
                title="planetary resources"
                :items="planetResourcesInfos"
        ></planet-info-section>
    </div>
</template>

<script>
    import store from '../store/store'
    import PlanetInfoSection from "../components/PlanetInfoSection"

    export default {
        components: {PlanetInfoSection},
        name: "view-planet",

        data () {
            return {
            }
        },

        computed: {
            planetResourcesInfos: function() {
                return this.populatePlanetInfoSectionItemsFromObject(this.planet.planetResources)
            },

            playerResourcesInfos: function() {
                return this.populatePlanetInfoSectionItemsFromObject(this.planet.playerResources)
            },

            statsInfos: function() {
                return this.populatePlanetInfoSectionItemsFromObject(this.planet.stats)
            },

            planet: function() {
                return { "land": 13467285630348, "owner": "test", "planetResources": { "coal": 226831888424, "copper": 44287829296, "iron": 2569039358888, "oil": 4953808281694, "stone": 370754569962, "uranium": 2543651837, "water": 3096176259701, "wood": 14761391674200 }, "playerResources": { "coal": 0, "copper": 0, "iron": 0, "oil": 0, "stone": 0, "uranium": 0, "water": 0, "wood": 0 }, "stats": { "buildings": 0, "damagedLand": 0, "discoveredLand": 0, "logistics": 0, "pollution": 0, "storage": 0, "usableLand": 0, "waste": 0 }, "id": "1" }
            }
        },

        methods: {
            populatePlanetInfoSectionItemsFromObject: (obj) => {
                const infos = []
                for (const prop in obj) {
                    infos.push({name: prop, value: obj[prop]})
                }

                return infos
            }
        }
    }
</script>

<style scoped>

</style>