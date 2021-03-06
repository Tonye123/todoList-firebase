import React, { useState } from 'react';
import { auth,db,storage } from '../Firebase';
import { StyledForm } from '../styled/StyledForm';
import CurrentUser from './CurrentUser';

export default function UserProfile() {
    const [displayName, setDisplay] = useState('');
    let imageInput =  null;
    

    function get_uid() {
        return auth.currentUser.uid;
    }

    function get_userRef(uid) {
        return db.doc(`users/${uid}`)
    }

    const handleChange = (event) => {
        setDisplay(event.target.value);
    }

    const uploadImage = (e) => {
         imageInput = e.target.files[0];
         
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        
        if(displayName) {
            const uid = get_uid();
            const userRef = get_userRef(uid)
             userRef.update({ displayName })
        }

        if(imageInput) {
            storage.ref()
            .child("user-profiles")
            .child(get_uid())
            .child(imageInput.name)
            .put(imageInput)
            .then(response => response.ref.getDownloadURL())
            .then( photoURL => get_userRef(get_uid()).update({ photoURL }))
          
        }


    }
    return (
        <section>
            <CurrentUser />
           <StyledForm onSubmit={handleSubmit}>
               <input type="text"
               value={displayName}
               name = "displayName"
               onChange={handleChange}
               placeholder="Change Display Name..."
                />
                <div>
                <label htmlFor="avatar">Choose a profile picture:</label>
                <input type="file" id="avatar" onChange={uploadImage} placeholder="upload an image" />
                </div>
                <input className="upload" type="submit" />
           </StyledForm>
        </section>
    )
}
