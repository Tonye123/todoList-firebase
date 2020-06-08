import React, {createContext,useState, useContext, useEffect} from 'react';
import { auth } from '../Firebase'


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

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged( user => {
            if(user) {
                setUser(user)
            } else {
                setUser(false)
            }
        })

        return () => unsubscribe();

        
    },[])


    return {user,
        SignOut}
    

}


export {useAuth, AuthProvider}