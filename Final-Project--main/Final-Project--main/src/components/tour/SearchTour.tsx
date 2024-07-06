"use client";
import { Dispatch, useState } from "react";

function TourSearch({
  searchTours,
  setTours,
  toursValues,
}: {
  searchTours: (query: string) => Promise<any>;
  setTours: Dispatch<any>;
  toursValues: any;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      try {
        const results = await searchTours(searchQuery);
      } catch (error) {
        console.error("Error searching tours:", error);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim() === "") {
      setTours(toursValues);
    }
  };

  return (
    <form className="w-96 mx-auto" onSubmit={handleSearch}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none"></div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-slate-50 "
          placeholder="Search Tours..."
          required
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 text-sm px-4 py-2"
        >
          <svg
            className="w-4 h-4 text-orange-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default TourSearch;
