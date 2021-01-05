import * as functions from 'firebase-functions';

export const helloWorld = functions.https.onRequest((request, response) => {
    const timestamp = new Date().toUTCString();
    response.send(`Hello from Firebase! ${timestamp}`);
});

export const helloWorldCached = functions.https.onRequest((request, response) => {
    const timestamp = new Date().toUTCString();
    response.set('Cache-Control', 'public, max-age=10, s-maxage=10')
    response.send(`Hello from Firebase! (cached) ${timestamp}`);
});
