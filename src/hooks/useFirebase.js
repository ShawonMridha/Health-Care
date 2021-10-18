import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,  onAuthStateChanged, signOut, createUserWithEmailAndPassword ,signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail} from "firebase/auth";

initializeAuthentication();
const useFairebase=()=>{
    const [user, setUser] = useState({});
    const[error, setError] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword]= useState('');
    const[isLogin, setIsLogin]=useState(false);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    const signInUsingGoogle =()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            console.log(result.user);
            setUser(result.user)
        })
        .catch(error=>{
            setError(error.message);
        })
    }

    const logout = ()=>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if (user){
                console.log('inside state change', user);
                setUser(user);
            }
        })
    },[])


    const handleRegistration = e =>{
        e.preventDefault();
        console.log(email, password);
        if(password.length < 6){
            setError('password Must be at least 6 characters long')
            return;
        }
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('password Must contain 2 upper case');
            return;
        }
        // createUserWithEmailAndPassword(auth, email, password)
        // .then(result=>{
        //     const user = result.user;
        //     console.log(user);
        //     setError('');
        // })
        // .catch(error=>{
        //     setError(error.message);
        // })

        isLogin? processLogin(email,password): createNewUser(email, password);
        
    }
    const processLogin = (email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    const createNewUser=(email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setError('');
            verifyEmail();
        })
        .catch(error=>{
            setError(error.message);
        })
    }

    const handleEmailChange = e=>{
        setEmail(e.target.value);
    }

    const handlePasswordChange = e=>{
        setPassword(e.target.value)
    }

    const toggleLogin = e=>{
        setIsLogin(e.target.checked)
    }

    const verifyEmail=()=>{
        sendEmailVerification(auth.currentUser)
        .then(result=>{
            console.log(result);
        })
    }

    const handleResetPassword = ()=>{
        sendPasswordResetEmail(auth, email)
        .then(result =>{ })
    }
    return{
        user,
        error,
        signInUsingGoogle,
        logout,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
        isLogin,
        handleResetPassword
    }
}

export default useFairebase;