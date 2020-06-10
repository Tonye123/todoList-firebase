import React, { useState, useRef } from 'react';
import { auth,db,storage } from '../Firebase';

export default function UserProfile() {
    const [displayName, setDisplay] = useState('');
    const imageInput =  useRef(null);
    

    function get_uid() {
        return auth.currentUser.uid;
    }

    function get_userRef(uid) {
        return db.doc(`users/${uid}`)
    }

    const handleChange = (event) => {
        setDisplay(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let image = imageInput.current.value;

        if(displayName) {
            const uid = get_uid();
            const userRef = get_userRef(uid)
             userRef.update({ displayName })
        }

        if(image) {
            console.log(image)
            const storageRef  = storage.ref();
            const imageRef = storageRef.child(image);
            console.log(imageRef.name)
        }


    }
    return (
        <section>
           <form onSubmit={handleSubmit}>
               <input type="text"
               value={displayName}
               name = "displayName"
               onChange={handleChange}
               placeholder="Display Name"
                />
                <input type="file" ref={imageInput} />
                <input type="submit" />
           </form>
        </section>
    )
}
