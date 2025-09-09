import { html } from "lighterhtml";

export function ShoppingList({ items, onRemove, onPrint }) {
  const containerStyle = {
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
    padding: "15px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
  };

  const buttonStyle = {
    marginTop: "10px",
    padding: "6px 10px",
    border: "none",
    borderRadius: "6px",
    background: "#6366f1",
    color: "white",
    cursor: "pointer",
  };

  const removeBtnStyle = {
    background: "#ef4444",
    border: "none",
    color: "white",
    borderRadius: "4px",
    cursor: "pointer",
    padding: "2px 6px",
  };

  return html`
    <div style=${containerStyle}>
      <h3>Shopping List</h3>
      <ul>
        ${items.map(
          (item) => html`
            <li
              style="display:flex; justify-content:space-between; padding:4px 0;"
            >
              ${item}
              <button style=${removeBtnStyle} onclick=${() => onRemove(item)}>
                x
              </button>
            </li>
          `
        )}
      </ul>
      <button style=${buttonStyle} onclick=${onPrint}>Print</button>
    </div>
  `;
}
