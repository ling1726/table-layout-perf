const ROW_COUNT = 1000;
const tbody = document.querySelector("tbody");

if (tbody) {
    for (let i = 0; i < ROW_COUNT; i++) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
      <td class="first cell">First ${i}</td>
      <td class="second cell">Second ${i}</td>
      <td class="third cell">Third ${i}</td>
      <td class="fourth cell">Fourth ${i}</td>
    `;
        tbody.appendChild(tr);
    }
}
