export default function SearchBar({ searchRef, cariUser }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Cari username..."
        ref={searchRef}
      />

      <button onClick={cariUser}>Search</button>
    </div>
  );
}