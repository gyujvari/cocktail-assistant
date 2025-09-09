import { html } from "lighterhtml";

export function ResultsList({ results, onAdd }) {
  const cardStyle = {
    border: "1px solid #e5e7eb",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "12px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
    width: "100%",
    marginTop: "10px",
  };

  const imgStyle = {
    borderRadius: "8px",
    width: "30%",
  };

  const buttonStyle = {
    marginTop: "8px",
    padding: "6px 10px",
    border: "none",
    borderRadius: "6px",
    background: "#10b981",
    color: "white",
    cursor: "pointer",
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  return html`
    <div style=${containerStyle}>
      ${results.map(
        (drink) => html`
          <div style=${cardStyle}>
            <img
              src=${drink.strDrinkThumb}
              alt=${drink.strDrink}
              style=${imgStyle}
            />
            <h3>${drink.strDrink}</h3>
            <p>${drink.strInstructions}</p>
            <button style=${buttonStyle} onclick=${() => onAdd(drink.strDrink)}>
              + Add
            </button>
          </div>
        `
      )}
    </div>
  `;
}
