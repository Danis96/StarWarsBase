import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC9lbMrzxNltKTmtmVboJYndfzlWLW_jis",
    authDomain: "starwarsbase-7db9e.firebaseapp.com",
    databaseURL: "https://starwarsbase-7db9e.firebaseio.com",
    projectId: "starwarsbase-7db9e",
    storageBucket: "starwarsbase-7db9e.appspot.com",
    messagingSenderId: "445304038459",
    appId: "1:445304038459:web:cc7e6b2fd637d4db54681e"
  };

  firebase.initializeApp(firebaseConfig);
  const firebaseDBReff = firebase.database().ref('Subscribers').child('subscriber');

  export {
      firebaseDBReff,
      firebase as default
  }