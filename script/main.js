import { Selector, Modal, Organs } from "./classes.js";

document.addEventListener('DOMContentLoaded', anatomy)

function anatomy() {
  const selector = new Selector();
  const modal = new Modal(selector);
  const organs = new Organs(selector);
  // ADD CLICK
  organs.makeClickable(modal);
  modal.backdrop.addEventListener('click', () => modal.hide())
}
