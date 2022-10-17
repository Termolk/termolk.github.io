// В функцию передается матрица и текст, который будет
// отображаться в блоке с решениями перед выводом ответа
// матрица передается для того, чтобы через генератор html таблицы сделать таблицу с матрицей
// сначала выводится исходная матрица а после нужная

function createHtmlDivSolutionMatrix(which, matrBefore, matrAfter, text) {
    let hr = document.createElement("hr");

    let textABefore = document.createElement("p");
    textABefore.innerText = `Изначальная матрица A = `;

    let textAAfter = document.createElement("p");
    textAAfter.innerText = `${text} A = `;

    let tableTextAndMatrix = document.createElement("table");
    let trTextAndMatrix = document.createElement("tr");
    let td1TextAndMatrix = document.createElement("td");
    let td2TextAndMatrix = document.createElement("td");
    let td3TextAndMatrix = document.createElement("td");
    let td4TextAndMatrix = document.createElement("td");

    let tableBefore = createHtmlTableMatrix(which, matrBefore);
    let tableAfter = createHtmlTableMatrix(which, matrAfter);

    tableTextAndMatrix.appendChild(trTextAndMatrix);

    trTextAndMatrix.appendChild(td1TextAndMatrix);
    trTextAndMatrix.appendChild(td2TextAndMatrix);
    trTextAndMatrix.appendChild(td3TextAndMatrix);
    trTextAndMatrix.appendChild(td4TextAndMatrix);

    let parentDiv = document.getElementById("solutions");

    let div = document.createElement("div");
    div.setAttribute("class", "divSolutions");

    div.appendChild(tableTextAndMatrix);

    td1TextAndMatrix.appendChild(textABefore);
    td2TextAndMatrix.appendChild(tableBefore);

    td3TextAndMatrix.appendChild(textAAfter);
    td4TextAndMatrix.appendChild(tableAfter);

    div.prepend(hr);
    parentDiv.prepend(div);
}