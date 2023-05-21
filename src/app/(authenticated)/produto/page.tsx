import { ProductTable } from "./productTable";

export default function ProductListing() {
  const columnsName = ["Nome", "Preço", "Categoria", "Quantidade"];
  const rows = [
    {
      name: "Camisa",
      price: 20,
      category: "Roupas",
      quantity: 30,
    },
    {
      name: "Notebook",
      price: 5000,
      category: "Eletrônicos",
      quantity: 30,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-center text-2xl">Listagem de produtos</h1>
      <ProductTable columns={columnsName} path="" rows={rows} />
    </div>
  );
}
