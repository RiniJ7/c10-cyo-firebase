import React from 'react'
// import { useFirebase } from './FirebaseProvider'
import { useAuth } from './AuthProvider'
import Login from './Login'
import HeroesList from './HeroesList';
import HeroForm from './HeroForm';

const RestOfApp = () => {
  const auth =useAuth();
  const user =auth.user;

  // const fb = useFirebase();
  // const app= fb.app;
  return (
    <div className='App'>
{user ? 'you are logged in!' : 'not logged in 😔'
}
<Login />
<HeroesList/>
<HeroForm/>
</div>
  )
}

export default RestOfApp