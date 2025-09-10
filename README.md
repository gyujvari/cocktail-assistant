# Cocktail Assistant

This is a modern, responsive web application that allows users to search for cocktails and manage a shopping list. The app uses [TheCocktailDB API](https://www.thecocktaildb.com/api/v1/1/) as the data source.

## Features

- **Home page**:

  - Search input box to enter cocktail queries.
  - Cocktail list displayed in a card layout.
  - By default, shows results for the searched term.
  - If no results, a toaster notification appears ("No cocktails found!").
  - Add ingredients to the shopping list.
  - Remove ingredients from the shopping list.
  - Print only the shopping list (without the rest of the page).

- **Shopping List**:
  - Displayed on the right side of the screen on desktop.
  - Moves below the results on mobile (responsive layout).
  - Toast notifications appear in the bottom-right corner.
  - Print button prints only the shopping list content.

## Technologies Used

- Pion.js – React-like component system
- lighterhtml – Lightweight templating engine
- Vite – Build tool and dev server
- Vanilla JS and CSS for styling
- Responsive design for mobile and desktop

## API

- TheCocktailDB API
- Documentation: [https://www.thecocktaildb.com/api.php](https://www.thecocktaildb.com/api.php)
- API URL set in `.env` file as `VITE_API_URL`

## Development

- State management using Pion.js `useState` and `useRef`.
- Components: `App`, `SearchBar`, `ResultsList`, `ShoppingList`, `Toaster`.
- Inline CSS for component-specific styling.
- Responsive layout using flexbox and media queries.
- Proper error handling with toaster notifications.

## Environment Variables

- Create a `.env` file in the project root:

- VITE_COCKTAIL_API=https://www.thecocktaildb.com/api/json/v1/1/search.php?s=

- Make sure `.env` is added to `.gitignore`.

## Testing

- Manual testing via development server.
- No automated tests configured yet.

## Running the Project Locally

1. Install dependencies:

```bash
- npm install

- npm run dev

```
