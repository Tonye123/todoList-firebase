import React, {useState} from 'react';
import {db} from '../Firebase';
import Checkbox from '@material-ui/core/Checkbox';
import { StyledList } from '../styled/StyledList';



export default function ListItem({item}) {
    const [isEditState, setEditState] = useState(false);
    const [isChecked, setChecked] = useState(false)
    const [textUpdate, setTextUpdate ] = useState(item.todo.itemText)


    const{id,todo} = item;

    const handleChange = (event) => {
        setChecked(event.target.checked);
        

    };
    const handleDelete = async (id) => {
        try {
            await db.collection("todos").doc(id).delete()

        } catch (error) {
            console.error("Error deleting", error);

        }

    }

    const handleEdit = async () => {
        setEditState(true)
     }

     const handleUpdate = async (id) => {
         let docRef = db.collection("todos").doc(id);
         docRef.update({
             
             todo: {...todo,itemText:textUpdate}
         })
         setEditState(false)

     }

       
    return (
        <StyledList>
           
           
               { !isEditState ?  (<li key={id}>
                   <div>
                     <Checkbox
                     checked = {isChecked}
                     onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                /><span className={isChecked ? 'strike' : undefined}>{todo.itemText} </span>
                </div>
                <div>
                  <button className="edit" onClick={() => { handleEdit(id) }}> Edit </button>
                 <button className="delete" onClick={() => { handleDelete(id) }}> Delete </button>
                 </div>
                 
                
                  </li>
                ) : (<li>
                        <input type="text" value={textUpdate} onChange={(e)=> setTextUpdate(e.target.value)}/>
                        <button onClick={() => { handleUpdate(id) }}> Save </button>
                        <button onClick={() => setEditState(false) }> Cancel </button>
                        
                    </li>
                ) }
            

        </StyledList>
    )
}
