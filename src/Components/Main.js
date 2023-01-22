import { useState, useCallback, useEffect } from "react";
import Typed from "react-typed";

import { University } from "./Universities";
import Table from "./Table";

const keys = ["country", "university_name", "master_agents"];

export default function Main() {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(
      University.filter((item) =>
        keys.some((key) =>
          item[key].toLowerCase().includes(searchText.toLowerCase())
        )
      )
    );
  }, [searchText]);

  const handleSearch = useCallback((e) => {
    setSearchText(e.target.value);
  }, []);

  return (
    <div className="flex-grow text-black mt-[135px] mb-[40px] lg:mb-[90px] md:mb-[90px]">
      <div className="flex-grow text-black">
        <div className="md:flex md:justify-center lg:p-0 p-3">
          <form className="relative rounded-md bg-white focus-within:shadow-outline-blue focus-within:z-10 w-full md:w-3/4 lg:w-1/2">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svgTools
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01
-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                />
              </svgTools>
            </div>

            <Typed
              strings={["Find out the partnered universities of Admitkard"]}
              typeSpeed={15}
              backSpeed={15}
              attr="placeholder"
              loop
            >
             <input
                className="relative  text-[12px] lg:text-[15px] w-full p-2 lg:pl-8 rounded-md text-gray-900 placeholder-gray-500 border shadow border-gray-300 focus:outline-none focus:border-blue-300"
                type="text"
                value={searchText}
                onChange={(e) => {
                    let value = e.target.value.replace(/[^a-zA-Z ]/g, "");
                    setSearchText(value);
                    handleSearch(value);
                  }}
              />

            </Typed>
            <button
              className="absolute inset-y-0 right-0 lg:pr-4 pr-1 flex items-center text-gray-500 hover:text-gray-700"
              onClick={() => setSearchText("")}
            >
              <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
          </form>
        </div>
        <div className="flex justify-center">
          <div className="mx-auto lg:p-0 p-3 lg:mt-0 mt-[-16px]">
            {<Table data={filteredData} />}
          </div>
        </div>
      </div>
    </div>
  );
}
