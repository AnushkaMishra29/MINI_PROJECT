import firebase from "firebase/app"
import "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyByFCssqCV2Sfnm0F8txBMHbMC5ZqCFZgw",
    authDomain: "education-portal-b54e9.firebaseapp.com",
    databaseURL: "https://education-portal-b54e9.firebaseio.com",
    projectId: "education-portal-b54e9",
    storageBucket: "education-portal-b54e9.appspot.com",
    messagingSenderId: "940595716190",
    appId: "1:940595716190:web:b9defdf7815ff5fc1e94cf",
    measurementId: "G-J3J6W1CQP0"
  };
  
  firebase.initializeApp(firebaseConfig)

  const storage=firebase.storage();

  export {storage, firebase as default};
