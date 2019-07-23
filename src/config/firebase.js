import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from '../config/firebase-key-no-commit'
import { collections, config } from './vars'
import { buildingObjects } from '../config/building-objects-old'


firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore()

const fsCollections = {
    [collections.config]: firestore.collection(collections.config),
    [collections.planets]: firestore.collection(collections.planets),
    [collections.users]: firestore.collection(collections.users),
}

const createBuildingObjectsInFs = async () => {
    const radarObjects = ['radarTowerSmall']
    const excavationObjects = ['excavator1']
    const wasteCleaningObjects = ['recyclerRobot']
    const pollutionCleaningObjects = ['airScrubberRobot']
    
    const buildingObjectsObj = {}
    const radarObjectsObj = {}
    const excavationObjectsObj = {}
    const wasteCleaningObjectsObj = {}
    const pollutionCleaningObjectsObj = {}
    
    for (const prop in buildingObjects) {
        const obj = buildingObjects[prop]
        delete obj.amount
        if (radarObjects.indexOf(prop) > -1) radarObjectsObj[prop] = obj
        else if (excavationObjects.indexOf(prop) > -1) excavationObjectsObj[prop] = obj
        else if (wasteCleaningObjects.indexOf(prop) > -1) wasteCleaningObjectsObj[prop] = obj
        else if (pollutionCleaningObjects.indexOf(prop) > -1) pollutionCleaningObjectsObj[prop] = obj
        else buildingObjectsObj[prop] = obj
    }
    
    const coll = fsCollections[collections.config]
    try {
        await coll.doc(config.buildingObjects).set(buildingObjectsObj)
        await coll.doc(config.radarObjects).set(radarObjectsObj)
        await coll.doc(config.excavationObjects).set(excavationObjectsObj)
        await coll.doc(config.wasteCleaningObjects).set(wasteCleaningObjectsObj)
        await coll.doc(config.pollutionCleaningObjects).set(pollutionCleaningObjectsObj)
    } catch(e) {
        console.error('something bad happened on the way to the forum', e)
    }
}

const getObjectById = async (collection, id) => {
    const errMsg = 'Unable to get firestore object: '
    if (!collection) throw new Error(errMsg + 'no collection provided')
    if (!id) throw new Error(errMsg + 'no id provided')

    try {
        const doc = await collection.doc(id).get()
        const obj = doc.data()
        obj.id = id
        return obj
    } catch (e) {
        console.error('error getting object by id', collection, id, e)
        throw e
    }
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
        .catch(e => { console.error('error getting collection', e) })
    return coll
}

const getConfig = () => getAllInCollection(fsCollections.config)

const getPlanets = () => getAllInCollection(fsCollections.planets)

const getUsers = () => getAllInCollection(fsCollections.users)

const getPlanetById = async planetId => {
    try {
        return await getObjectById(fsCollections.planets, planetId)
    } catch(e) {
        console.error('error getting planet', planetId, e)
        throw e
    }
}

const getUserById = async userId => {
    try {
        return await getObjectById(fsCollections.users, userId)
    } catch(e) {
        console.error('error getting user', userId, e)
        throw e
    }
}

const getActivePlanetForUser = async userId => {
    try {
        const user = await getUserById(userId)
        return await getPlanetById(user.activePlanet)
    } catch(e) {
        console.error('error getting active planet for user', userId, e)
    }
}

const getUserPlanets = async userId => {
    try {
        const user = await getUserById(userId)
        const planets = []
        for (let planetId of user.ownedPlanets) {
            const planet = await getPlanetById(planetId)
            planets.push(planet)
        }
        return planets
    } catch(e) {
        console.error('error getting planets for user', userId, e)
    }
}

export {
    firebase,
    getConfig,
    getPlanets,
    getUsers,
    getActivePlanetForUser,
    getUserPlanets,
    getUserById,
    createBuildingObjectsInFs
}