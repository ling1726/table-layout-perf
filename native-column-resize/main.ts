import { ColumnResize } from "./utils/ColumnResize";

const ROW_COUNT = 1000;
const tbody = document.querySelector("tbody")!;
const columns = [
    { columnId: "first" },
    { columnId: "second" },
    { columnId: "third" },
    { columnId: "fourth" },
];

for (let i = 0; i < ROW_COUNT; i++) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="first cell">First ${i} </td>
      <td class="second cell">Second ${i}</td>
      <td class="third cell">Third ${i}</td>
      <td class="fourth cell">Fourth ${i}</td>
    `;
    tbody.appendChild(tr);
}

const resizeManager = new ColumnResize(columns, () => {
    columns.forEach(({ columnId }) => {
        const th = document.querySelector(
            `th.${columnId}`
        )! as HTMLTableCellElement;
        th.style.width = `${resizeManager.getColumnWidth(columnId)}px`;
    });
});

columns.forEach(({ columnId }) => {
    const resizer = document.querySelector(
        `th.${columnId} > .resizer`
    )! as HTMLDivElement;
    resizer.addEventListener(
        "mousedown",
        resizeManager.getOnMouseDown(columnId)
    );
});

const table = document.querySelector("table")!;

resizeManager.init(table);
