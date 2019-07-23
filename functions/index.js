const functions = require('firebase-functions')
require('firebase/firestore')

const db = require('./firestore/init')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.test = functions.https.onCall((data, context) => {
    console.log(data)
    return {text: 'hi'}
})

exports.resourceClick = functions.https.onCall(async (data, context) => {
    const {planetId, resource, userId} = data
    const userRef = db.collection('users').doc(userId)
    const userDoc = await userRef.get()
    const docData = userDoc.data()
    const rssField = docData.resources

    if (!rssField.hasOwnProperty(planetId)) throw new Error('User does not control planet.')

    const rssGainByHand = docData.stats.resourceGainByHand
    const rss = rssField[planetId]
    const newRssAmount = rss[resource] + rssGainByHand
    rss[resource] = newRssAmount

    await userRef.update({resources: rssField})
    return newRssAmount
})