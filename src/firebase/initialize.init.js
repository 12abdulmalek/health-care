import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig.config";


const intializationAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default intializationAuthentication;
