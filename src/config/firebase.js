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
        .catch(e => {
            console.log('error getting collection', e)
        })
    return coll
}

const getPlanets = () => getAllInCollection(collections.planets)

const getUsers = () => getAllInCollection(collections.users)

export { firebase , getPlanets, getUsers}