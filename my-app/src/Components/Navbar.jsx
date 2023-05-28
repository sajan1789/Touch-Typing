import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import '../Styles/Navbar.css'
const Navbar = () => {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();  
  return (
    

   
    <div>
         <div className='main'>
         {isAuthenticated&& <img  src={user.picture} alt="dkmd" /> }
         {isAuthenticated&& <h2 class>{user.name}</h2> }
         
            {isAuthenticated ?  <h2 onClick={() => logout({ returnTo: window.location.origin })}>Logout</h2> :
            <h2 onClick={() => loginWithRedirect()}>Login</h2>}
           
        </div>
    </div>
  )
}

export default Navbar