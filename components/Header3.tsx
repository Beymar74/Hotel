import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import "./Header3.css";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
const Header3 = () => {
  
  return (
    <header>
      <div className="cont2">
        <Image
          className="pairumani1"
          src="/logoP.png"
          width={100}
          height={100}
          alt={"Logo Hotel Pairumani"}
        />
        <h1 className="h1-2">Hotel Pairumani</h1>
        <Navbar />
        <SignedOut>
        <SignInButton>
          <button className="sign-in-button">Acceso</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
      </div>
    </header>
  );
};

export default Header3;
