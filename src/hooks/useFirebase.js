import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import firebaseApp from '../firebase.init';

const auth = getAuth(firebaseApp)

const useFirebase = () => {
    const [user, setUser] = useState({});

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user)
            })
            .catch(error => {
                console.error(error.message)
            })
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => {
                console.error(error.message)
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, []);

    return {
        user,
        signInWithGoogle,
        handleSignOut
    }
};
export default useFirebase;