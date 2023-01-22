import React from "react";

const Table = ({ data }) => {
  return (
    <table className="table-auto rounded-lg overflow-hidden shadow bg-white mt-10 text-[11.5px] lg:text-[15px]">
      <thead className="">
        <tr className="bg-white border">
          <th className="px-4 py-2">Country</th>
          <th className="px-4 py-2">Institution Name</th>
          <th className="px-4 py-2">Master Agents</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="border px-4 py-2">
              <div className="flex items-center pr-6">
                <img
                  src={`/flags/${
                    item.country === "United States"
                      ? "1.png"
                      : item.country === "Canada"
                      ? "2.png"
                      : item.country === "Germany"
                      ? "3.png"
                      : item.country === "New Zealand"
                      ? "4.png"
                      : item.country === "Ireland"
                      ? "5.png"
                      : item.country === "Australia"
                      ? "6.png"
                      : item.country === "United Kingdom"
                      ? "7.png"
                      : item.country === "France"
                      ? "8.png"
                      : item.country === "Italy"
                      ? "9.png"
                      : item.country === "Spain"
                      ? "10.png"
                      : "default.png"
                  }`}
                  alt={item.country}
                  className="w-8 h-8 mr-4"
                />
                <span className="text-gray-800">{item.country}</span>
              </div>
            </td>
            <td className="border px-4 py-2">{item.university_name}</td>
            <td className="border px-4 py-2">{item.master_agents}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
