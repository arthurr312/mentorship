"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { BsGithub } from "react-icons/bs";
export function LoginForm() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  async function loginWithGitHub() {
    setIsLoading(true);
    try {
      await signIn("github");
    } catch (error) {
      // display error message to user
      console.error("Something went wrong with your login.");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="flex justify-center items-center flex-col gap-4 h-full">
      <h1 className="text-xl text-center p-4">
        eCommerce - Faça login para continuar
      </h1>
      <div className="flex flex-col w-4/5 gap-2">
        <button
          className="bg-sign-in-button-default text-white rounded-md p-2 flex gap-2 justify-center hover:bg-sign-in-button-dark duration-300"
          disabled={isLoading}
          onClick={loginWithGitHub}
        >
          <BsGithub color="white" size={25} />
          Entrar com Github
        </button>
      </div>
    </div>
  );
}
