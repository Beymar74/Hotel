import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./Head.css";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Head = () => {
  return (
    <section className="cabeza">
      <div className="orden">
        <div className="izq">
          <Link href={"/menuini"} passHref>
            <Image
              className="atras"
              src="/Atras.png"
              width={100}
              height={100}
              alt={"Icono Atrás"}
            />
          </Link>
        </div>
      </div>
      <SignedOut>
        <SignInButton>
          <button className="sign-in-button">Acceso</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </section>
  );
};

export default Head;
