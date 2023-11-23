
import "./search.scss"
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const Search = () => {
  return (
    <div className=" container-search">
      <input
        id="search"
        name="search"
        className="search"
        placeholder="Buscar..."
        type="search"
      />
      <button className="search-icon">
        <MagnifyingGlassIcon className="icon" />
      </button>
    </div>
  )
}

export default Search