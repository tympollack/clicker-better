<template>
    <div class="container">
        <div>planets</div>
        <div v-for="planet in planets">{{ planet }}</div>

        <v-divider></v-divider>

        <div>users</div>
        <div v-for="user in users">{{ user }}</div>
    </div>
</template>

<script>
    import store from '../store/store'

    export default {
        name: "view-db",

        data: () => ({

        }),

        computed: {
            planets: function() {
                return store.getters.getPlanets
            },

            users: function() {
                return store.getters.getUsers
            }
        },

        created () {
            if (!store.getters.getPlanets.length) store.dispatch('refreshPlanets')
            if (!store.getters.getUsers.length) store.dispatch('refreshUsers')
        }
    }
</script>

<style scoped>

</style>