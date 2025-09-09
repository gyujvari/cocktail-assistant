import { useState } from "@pionjs/pion";
import { html } from "lighterhtml";

export function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const style = {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  };

  const inputStyle = {
    flex: 1,
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "8px 14px",
    border: "none",
    borderRadius: "6px",
    background: "#0070f3",
    color: "white",
    cursor: "pointer",
  };

  return html`
    <div style=${style}>
      <input
        type="text"
        .value=${query}
        oninput=${(e) => setQuery(e.target.value)}
        placeholder="Search cocktail..."
        style=${inputStyle}
      />
      <button style=${buttonStyle} onclick=${() => onSearch(query)}>
        Search
      </button>
    </div>
  `;
}
