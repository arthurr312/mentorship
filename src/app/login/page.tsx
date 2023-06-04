"use client";
import { LoginForm } from "@/components/login-form";
import LoginPic from "../../assets/login-pic.svg";
import Image from "next/image";
import { useState } from "react";
import { RegisteringForm } from "@/components/registering-form";

export default function LoginPage() {
  const [selectedButton, setSelectedButton] = useState<string>("login");
  const selectedStyle =
    "bg-blue-primary text-white w-full rounded-md p-2 cursor-pointer";
  const unselectedStyle =
    "border border-blue-primary bg-transparent text-black w-full rounded-md p-2 cursor-pointer";
  return (
    <div className="flex justify-between items-center w-4/5 m-auto h-screen">
      <div>
        <Image
          width="500"
          height="500"
          alt="Imagem de mulher com carrinho de compras"
          src={LoginPic}
        />
      </div>
      <div>
        <LoginForm />
      </div>
    </div>
  );
}
