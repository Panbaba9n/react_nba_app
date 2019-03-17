import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD1ITom8qF1fmASOVxZnJginRu5M0mUo3o",
    authDomain: "nba-full-lesson.firebaseapp.com",
    databaseURL: "https://nba-full-lesson.firebaseio.com",
    projectId: "nba-full-lesson",
    storageBucket: "nba-full-lesson.appspot.com",
    messagingSenderId: "380897310186"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseTeams,
    firebaseVideos
};