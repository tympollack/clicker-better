import * as Firebase from 'firebase/app'
import 'firebase/firestore'
import * as admin from 'firebase-admin'

function initFirebase () {
    const serviceAccount = require("path/to/serviceAccountKey.json")
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://clicker-867.firebaseio.com"
    });
    return new Promise((resolve, reject) => {
        Firebase.firestore().enablePersistence()
            .then(resolve)
            .catch(err => {
                if (err.code === 'failed-precondition') {
                    reject(err)
                    // Multiple tabs open, persistence can only be
                    // enabled in one tab at a a time.
                } else if (err.code === 'unimplemented') {
                    reject(err)
                    // The current browser does not support all of
                    // the features required to enable persistence
                }
            })
    })
}

export { Firebase, initFirebase }