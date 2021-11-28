import { useEffect, useState } from "react";
import intializationAuthentication from "../firebase/initialize.init";
import {getAuth,signInWithPopup,GoogleAuthProvider,signOut,createUserWithEmailAndPassword,onAuthStateChanged,GithubAuthProvider,signInWithEmailAndPassword} from 'firebase/auth';

intializationAuthentication();
const useFirebases = () => {
    const [loading,setLoading] = useState(true);
    const [user,setUser]=useState({});
    const [error,setError]=useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //  using github to login website 

    const gitProvider = new GithubAuthProvider();
    const gitHandaler = () => {
      setLoading(true);
        signInWithPopup(auth, gitProvider)
  .then((result) => {
    const user = result.user;
  })
  .finally(()=>setLoading(false))
    }

    // sign in using google handaler

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

  
  //  using email password to to create a profile / registration form  

  const personalHandaler = (email,pass,history) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, pass)
    .then((result) => {
   
      const user = result.user;
      setUser(user);
      history.push('/');
      // ...
    })  
    .finally(()=>setLoading(false));
    
  }

      // onstate format using here 
   
  useEffect(()=>{
    setLoading(true);
    const  unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
  
           setUser(user);
        } else {
         
        }
        setLoading(false);
      })
      return () => unsubscribed;
    
  },[])

  //  sign in personal data 

  const signInPersonalData = (email,pass,location,history) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, pass)
    .then((result) => {
      // Signed in 
      const user = result.user;
         setUser(user);
         console.log(user);
  
      const destination = location?.state?.from || '/';
      history.push(destination);
    })
    .finally(()=>setLoading(false))
  }

  //  logout system 

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