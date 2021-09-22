// (function () {
//     $(document).ready(function ($) {
//         $.get('http://localhost:5100/v1/candidates', function (candidatesData) {
//             let table = document.getElementById("tableid");
//             let candidates = JSON.parse(candidatesData);
//             candidates.forEach(element => {
//                 let line = createLine(element);
//                 table.appendChild(line);
//             })
//             console.log(candidatesData);
//         });
//     });
// })();

let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById("theadId").appendChild(table);

// Creating and adding data to first row
let row_1 = document.createElement("tr");
let heading_1 = document.createElement("th");
heading_1.innerHTML = "Id";
let heading_2 = document.createElement("th");
heading_2.innerHTML = "Full Name";
let heading_3 = document.createElement("th");
heading_3.innerHTML = "Vice Name";
let heading_4 = document.createElement("th");
heading_4.innerHTML = "Data Register";
let heading_5 = document.createElement("th");
heading_5.innerHTML = "Label";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
thead.appendChild(row_1);

let rows = document.createElement("tr");
rows.appendChild(rows);
tbody.appendChild(rows);

function createGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function createLine(candidate) {
    line = document.createElement("tr");
    tdId = document.createElement("td");
    tdFullName = document.createElement("td");
    tdViceName = document.createElement("td");
    tdRegisterDate = document.createElement("td");
    tdLabel = document.createElement("td");
    
    thId = "Id"
    tdId.innerHTML = candidate.id
    tdFullName.innerHTML = candidate.fullName
    tdViceName.innerHTML = candidate.viceName
    tdRegisterDate.innerHTML = candidate.registerDate
    tdLabel.innerHTML = candidate.label

    line.appendChild(tdId);
    line.appendChild(tdFullName)
    line.appendChild(tdViceName)
    line.appendChild(tdRegisterDate)
    line.appendChild(tdLabel)

    return line;
}


function main() {
    let dataCandidates = createGet("http://localhost:5100/v1/candidates");
    let candidates = JSON.parse(dataCandidates);
    let tbody = document.getElementById("tableid");
    candidates.forEach(element => {
        let line = createLine(element);
        tbody.appendChild(line);
    });
}

main();