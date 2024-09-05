
const Table = ({ columns, renderRow, data }) => {

    return (
      <table className="w-full mt-4">
        <thead>
          <tr className="text-left text-gray-500 text-xs">
            {columns.map((col) => (
              <th key={col.accessor} className={col.className}>{col.header}</th>
            ))}
          </tr>
            </thead>
            <tbody>
                {data.map((row)=>renderRow(row))}
            </tbody>
      </table>
    );
}
 
export default Table;