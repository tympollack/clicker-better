import Vuex from 'vuex'
import Vue from 'vue'
import { getPlanets, getUsers } from '../config/firebase'
import vars from '../config/vars'

Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        users: [],
        user: null,
        planets: [],
        planet: null,
    },

    getters: {
        getPlanets: state => state.planets,
        getUsers: state => state.users
    },


    mutations: {
        setPlanets: (state, planets) => { state.planets = planets },
        setUsers: (state, users) => { state.users = users }
    },

    actions: {
        refreshPlanets: ({ commit }) => {
            commit('setPlanets', getPlanets())
        },

        refreshUsers: ({ commit }) => {
            commit('setUsers', getUsers())
        },
    }
})

export default store