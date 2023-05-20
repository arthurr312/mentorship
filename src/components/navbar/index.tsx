import Link from "next/link";

export function NavBar() {
  const textStyle =
    "text-white text-lg hover:text-[#d9d9d9] hover:duration-300";
  return (
    <div className="flex justify-between items-center bg-navbar-background p-2">
      <h1 className="text-white text-lg">E-commerce</h1>
      <div className="flex gap-4 p-2">
        <Link href="/produto">
          <h1 className={textStyle}>Listar</h1>
        </Link>
        <Link href="/produto/cadastrar">
          <h1 className={textStyle}>Cadastrar</h1>
        </Link>
        <Link href="/login">
          <h1 className={textStyle}>Sair</h1>
        </Link>
      </div>
    </div>
  );
}
