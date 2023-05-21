"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../button";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { inputStyle, passWordIconStyle } from "@/utils/styles";

export function LoginForm() {
  const router = useRouter();
  const [visiblePassword, setVisiblePassword] = useState(false);
  return (
    <div className="flex justify-center items-center flex-col gap-4 h-full">
      <h1 className="text-xl text-center p-4">
        eCommerce - Faça login para continuar
      </h1>
      <div className="flex flex-col w-4/5 gap-2">
        <div className="flex flex-col w-full">
          <label htmlFor="email">E-mail</label>
          <input className={inputStyle} type="text" name="email" id="email" />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="senha">Senha</label>
          <div className="flex relative">
            <input
              className={inputStyle}
              type={visiblePassword ? "text" : "password"}
              name="senha"
              id="senha"
            />
            {visiblePassword ? (
              <AiOutlineEye
                className={passWordIconStyle}
                size={25}
                color="grey"
                onClick={() => setVisiblePassword((prevState) => !prevState)}
              />
            ) : (
              <AiOutlineEyeInvisible
                className={passWordIconStyle}
                size={25}
                color="grey"
                onClick={() => setVisiblePassword((prevState) => !prevState)}
              />
            )}
          </div>
        </div>
      </div>
      <Button
        disabled={false}
        text="Entrar"
        onClick={() => router.push("/")}
        type="button"
      />
    </div>
  );
}
