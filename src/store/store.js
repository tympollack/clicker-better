import Vuex from 'vuex'
import Vue from 'vue'
import * as fsFuncs from '../config/firebase'
import * as functions from '../config/functions'

Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        config: {},
        users: [],
        user: {"activePlanet": "1", "ownedPlanets": ["1"], "username": "test", "id": "qv7dcJ3yPs5BEe1b5Nu3"},
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
        setConfig: (state, config) => {
            state.config = config
        },
        setPlanets: (state, planets) => {
            state.planets = planets
        },
        setPlanet: (state, planet) => {
            state.planet = planet
        },
        setUsers: (state, users) => {
            state.users = users
        },
        setUser: (state, user) => {
            state.user = user
        },
        setResource: (state, {resource, amount}) => {
            state.user.resources[state.planet.id][resource] = amount
        }
    },

    actions: {
        refreshConfig: async ({commit}) => {
            // await fsFuncs.createBuildingObjectsInFs()
            commit('setConfig', fsFuncs.getConfig())
        },

        refreshPlanets: ({commit}) => {
            commit('setPlanets', fsFuncs.getPlanets())
        },

        refreshUsers: ({commit}) => {
            commit('setUsers', fsFuncs.getUsers())
        },

        refreshUser: async ({commit, state}) => {
            commit('setUser', await fsFuncs.getUserById(state.user.id))
        },

        getActivePlanet: async ({commit, state}) => {
            const userId = state.user.id
            const planet = await fsFuncs.getActivePlanetForUser(userId)
                || await fsFuncs.getUserPlanets(userId)
            commit('setPlanet', planet)
        },

        test: async () => {
            await functions.test()
        },

        resourceClick: async ({commit, state}, resource) => {
            const newResourceAmount = await functions.resourceClick(state.user.id, state.planet.id, resource)
            commit('setResource', {resource: resource, amount: newResourceAmount})
        }
    }
})

export default store