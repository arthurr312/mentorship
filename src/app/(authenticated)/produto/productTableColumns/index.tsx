interface IProductTableColumns {
  columns: string[];
}

export function ProductTableColumns({ columns }: IProductTableColumns) {
  return (
    <thead className="text-base text-gray-100 uppercase dark:bg-gray-900">
      <tr>
        {columns.map((item, index) => (
          <th key={index} scope="col" className="px-6 py-3 text-center">
            {item}
          </th>
        ))}

        <th scope="col" className="px-6 py-3 text-center">
          Action
        </th>
      </tr>
    </thead>
  );
}
