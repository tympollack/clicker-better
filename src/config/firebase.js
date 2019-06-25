import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from '../config/firebase-key-no-commit'
import vars from './vars'

firebase.initializeApp(firebaseConfig)

const collections = {
    [vars.collections.planets]: firebase.firestore().collection(vars.collections.planets),
    [vars.collections.users]: firebase.firestore().collection(vars.collections.users),
}

const getAllInCollection = (collection) => {
    const coll = []
    collection
        .get()
        .then(docsRef => {
            docsRef.forEach(doc => {
                const obj = doc.data()
                obj.id = doc.id
                coll.push(obj)
            })
        })
        .catch(e => { console.log('error getting collection', e) })
    return coll
}

const getPlanets = () => getAllInCollection(collections.planets)

const getUsers = () => getAllInCollection(collections.users)

const getActivePlanetForUser = user => {
    if (!user) return null
    let planet
    collections.users.doc(user.id)
        .get()
        .then(doc => {
            const planetId = doc.data().activePlanet
            collections.planets.doc(planetId)
                .get()
                .then(planetDoc => {
                    planet = planetDoc.data()
                    planet.id = planetId
                })
                .catch(e => { console.log('error getting planet', planetId, e) })
        })
        .catch(e => { console.log('error getting active planet for user', user.id, e) })
    return planet
}

const getUserPlanets = user => {
    // return user
    //     ? getAllInCollection(collections.users.doc(user.id).collection(vars.subcollections.users.planets))
    //     : null
}

export {
    firebase,
    getPlanets,
    getUsers,
    getActivePlanetForUser,
    getUserPlanets,
}