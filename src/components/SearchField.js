export function SearchField({ handleSearch, searchTerm, setSearchTerm }) {
  return (
    <div className="searchField searchField--wrapper">
      <form onSubmit={handleSearch}>
        {/* <fieldset> */}
        <label htmlFor="searchField" className="searchField__label">
          <input
            type="search"
            name="searchField"
            className="searchField__input"
            placeholder="&nbsp;"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <span className="searchField__label--text">Search for a show</span>
          <span className="searchField__bg"></span>
        </label>
        {/* </fieldset> */}
      </form>
    </div>
  );
}
