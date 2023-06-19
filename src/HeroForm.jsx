import React, {useState} from 'react'
import { useFirebase } from './FirebaseProvider';
import { addDoc, collection} from "firebase/firestore"

const HeroForm = () => {

const fbContext = useFirebase();
const db = fbContext.db
const [name, setName] = useState('');
const [vehicle, setVehicle] = useState('');
const addHero = async () => {
                 try {
                   let collectionRef = collection(db, "heroes");
                   await addDoc(collectionRef, {name, vehicle});
                   setName('');
                   setVehicle('');
                 } catch (ex) {
                   console.log("FIRESTORE ADD FAILURE!", ex.message);
}};
return (
                   <div>
                     <input name="name" value={name}
                          onChange={e =>setName(e.target.value)}/><br/>
                     <input name="vehicle" value={vehicle}
                          onChange={e =>setVehicle(e.target.value)} /><br/>
                     <button onClick={() => addHero(name, vehicle)}>ADD HERO</button>
</div>);
  
}

export default HeroForm