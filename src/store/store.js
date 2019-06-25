import Vuex from 'vuex'
import Vue from 'vue'
import * as fsFuncs from '../config/firebase'

Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        users: [],
        user: { id: 'qv7dcJ3yPs5BEe1b5Nu3' },
        planets: [],
        planet: null,
    },

    getters: {
        getPlanets: state => state.planets,
        getUsers: state => state.users,
        getUser: state => state.user,

        getPlanet: async state => {
            return state.planet
                || fsFuncs.getActivePlanetForUser(state.user)
                || fsFuncs.getUserPlanets(state.user)
        }
    },


    mutations: {
        setPlanets: (state, planets) => { state.planets = planets },
        setUsers: (state, users) => { state.users = users }
    },

    actions: {
        refreshPlanets: ({ commit }) => {
            commit('setPlanets', fsFuncs.getPlanets())
        },

        refreshUsers: ({ commit }) => {
            commit('setUsers', fsFuncs.getUsers())
        },
    }
})

export default store