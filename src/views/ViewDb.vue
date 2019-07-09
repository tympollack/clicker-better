<template>
    <div class="container">
        <p>planets</p>
        <div v-for="planet in planets" :key="planet.id">
            <div class="ma-3">
                {{ planet.id }}
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
            </div>
        </div>

        <v-divider class="my-5"></v-divider>

        <p>users</p>
        <div v-for="user in users" :key="user.id">
            <div class="ma-3">
                {{ user.id }}
                <div class="ml-3">
                    <div>username: {{ user.username }}</div>
                    <div>active planet id: {{ user.activePlanet }}</div>
                    <div>owned planets: {{ user.ownedPlanets }}</div>
                    <div>resources:
                        <div class="ml-3">
                            <div v-for="planetId in Object.keys(user.resources)"
                                 :key="`${user.id}-${planetId}`">
                                {{ planetId }}
                                <div class="ml-3">
                                    <div v-for="resource in Object.keys(user.resources[planetId])"
                                         :key="`${user.id}-${planetId}-${resource}`">
                                        <div>{{ resource }}: {{ user.resources[planetId][resource] }}</div>
                                    </div>
                                </div>
                            </div>
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
            </div>
        </div>

        <v-divider class="my-5"></v-divider>

        <p>config</p>
        <div v-for="obj in config" :key="obj.id">
            <div class="ma-3">
                {{ obj.id }}
                <div v-for="prop in Object.keys(obj)" :key="prop" class="ma-3">
                    <div v-if="prop !== 'id'">
                        <div>{{prop}}</div>
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
                    </div>
                </div>
            </div>
        </div>
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