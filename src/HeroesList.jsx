import React, {useState} from 'react'
import { useFirebase } from './FirebaseProvider';
import { collection, orderBy, query, getDocs } from 'firebase/firestore';


const HeroesList = () => {
    const fbContext = useFirebase();
    const db = fbContext.db;
    const [heroes, setHeroes] = useState([]); 
    const getHeroesData = async() => {
        try{
          let collectionRef = collection(db, "heroes");
          let queryRef = query(collectionRef, orderBy("name"));
          let querySnap = await getDocs(queryRef);
          if (querySnap.empty) {
             console.log("No docs found");
          } else {
             let heroesData = querySnap.docs.map(doc => ({...doc.data(), DOC_ID: doc.id}))
             setHeroes(heroesData);
          }
} catch (ex) {
           console.log("FIRESTORE FAILURE!", ex.message);
        }}
        return ( <div>
            <button onClick={() => getHeroesData()}>GET DATA</button><br/>
            {heroes.map((hero) => {
               return (<ul>
                   <li>name: {hero.name}</li>
                   <li>vehicle: {hero.vehicle}</li>
                   <li>docId: {hero.DOC_ID}</li>
                   <hr/>
                </ul>)})}
          </div>);
  
}


export default HeroesList