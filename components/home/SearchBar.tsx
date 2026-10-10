const asset = "/assets/tuwatch/";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <img src={asset + "9ee69.svg"} alt="" />
      <input type="search" aria-label="Search campus" placeholder="Search" />
      <span className="search-divider" />
      <button type="button" aria-label="Search filters"><img src={asset + "b0a62.svg"} alt="" /></button>
    </div>
  );
}
