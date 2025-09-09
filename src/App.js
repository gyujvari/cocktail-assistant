import pion, { useState } from "@pionjs/pion";
import { html, render as lighterRender } from "lighterhtml";
import { SearchBar } from "./SearchBar.js";
import { ResultsList } from "./ResultsList.js";
import { ShoppingList } from "./ShoppingList.js";
import { Toaster } from "./Toaster.js";

const { component } = pion({
  render(what, where) {
    lighterRender(where, () => what);
  },
});

function App() {
  const [results, setResults] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [toaster, setToaster] = useState("");

  const searchCocktails = async (term) => {
    if (!term) return;
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`
      );
      const data = await res.json();
      setResults(data.drinks || []);
      setToaster(!data.drinks ? "No cocktails found!" : "");
    } catch {
      setToaster("Error fetching cocktails!");
    }
  };

  const addToShoppingList = (ingredient) => {
    if (!shoppingList.includes(ingredient)) {
      setShoppingList([...shoppingList, ingredient]);
      setToaster(`${ingredient} added to shopping list`);
    } else {
      setToaster(`${ingredient} already in shopping list`);
    }
  };

  const removeFromShoppingList = (ingredient) => {
    setShoppingList(shoppingList.filter((i) => i !== ingredient));
    setToaster(`${ingredient} removed`);
  };

  const printList = () => window.print();

  const containerStyle = `
    display: flex;
    flex-direction: row;
    gap: 40px;
    align-items: flex-start;
    margin-top: 20px;
  `;

  const leftStyle = `
    flex: 2;
    min-width: 0;
  `;

  const rightStyle = `
    flex: 1;
    min-width: 200px;
  `;

  const toasterStyle = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(0,0,0,0.7);
    color: white;
    padding: 10px 15px;
    border-radius: 8px;
    max-width: 300px;
    font-style: italic;
    z-index: 999;
  `;

  const responsiveStyle = `
    @media (max-width: 768px) {
      .container {
        flex-direction: column;
      }
      .left, .right {
        flex: unset;
        width: 100%;
      }
    }
  `;

  return html`
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <style>
        ${responsiveStyle}
      </style>
      ${SearchBar({ onSearch: searchCocktails })}
      <div class="container" style="${containerStyle}">
        <div class="left" style="${leftStyle}">
          ${ResultsList({ results, onAdd: addToShoppingList })}
        </div>
        <div class="right" style="${rightStyle}">
          ${ShoppingList({
            items: shoppingList,
            onRemove: removeFromShoppingList,
            onPrint: printList,
          })}
        </div>
      </div>
      ${Toaster({ message: toaster })}
    </div>
  `;
}

customElements.define("my-app", component(App));
