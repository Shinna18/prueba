import React from 'react';

const DataTable = ({ data }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          {Object.keys(data[0]).map((key) => (
            <th key={key} className="py-2 text-gray-600 font-medium">{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} className="border-t">
            {Object.values(row).map((value, idx) => (
              <td key={idx} className="py-2 text-center">{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
