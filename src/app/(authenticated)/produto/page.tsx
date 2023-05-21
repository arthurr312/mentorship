import { ProductTable } from "./productTable";

export default function ProductListing() {
  const columnsName = ["Nome", "Idade", "Gênero", "País", "Cidade"];
  const rows = [
    {
      nome: "Arthur",
      idade: 20,
      genero: "M",
      pais: "Brasil",
      cidade: "Santa Cruz",
    },
    {
      nome: "Arthuro",
      idade: 20,
      genero: "M",
      pais: "Brasil",
      cidade: "Santa Cruz",
    },
  ];
  return <ProductTable columns={columnsName} path="" rows={rows} />;
}
