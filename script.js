document.addEventListener("DOMContentLoaded", () => {
  const organs = Array.from(document.querySelectorAll(".organ"));
  const modal = document.querySelector(".modal");
  //console.log(organs);
  modal.addEventListener('click', () => modal.style.display = "none")
  organs.forEach((e) => {
    e.addEventListener("click", (event) => {
     
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      const header = document.createElement('h2');
      header.innerHTML = e.id;
      const copy = e.outerHTML;
      const copyHead = header.outerHTML;
      const content = copy + copyHead
      console.log(header);
      console.log(e.getBBox());
      svg.innerHTML = content;
      svg.classList.add('new');
      const copySVG = svg.outerHTML;
      modal.innerHTML = copySVG;
      //console.log(svg);
     
      console.log(modal);

      modal.style.display = "flex";
      const group = modal.querySelector(".organ");
      const newi = modal.querySelector(".new");

      const factor = (newi.clientHeight*.9)/group.getBBox().height;

      //console.log(factor);

      group.style.transform = `translate(${-group.getBBox().x*factor}px, ${-group.getBBox().y*factor}px) scale(${factor})`
      console.log(newi.getBBox().height / 100);
      console.log(newi.clientHeight)
    });
  });
});
