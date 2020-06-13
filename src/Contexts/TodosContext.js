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
            
        
            const getData = async () => {
               
                
            try {
                let unsubscribeFromAuth = await auth.onAuthStateChanged(() => {
                    let ID = auth.currentUser.uid
                    setUid(ID)
                })
                
                let unsubscribeFromFirestore = await db.collection('newUserData').doc(userId)
                .collection('lists').onSnapshot(snapShot => {
                    
                    const texts = snapShot.docs.map(doc => { return { id: doc.id, ...doc.data() } });
                    setTodos({todoItems:texts});  
                                   
                })
       
                return () => {
                    unsubscribeFromFirestore();
                    unsubscribeFromAuth();
                   
                
                }

            }
            
            catch (error) {
            console.error("Error fetching Data",error);
            
        }
    }
      
        getData();
        

       
       
    }, [userId])

    return (
        <todosContext.Provider value={[todos,setTodos]}>
            {children}
        </todosContext.Provider>
    )
}

export { useTodos, TodosProvider}