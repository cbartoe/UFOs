// import the data from data.js
const tableData = data;

// reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // first, clear out existing data
    tbody.html(" ");

    //next loop through each object in the data and append a row add cells for each value
    data.forEach((dataRow) => {
    let row = tbody.append("tr");

    //Loop thorugh each field in the dataRow and add each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }   
    );    
});