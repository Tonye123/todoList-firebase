import React, {useState} from 'react';
import {db} from '../Firebase';
import Checkbox from '@material-ui/core/Checkbox';



export default function ListItem({item}) {
    const [isEditState, setEditState] = useState(false);
    const [isChecked, setChecked] = useState(false)
    const [textUpdate, setTextUpdate ] = useState(item.text)

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
         let docRef = await db.collection("todos").doc(id);
         docRef.update({
             text: textUpdate
         })
         setEditState(false)

     }


    return (
        <div>
           
           
               { !isEditState ?  (<li key={item.id}>
                     <Checkbox
                     checked = {isChecked}
                     onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                /><span className={isChecked ? 'strike' : undefined}>{item.text} </span>
                 <button onClick={() => { handleDelete(item.id) }}> Delete </button>
                 <button onClick={() => { handleEdit(item.id) }}> Edit </button>
                 <hr /> </li>
                ) : (<li>
                        <input type="text" value={textUpdate} onChange={(e)=> setTextUpdate(e.target.value)}/>
                        <button onClick={() => { handleUpdate(item.id) }}> Save </button>
                        <button onClick={() => setEditState(false) }> Cancel </button>
                        <hr />
                    </li>
                ) }
            

        </div>
    )
}
