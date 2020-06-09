import React, {createContext,useState, useContext, useEffect} from 'react';
import { auth, createUserProfileDocumnet } from '../Firebase'


 const AuthContext = createContext();
 const useAuth = () => useContext(AuthContext)


 const AuthProvider = ({children}) => {
    const auth = useProvideAuth();

    return (
        <AuthContext.Provider value = {auth}>
            {children}
        </AuthContext.Provider>
    )

}


const useProvideAuth = () => {
    const [user, setUser] = useState(null);

    const SignOut = () => {
        return auth.signOut().then(()=> setUser(false));
    }

    const SignIn = (email, password) => {
        return auth.signInWithEmailAndPassword(email,password)
        .then(response => {
            setUser(response.user);
            return response.user;
        })
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged( async userAuth => {
            const user = await createUserProfileDocumnet(userAuth);
            console.log(user)
            if(user) {
                setUser(user)
            } else {
                setUser(false)
            }
        })

        return () => unsubscribe();

        
    },[])


    return {user,
        SignOut,
        SignIn,
    }
    

}


export {useAuth, AuthProvider}