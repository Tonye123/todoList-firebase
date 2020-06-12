import React, {useState} from 'react';
import {db} from '../Firebase';
import Checkbox from '@material-ui/core/Checkbox';
import { StyledList } from '../styled/StyledList';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Edit from '@material-ui/icons/Edit';






export default function ListItem({item}) {
    const [isEditState, setEditState] = useState(false);
    const [isChecked, setChecked] = useState(false)
    const [textUpdate, setTextUpdate ] = useState(item.todo.itemText);

    


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
                  <Edit className="edit" onClick={() => { handleEdit(id) }}> Edit </Edit>
                 <DeleteForeverIcon className="delete" onClick={() => { handleDelete(id) }}> Delete </DeleteForeverIcon>
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
