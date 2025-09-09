import { html } from "lighterhtml";

export function ResultsList({ results, onAdd }) {
  const containerStyle = `
    display: flex;
    flex-direction: column;
    gap: 20px;
  `;

  const cardStyle = `
    display: flex;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
  `;

  const imgStyle = `
    border-radius: 8px;
    width: 30%;
    object-fit: cover;
    margin-right: 15px;
  `;

  const contentStyle = `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  `;

  const buttonStyle = `
    align-self: flex-end;
    margin-top: 10px;
    padding: 6px 10px;
    border: none;
    border-radius: 6px;
    background: #10b981;
    color: white;
    cursor: pointer;
  `;

  return html`
    <div style="${containerStyle}">
      ${results.map(
        (drink) => html`
          <div style="${cardStyle}">
            <img
              src="${drink.strDrinkThumb}"
              alt="${drink.strDrink}"
              style="${imgStyle}"
            />
            <div style="${contentStyle}">
              <h3>${drink.strDrink}</h3>
              <p>${drink.strInstructions}</p>
              <button
                style="${buttonStyle}"
                onclick=${() => onAdd(drink.strDrink)}
              >
                + Add
              </button>
            </div>
          </div>
        `
      )}
    </div>
  `;
}
