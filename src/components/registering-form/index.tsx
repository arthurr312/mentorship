"use client";
import { inputStyle, passWordIconStyle } from "@/utils/styles";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Button } from "../button";
import { useRouter } from "next/navigation";

export function RegisteringForm() {
  const router = useRouter();
  const [visiblePassword, setVisiblePassword] = useState(false);
  return (
    <div className="flex justify-center items-center flex-col gap-4 h-full">
      <h1 className="text-xl text-center p-4">
        eCommerce - Cadastre-se na plataforma
      </h1>
      <div className="flex flex-col w-4/5 gap-2">
      <div className="flex flex-col w-full">
          <label htmlFor="nome">Nome completo</label>
          <input className={inputStyle} type="text" name="nome" id="nome" />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="email">E-mail</label>
          <input className={inputStyle} type="text" name="email" id="email" />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="ocupacao">Ocupação</label>
          <select defaultValue="" className={inputStyle}>
            <option value="" disabled>
              Selecionar opção
            </option>
            <option value="vendedor">Vendedor</option>
            <option value="consumidor">Consumidor</option>
          </select>
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
        text="Cadastrar"
        onClick={() => router.push("/")}
        type="button"
      />
    </div>
  );
}
