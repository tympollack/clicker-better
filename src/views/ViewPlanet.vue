<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="container">
        <v-expansion-panel>
            <v-expansion-panel-content>
                <template v-slot:header>
                    <div>planet overview</div>
                </template>
                <v-card>{{ planet }}</v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>

        <v-layout fill-height>
            <v-flex xs3>
                <resource-panel
                        :resources="manualResources"
                        @click="addToResource"
                ></resource-panel>
            </v-flex>

            <v-flex xs9>
                <v-layout>
                    <v-flex xs4>
                        <planet-info-section
                                title="stats"
                                :items="statsInfos"
                        ></planet-info-section>
                    </v-flex>

                    <v-flex xs4>
                        <planet-info-section
                                title="discovered resources"
                                :items="discoveredResourcesInfos"
                        ></planet-info-section>
                    </v-flex>

                    <v-flex xs4>
                        <planet-info-section
                                title="planetary resources"
                                :items="planetResourcesInfos"
                        ></planet-info-section>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>

    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import store from '../store/store'
    import PlanetInfoSection from "../components/PlanetInfoSection"
    import ResourcePanel from "../components/ResourcePanel"
    import {manualResources} from '../config/vars'

    export default {
        components: {ResourcePanel, PlanetInfoSection},
        name: 'view-planet',

        computed: {
            manualResources: () => {
                const ret = []
                for (const resource of manualResources) {
                    ret.push({
                        name: resource,
                        amount: 0,
                        productionAmount: 0
                    })
                }
                return ret
            },

            discoveredResourcesInfos: function () {
                return this.planet
                    ? this.populatePlanetInfoSectionItemsFromObject(this.planet.discoveredResources)
                    : []
            },

            planetResourcesInfos: function () {
                return this.planet
                    ? this.populatePlanetInfoSectionItemsFromObject(this.planet.planetResources)
                    : []
            },

            playerResourcesInfos: function () {
                return this.planet
                    ? this.populatePlanetInfoSectionItemsFromObject(this.planet.playerResources)
                    : []
            },

            statsInfos: function () {
                return this.planet
                    ? this.populatePlanetInfoSectionItemsFromObject(this.planet.stats)
                    : []
            },

            planet: function () {
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
            },

            addToResource: function(resource) {

            }
        },

        created() {
            this.getActivePlanet()
        }
    }
</script>

<style scoped>

</style>