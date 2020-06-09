import React,{createContext, useContext,useState,useEffect} from 'react'
import { db } from '../Firebase'


const todosContext = createContext()
const useTodos = () => useContext(todosContext)




const TodosProvider = ({children}) => {
    const [todos,setTodos] = useState({
        todoItems:[],
    })

    useEffect(() => {
     
        
            const getData = async () => {
            try {
               
            let unsubscribeFromFirestore =  db.collection('todos').onSnapshot( snapShot => {
              
                    const texts = snapShot.docs.map(doc => { return { id: doc.id, ...doc.data() } })
                    
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
  
        getData();

       
       
    }, [])

    return (
        <todosContext.Provider value={[todos,setTodos]}>
            {children}
        </todosContext.Provider>
    )
}

export { useTodos, TodosProvider}