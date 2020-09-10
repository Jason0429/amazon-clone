import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyD9ZlguRgpr8Q4Cht54LvyolbnEIjfKfoo',
	authDomain: 'clone-2b969.firebaseapp.com',
	databaseURL: 'https://clone-2b969.firebaseio.com',
	projectId: 'clone-2b969',
	storageBucket: 'clone-2b969.appspot.com',
	messagingSenderId: '345487601886',
	appId: '1:345487601886:web:64c5cbad3bbdf19286124f',
	measurementId: 'G-4ZCV6340Q5',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
