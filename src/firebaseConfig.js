
import firebase from 'firebase'
import 'firebase/firestore'


var config = {
    apiKey: "AIzaSyAWX-8pXQwsSRYp5qbTM5gUkq96_q6jSFs",
    authDomain: "vuegram23.firebaseapp.com",
    databaseURL: "https://vuegram23.firebaseio.com",
    projectId: "vuegram23",
    storageBucket: "vuegram23.appspot.com",
    messagingSenderId: "703826659743"
  };
firebase.initializeApp(config)

const db=firebase.firestore()
const auth=firebase.auth()
const currentUser=auth.currentUser

const settings = {
    timestampsInSnapshots: true
}
db.settings(settings)


const userCollections=db.collection('user')


export{
    db,
    auth,
    currentUser,
    userCollections
}