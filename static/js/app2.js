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

function handleClick() {
    //grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
   
    //check to see if a date was entered and filter the data using that date
    if (date) {

        //apply `filter` to the table data to only keep the rows where `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }; 

    //rebuild the table using the filtered data; if not date chosed, original tableData is default
    buildTable(filteredData);
};

//attach an event to listen for the form button click
d3.selectAll("#filter-btn").on("click", handleClick);

//build a table when the page loads
buildTable(tableData);