"use client"

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

 

export const SignInButton = () => {
    return (
        <button
          onClick={async () => {
            await signIn();  // Fonction signIn correctement importée
          }}
        >
          Sign In
        </button>
      );
};
