import { text } from './text.js'

export class Selector {
  constructor() {}
}

Selector.prototype.modal = document.querySelector(".modal");
Selector.prototype.backdrop = document.querySelector(".backdrop");
Selector.prototype.organs = Array.from(document.querySelectorAll(".organ"));

export class Organs {
  constructor(selector) {
    this.organs = selector.organs;
  }
}

export class Modal {
  constructor(selector) {
    this.modal = selector.modal;
    this.backdrop = selector.backdrop;
  }

  populate(organ) {
    //const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const svg = `<svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">${organ.outerHTML}</svg>`;
    const infos = `<div class="infos"><h2>${organ.id}</h2><p>${text[organ.id]}</p></div>`;
    const modalContent = svg + infos;
    this.modal.innerHTML = modalContent;
    this.backdrop.style.display = "block";
    this.modal.style.display = "flex";
  }

  static hide() {
    this.backdrop.style.display = "none";
    this.modal.style.display = "none";
  }
}
