import { useEffect, useState } from "react";
import intializationAuthentication from "../firebase/initialize.init";
import {getAuth,signInWithPopup,GoogleAuthProvider,signOut,createUserWithEmailAndPassword,GithubAuthProvider,signInWithEmailAndPassword} from 'firebase/auth';

intializationAuthentication();
const useFirebases = () => {
    const [loading,setLoading] = useState(true);
    const [user,setUser]=useState({});
    const [error,setError]=useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();
    const gitHandaler = () => {
        signInWithPopup(auth, gitProvider)
  .then((result) => {
    const user = result.user;
  })
    }
    const googleHandaler = (location,history) =>{
      setLoading(true);
        signInWithPopup(auth,googleProvider)
        .then(result=>{
          
            const user = result.user;
            setUser(user);
            const destination = location?.state?.from || '/';
                history.push(destination);
        })
        .catch(error=>{
            setError(error.message);
        })
        .finally (()=>setLoading(false));
  } 
  const personalHandaler = (email,pass) => {

    createUserWithEmailAndPassword(auth, email, pass)
    .then((result) => {
      // Signed in 
      const user = result.user;
      setUser(user);
      console.log(user);
      // ...
    })  
    
  }
  const signInPersonalData = (email,pass) => {
    signInWithEmailAndPassword(auth, email, pass)
    .then((result) => {
      // Signed in 
      const user = result.user;
         setUser(user);
         console.log(user);
      // ...
    })
  }
  const logOut = () => {
      signOut(auth)
      .then(()=>{
        setUser({});
      })
  }
 
  return{
      user,
      error,
      logOut,
      googleHandaler,
      gitHandaler,
      personalHandaler,
      signInWithEmailAndPassword,
      signInPersonalData,
      loading
  }
}
export default useFirebases;