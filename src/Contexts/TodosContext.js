import React,{createContext, useContext,useState,useEffect} from 'react';
import { db, auth } from '../Firebase';





const todosContext = createContext()
const useTodos = () => useContext(todosContext);




const TodosProvider = ({children}) => {
    const [todos,setTodos] = useState({
        todoItems:[],
    })

    const [userId, setUid] = useState(null)

    useEffect(() => {
        let unsubscribeFromAuth = auth.onAuthStateChanged(() => {
            let ID = auth.currentUser.uid
            setUid(ID)
        })
        return () => {
            unsubscribeFromAuth();
        }
    }, [])
   
    
    useEffect(() => {
            
        
            const getData = async () => {
               
                
            try {
                
                
                let unsubscribeFromFirestore = db.collection('newUserData').doc(userId)
                .collection('lists').onSnapshot(snapShot => {
                    
                    const texts = snapShot.docs.map(doc => { return { id: doc.id, ...doc.data() } });
                    setTodos({todoItems:texts});  
                                   
                })
       
                return () => {
                    unsubscribeFromFirestore();
                    
                   
                
                }

            }
            
            catch (error) {
            console.error("Error fetching Data",error);
            
        }
    }
      
    
        if(userId) {
            getData();
        }   
       
    
        

       
       
    }, [userId])

    return (
        <todosContext.Provider value={[todos,setTodos]}>
            {children}
        </todosContext.Provider>
    )
}

export { useTodos, TodosProvider}