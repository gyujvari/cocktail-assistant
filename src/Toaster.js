import { html } from "lighterhtml";

export function Toaster({ message }) {
  if (!message) return html``;

  const toastStyle = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(0,0,0,0.8);
    color: white;
    padding: 12px 18px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    font-family: Arial, sans-serif;
    font-size: 14px;
    z-index: 1000;
    max-width: 300px;
    word-wrap: break-word;
  `;

  return html`<p style=${toastStyle}>${message}</p>`;
}
