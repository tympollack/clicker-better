import Vuex from 'vuex'
import Vue from 'vue'
import * as fsFuncs from '../config/firebase'

Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        config: {},
        users: [],
        user: { "activePlanet": "1", "ownedPlanets": [ "1" ], "username": "test", "id": "qv7dcJ3yPs5BEe1b5Nu3" },
        planets: [],
        planet: null,
    },

    getters: {
        getConfig: state => state.config,
        getPlanets: state => state.planets,
        getPlanet: state => state.planet,
        getUsers: state => state.users,
        getUser: state => state.user,
    },

    mutations: {
        setConfig: (state, config) => { state.config = config },
        setPlanets: (state, planets) => { state.planets = planets },
        setPlanet: (state, planet) => { state.planet = planet },
        setUsers: (state, users) => { state.users = users }
    },

    actions: {
        refreshConfig: async ({ commit }) => {
            // await fsFuncs.createBuildingObjectsInFs()
            commit('setConfig', fsFuncs.getConfig())
        },

        refreshPlanets: ({ commit }) => {
            commit('setPlanets', fsFuncs.getPlanets())
        },

        refreshUsers: ({ commit }) => {
            commit('setUsers', fsFuncs.getUsers())
        },

        getActivePlanet: async ({ commit, state }) => {
            const userId = state.user.id
            const planet = await fsFuncs.getActivePlanetForUser(userId)
                || await fsFuncs.getUserPlanets(userId)
            commit('setPlanet', planet)
        }
    }
})

export default store