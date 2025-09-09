import { html } from "lighterhtml";

export function Toaster({ message }) {
  if (!message) return html``;

  return html`
    <p style="margin:10px 0; color:#555; font-style:italic;">${message}</p>
  `;
}
