document.addEventListener("DOMContentLoaded", () => {
  const organs = Array.from(document.querySelectorAll(".organ"));
  console.log(organs);
  organs.forEach((e) => {
    e.addEventListener("click", (event) => {
      const modal = document.querySelector(".modal");
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      const copy = e.outerHTML;
      console.log(copy);
      console.log(e);
      svg.width = "100%";
      svg.height = "100%";
      svg.innerHTML = copy;
      svg.classList.add('new');
      console.log(svg)
      modal.appendChild(svg);
      modal.style.display = "block";
      console.log(svg);
      console.log(modal);
    });
  });
});
