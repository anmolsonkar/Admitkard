import { useState, useCallback, useMemo } from "react";
import { University } from "./Universities";

import Table from "./Table";
const keys = ["country", "university_name", "master_agents"];

export default function Main() {
  const search = useCallback((data, searchText) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(searchText))
    );
  }, []);

  const [searchText, setSearchText] = useState("");

  const handleSearch = useCallback((e) => {
    setSearchText(e.target.value);
  }, []);

  const filteredData = useMemo(
    () => search(University, searchText),
    [searchText, University]
  );

  return (
    <div className="flex-grow text-black mt-[135px] mb-[40px] lg:mb-[90px] md:mb-[90px]">
      <div className="flex-grow text-black">
        <div className="md:flex md:justify-center">
          <form className="relative rounded-md bg-white focus-within:shadow-outline-blue focus-within:z-10 w-full md:w-3/4 lg:w-1/2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01
-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                />
              </svg>
            </div>
            <input
              className="relative w-full p-2 pl-10 rounded-md text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:border-blue-300"
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={handleSearch}
            />
            <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
              </svg>
            </button>
          </form>
        </div>
        <div className="flex justify-center">
          <div className="mx-auto">{<Table data={filteredData} />}</div>
        </div>
      </div>
    </div>
  );
}
