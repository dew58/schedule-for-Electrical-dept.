const button = document.getElementById("downloadButton");
button.addEventListener("click",downloadTableAsExcel);

function downloadTableAsExcel() {
    // Select the table element
    var table = document.getElementById("mytable");

    // Create an HTML link element
    var link = document.createElement("a");

    // Specify the file name
    var fileName = "table_data.xls";

    // Set the link's attributes
    link.setAttribute("href", "data:application/vnd.ms-excel;charset=utf-8," + encodeURIComponent(table.outerHTML));
    link.setAttribute("download", fileName);

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger a click event on the link
    link.click();

    // Remove the link from the document body
    document.body.removeChild(link);
  }