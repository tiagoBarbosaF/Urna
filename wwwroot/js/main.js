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

GetCandidates();
GetVotes();

// let table = document.createElement("table");
// let thead = document.createElement("thead");
// let tbody = document.createElement("tbody");
//
// table.appendChild(thead);
// table.appendChild(tbody);
//
// document.getElementById("theadId").appendChild(table);
//
// // Creating and adding data to first row
// let row_1 = document.createElement("tr");
// let heading_1 = document.createElement("th");
// heading_1.innerHTML = "Id";
// let heading_2 = document.createElement("th");
// heading_2.innerHTML = "Full Name";
// let heading_3 = document.createElement("th");
// heading_3.innerHTML = "Vice Name";
// let heading_4 = document.createElement("th");
// heading_4.innerHTML = "Data Register";
// let heading_5 = document.createElement("th");
// heading_5.innerHTML = "Label";
//
// row_1.appendChild(heading_1);
// row_1.appendChild(heading_2);
// row_1.appendChild(heading_3);
// row_1.appendChild(heading_4);
// row_1.appendChild(heading_5);
// thead.appendChild(row_1);
//
// let rows = document.createElement("tr");
// rows.appendChild(rows);
// tbody.appendChild(rows);

function createGetCandidates(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function GetCandidates() {
    let dataCandidates = createGetCandidates("http://localhost:5100/v1/candidates");
    let candidates = JSON.parse(dataCandidates);
    let tbodyCandidates = document.getElementById("tbodyCandidates");
    candidates.forEach(element => {
        let line = createLineCandidates(element);
        tbodyCandidates.appendChild(line);
    });
}

function createLineCandidates(candidates) {
    line = document.createElement("tr");
    tdFullName = document.createElement("td");
    tdViceName = document.createElement("td");
    tdLabel = document.createElement("td");

    tdFullName.innerHTML = candidates.fullName
    tdViceName.innerHTML = candidates.viceName
    tdLabel.innerHTML = candidates.label

    line.appendChild(tdFullName)
    line.appendChild(tdViceName)
    line.appendChild(tdLabel)

    return line;
}

function createGetVotes(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function GetVotes() {
    let dataVotes = createGetVotes("http://localhost:5100/v1/votes");
    let votes = JSON.parse(dataVotes);
    let tbodyVotes = document.getElementById("tbodyVotes");
    votes.forEach(element => {
        let line = createLineVotes(element);
        tbodyVotes.appendChild(line);
    });
}

function createLineVotes(votes) {
    line = document.createElement("tr");
    tdFullName = document.createElement("td");
    tdLabel = document.createElement("td");
    tdVoteDate = document.createElement("td");
    tdTotalVotes = document.createElement("td")

    let totalVotes;
    for (let i = 0; i < votes.length; i++) {
        votes.forEach(vote => {
            totalVotes += vote
        })
    }
    console.log(totalVotes)
    
    tdFullName.innerHTML = votes.candidate.fullName
    tdLabel.innerHTML = votes.candidate.label
    tdTotalVotes.innerHTML = totalVotes

    line.appendChild(tdFullName)
    line.appendChild(tdLabel)
    line.appendChild(tdTotalVotes)

    return line;
}

