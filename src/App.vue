<template>
    <v-app>
        <v-navigation-drawer
                permanent
                fixed
                width="100px"
                dark
                app
                hide-overlay
                stateless
        >
            <v-list>
                <v-list-tile
                        v-for="view in views"
                        :key="view.id"
                        ripple
                        :value="activeView === view.id"
                        active-class="blue--text"
                >
                    <v-list-tile-content>
                        <v-list-tile-title
                                @click="activeView = view.id"
                        >{{ view.displayName }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-content class="secondary">
            <transition name="component-fade" mode="out-in">
                <component :is="activeView"></component>
            </transition>
        </v-content>
    </v-app>
</template>

<script>
    import ViewDb from './views/ViewDb'
    import ViewPlanet from './views/ViewPlanet'

    export default {
        name: 'App',
        components: {
            ViewDb,
            ViewPlanet
        },
        data: () => ({
            activeView: 'view-db',
            views: [
                { id: 'view-db', displayName: 'DB Viewer'},
                { id: 'view-planet', displayName: 'Planet'},
            ]
        })
    }
</script>

<style>
    /*html, body {*/
    /*    -webkit-user-select: none;*/
    /*    -moz-user-select: none;*/
    /*    -ms-user-select: none;*/
    /*    user-select: none;*/
    /*}*/
</style>