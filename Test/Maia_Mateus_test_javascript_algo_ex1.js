
window.onload = function()
{createTable1();}

function createTable1()
{
    const elements = Elements.GetElements();
    const headings = Elements.GetHeadings();
    const properties = Elements.GetProperties();

    let tablehtml = "<table>";

    for(let element of elements)
    {
        tablehtml  += "<tr>";

        for(let property of properties)
        {
            tablehtml  += `<td>${element[property]}</td>`;
        }

        tablehtml  += "</tr>";
    }

    // end of table
    tablehtml += "</table>";

    // add table to the empty div
    document.getElementById("tablediv").innerHTML = tablehtml;
}



var array_number = new Array(9);
array_number[0]= "4 2 7 3 5 1 9 8 6";
array_number[1]= "9 8 3 7 6 2 5 1 4";
array_number[2]= "1 5 6 8 9 4 7 2 3";
array_number[3]= "2 3 9 1 8 5 4 6 7";
array_number[4]= "7 4 1 6 3 9 2 5 8";
array_number[5]= "5 6 8 2 4 7 1 3 9";
array_number[6]= "8 7 2 9 1 3 6 4 5";
array_number[7]= "3 9 5 4 2 6 8 7 1";
array_number[8]= "6 1 4 5 7 8 3 9 2";








// elements
class Elements
{
    static GetHeadings()
    {
        return ["row"];
    }

    static GetProperties()
    {
        return ["row"];
    }

    static GetElements()
    {
        return [
            {row: "4 2 7 3 5 1 9 8 6"},
            {row: "9 8 3 7 6 2 5 1 4"},
            {row: "1 5 6 8 9 4 7 2 3"},
            {row: "2 3 9 1 8 5 4 6 7"},
            {row: "7 4 1 6 3 9 2 5 8"},
            {row: "5 6 8 2 4 7 1 3 9"},
            {row: "8 7 2 9 1 3 6 4 5"},
            {row: "3 9 5 4 2 6 8 7 1"},
            {row: "6 1 4 5 7 8 3 9 2"}     
    ]
    }
}



