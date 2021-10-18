import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const initialzeAuthentication=()=>{
    initializeApp(firebaseConfig);
}

export default initialzeAuthentication;