import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import "./Barpro.css"
const Barpro = () => {
    return (
      <div className="barpro-container">
        <SignedOut>
          <SignInButton>
            <button className="login-button">Acceso</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    );
  };
  
  export default Barpro;