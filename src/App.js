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

  const containerStyle = {
    display: "flex",
    gap: "20px",
    alignItems: "flex-start",
    marginTop: "20px",
  };

  const leftStyle = {
    flex: 2,
  };

  const rightStyle = {
    flex: 1,
  };

  return html`
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      ${SearchBar({ onSearch: searchCocktails })}
      <div style=${containerStyle}>
        <div style=${leftStyle}>
          ${ResultsList({ results, onAdd: addToShoppingList })}
        </div>
        <div style=${rightStyle}>
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

customElements.define("my-app", component(App), { shadow: false });
