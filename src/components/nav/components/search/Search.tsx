import "./search.scss";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { ChangeEvent } from "react";

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
      />
      <button onClick={handleSearch} className="search-icon">
        <MagnifyingGlassIcon className="icon" />
      </button>
    </div>
  );
};

export default Search;
