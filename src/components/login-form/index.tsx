"use client";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const inputStyle = "w-full bg-white shadow-md h-10 border-2 border-white rounded-md outline-none px-2 text-base transition border-opacity-0 appearance-none"
  const router = useRouter();
  return (
    <div className="flex justify-center items-center flex-col gap-4 h-full">
      <h1 className="text-white text-lg">eCommerce - Entrar</h1>
      <input
        className={inputStyle}
        type="text"
        name="email"
        id="email"  
      />
      <input className={inputStyle} type="password" name="senha" id="senha" />
      <button type="button" onClick={() => router.push("/")}>
        entrar
      </button>
    </div>
  );
}
