import Link from "next/link";
import { BsPencil } from "react-icons/bs";
import { ProductTableColumns } from "../productTableColumns";

interface Product {
  nome: string;
  idade: number;
  genero: string;
  pais: string;
  cidade: string;
}

interface IProductTable {
  columns: string[];
  rows: Product[];
  path: string;
}

export function ProductTable({ columns, rows, path }: IProductTable) {
  return (
    <div className="relative overflow-x-auto w-4/5 m-auto shadow-md sm:rounded">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <ProductTableColumns columns={columns} />
        <tbody>
          {rows.map((item: Product, index: number) => (
            <tr
              key={index}
              className="border-y-2 dark:bg-gray-800 dark:border-gray-700"
            >
              <>
                <th className="px-6 py-4 font-medium text-center whitespace-nowrap">
                  {item.nome}
                </th>
                <th className="px-6 py-4 font-medium text-center whitespace-nowrap">
                  {item.idade}
                </th>
                <th className="px-6 py-4 font-medium text-center whitespace-nowrap">
                  {item.genero}
                </th>
                <th className="px-6 py-4 font-medium text-center whitespace-nowrap">
                  {item.pais}
                </th>
                <th className="px-6 py-4 font-medium text-center whitespace-nowrap">
                  {item.cidade}
                </th>
                <td className="px-6 py-4 flex justify-center">
                  <Link href={`${path}`}>
                    <button
                      title="Editar produto"
                      type="button"
                      className="rounded-md p-2 bg-blue-dark"
                    >
                      <BsPencil color="white" size={18} />
                    </button>
                  </Link>
                </td>
              </>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
