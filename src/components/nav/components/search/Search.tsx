import "./search.scss";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { ChangeEvent, KeyboardEvent } from "react";

const Search = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState<string>("");

  const handleSearch = () => {
    if (search.length <= 0) {
      return;
    }
    navigate(`/search/${search}`);
    setSearch("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearch(inputValue);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className=" container-search">
      <input
        id="search"
        name="search"
        className="search"
        placeholder="Buscar..."
        type="search"
        value={search}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch} className="search-icon">
        <MagnifyingGlassIcon
          className="pointer-events-none inset-y-0 left-0 h-full w-4 text-white"
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default Search;
