import firebase from 'firebase/app'
import 'firebase/functions'
import {functions} from './vars'

const test = async (text) => {
    const result = await firebase.functions().httpsCallable(functions.test)({text: text})
    console.log(result)
}

const resourceClick = async (userId, planetId, resource) => {
    const result = await firebase.functions().httpsCallable(functions.resourceClick)({
        resource: resource,
        planetId: planetId,
        userId: userId
    })
    return result.data
}

export {
    test,
    resourceClick
}