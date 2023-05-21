import { LoginForm } from "@/components/login-form";
import LoginPic from "../../assets/login-pic.svg";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex justify-around items-center w-full h-screen">
      <Image
        width="500"
        height="500"
        alt="Imagem de mulher com carrinho de compras"
        src={LoginPic}
      />
      <LoginForm />
    </div>
  );
}
