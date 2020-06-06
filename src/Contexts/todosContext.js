import React, {createContext,useState, useContext} from 'react'


 const TodosContext = createContext();
 const useTodos = () => useContext(TodosContext)


 const TodosProvider = ({children}) => {
    const [todos, setTodos] = useState([])

    return (
        <TodosContext.Provider value = {[todos,setTodos]}>
            {children}
        </TodosContext.Provider>
    )

}


export {useTodos, TodosProvider}