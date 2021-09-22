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

function createGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function createLine(candidate) {
    thId = document.createElement("thead")    
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
    let table = document.getElementById("tableid");
    candidates.forEach(element => {
        let line = createLine(element);
        table.appendChild(line);
    });
}

main();