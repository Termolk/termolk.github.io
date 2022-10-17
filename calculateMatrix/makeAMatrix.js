

let rowA = document.getElementById("rowA");
let columnA = document.getElementById("columnA");

let rowB = document.getElementById("rowB");
let columnB = document.getElementById("columnB");

const matrixA = math.matrix();
const matrixB = math.matrix();




function generateTableMatrix(row, column, inputIDNumber) {
    let mTable = document.getElementById(`${inputIDNumber}MTable`)
    mTable.innerHTML = "";

    for (let i = 0; i < row.value; i++) {

        let trElem = document.createElement("tr");
        trElem.setAttribute("id", `tr${inputIDNumber}${i+1}`);
        mTable.appendChild(trElem);
        for (let j = 0; j < column.value; j++) {

            let input = document.createElement("input");
            input.setAttribute("id", `input${inputIDNumber}${i+1}${j+1}`);

            let tdElem = document.createElement("td");
            tdElem.setAttribute("id", `td${inputIDNumber}${i+1}${j+1}`);

            trElem.appendChild(tdElem);
            tdElem.appendChild(input);
        }

    }
}



function createMathMatrix(which, matr, row, column) {
    matr.resize([Number(row.value), Number(column.value)]);
    for (let i = 0; i < row.value; i++) {
        for (let j = 0; j < column.value; j++) {
            let num = Number(document.getElementById(`input${which}${i+1}${j+1}`).value);
            matr.set([i, j], num);
        }
    }
}

function clearMatrix(which) {
    let mTable = document.getElementById(`${which}MTable`)
    mTable.innerHTML = "";

    if (which == "A") {
        generateTableMatrix(rowA, columnA, "A");
    }
    if (which == "B") {
        generateTableMatrix(rowB, columnB, "B");
    }

}


window.onload = function () {
    generateTableMatrix(rowA, columnA, "A");
    generateTableMatrix(rowB, columnB, "B");

}


