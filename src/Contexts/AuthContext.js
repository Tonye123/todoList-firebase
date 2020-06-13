import React, {createContext,useState, useContext, useEffect} from 'react';
import { auth, createUserProfileDocumnet } from '../Firebase';
import { useHistory } from 'react-router-dom'


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
    const history = useHistory();

    const SignOut = async () => {
        return auth.signOut().then(()=> {

        setUser(false)
        history.push("/signin")
        
        })

        
    }

    const SignIn = async (email, password) => {
        return  await auth.signInWithEmailAndPassword(email,password)
        .then(response => {
            setUser(response.user);
            return response.user;
        })
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged( async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocumnet(userAuth);
                
                
                userRef.onSnapshot(snapshot => {
                    setUser({uid:snapshot.id, ...snapshot.data()})
                   
                })
            }
            
           
           else {
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