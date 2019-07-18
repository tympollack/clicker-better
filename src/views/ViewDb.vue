<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="container">
        <p>planets</p>
        <v-expansion-panel>
            <v-expansion-panel-content v-for="planet in planets" :key="planet.id">
                <template v-slot:header>
                    <div>{{ planet.id }}</div>
                </template>
                <v-card>
                    <div class="ml-3">
                        <div>owner: {{ planet.owner }}</div>
                        <div>land: {{ planet.land }}</div>
                        <div>resources:
                            <div class="ml-3">
                                <div v-for="resource in Object.keys(planet.planetResources)"
                                     :key="`${planet.id}-${resource}`">
                                    <div>{{ resource }}: {{ planet.planetResources[resource] }}</div>
                                </div>
                            </div>
                        </div>
                        <div>stats:
                            <div class="ml-3">
                                <div v-for="stat in Object.keys(planet.stats)" :key="`${planet.id}-${stat}`">
                                    <div>{{ stat }}: {{ planet.stats[stat] || 0 }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>

        <v-divider class="my-5"></v-divider>

        <p>users</p>
        <v-expansion-panel>
            <v-expansion-panel-content v-for="user in users" :key="user.id">
                <template v-slot:header>
                    <div>{{user.id}}</div>
                </template>
                <v-card>
                    <div class="ml-3">
                        <div>username: {{ user.username }}</div>
                        <div>active planet id: {{ user.activePlanet }}</div>
                        <div>owned planets: {{ user.ownedPlanets }}</div>
                        <div>resources:
                            <div class="ml-3">
                                <v-expansion-panel>
                                    <v-expansion-panel-content
                                            v-for="planetId in Object.keys(user.resources)"
                                            :key="`${user.id}-${planetId}`"
                                    >
                                        <template v-slot:header>
                                            <div>{{ planetId }}</div>
                                        </template>
                                        <v-card>
                                            <div class="ml-3">
                                                <div v-for="resource in Object.keys(user.resources[planetId])"
                                                     :key="`${user.id}-${planetId}-${resource}`">
                                                    <div>{{ resource }}: {{ user.resources[planetId][resource] }}</div>
                                                </div>
                                            </div>
                                        </v-card>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>
                            </div>
                        </div>
                        <div>stats:
                            <div class="ml-3">
                                <div v-for="stat in Object.keys(user.stats)" :key="`${user.id}-${stat}`">
                                    <div>{{ stat }}: {{ user.stats[stat] || 0 }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>

        <v-divider class="my-5"></v-divider>

        <p>config</p>
        <v-expansion-panel>
            <v-expansion-panel-content v-for="obj in config" :key="obj.id" v-if="obj.id !== 'aaa'">
                <template v-slot:header>
                    <div>{{obj.id}}</div>
                </template>
                <v-card>
                    <v-expansion-panel>
                        <v-expansion-panel-content v-for="prop in Object.keys(obj)" :key="prop" class="ml-3"
                                                   v-if="prop !== 'id'">
                            <template v-slot:header>
                                <div>{{prop}}</div>
                            </template>
                            <div class="ml-3">
                                <div>name: {{obj[prop].name}}</div>
                                <div>cost: {{obj[prop].cost}}</div>
                                <div>drain: {{obj[prop].drain}}</div>
                                <div>efficiency: {{obj[prop].efficiency}}</div>
                                <div>group: {{obj[prop].group}}</div>
                                <div>period: {{obj[prop].period}}</div>
                                <div>pollution: {{obj[prop].pollution}}</div>
                                <div>produces: {{obj[prop].produces}}</div>
                                <div>size: {{obj[prop].size}}</div>
                                <div>verb: {{obj[prop].verb}}</div>
                                <div>waste: {{obj[prop].waste}}</div>
                            </div>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-card>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import store from '../store/store'

    export default {
        name: "view-db",

        computed: {
            config: function () {
                return store.getters.getConfig
            },

            planets: function () {
                return store.getters.getPlanets
            },

            users: function () {
                return store.getters.getUsers
            }
        },

        methods: {
            ...mapActions({
                refreshConfig: 'refreshConfig',
                refreshPlanets: 'refreshPlanets',
                refreshUsers: 'refreshUsers'
            })
        },

        created() {
            if (!store.getters.getConfig.length) this.refreshConfig()
            if (!store.getters.getPlanets.length) this.refreshPlanets()
            if (!store.getters.getUsers.length) this.refreshUsers()
        }
    }
</script>

<style scoped>

</style>