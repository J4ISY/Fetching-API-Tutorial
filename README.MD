# Fetching API data and display it in table

### Tutorial

Step 1: Find some free available APIs (Example of site with free
APIs: https://rapidapi.com/collection/list-of-free-apis)

Step 2: Make some base structure in HTML with table (I am also adding style inside tags)

Step 3: We are going to code our fetch

```javascript
// We make a request to a server
fetch("https://fakestoreapi.com/products?title")
    // Fetch returns a "Promise", that resolves to the response from the server
    // Promise gets two response. ".then" - for response and show data from fetch,
    // or ".catch" - for any errors that may occur during fetch.
    // We use ".json()" method to parse the response as JSON data. json() also returns a promise.
    .then(response => response.json())
    // The second ".then" is called when the JSON data is available. It is reciving parsed data, which is an array of objects.
    .then(data => {
        // Inside the second ".then", a variable tableData is and empty string which will be storing the HTML code for creating a table for eacth object.
        let tableData = "";
        // Map function, is used to iterate over each product object in the array (data). For each product, a table row is appended to tableData.
        data.map((values) => {
            // Within the template literal string (` `), the values of objects properties (title, description, price, image) are inserted using ${}.
            // After the "map" function completes, "tableData" will contain HTML code for all the table rows, each representing a product.
            tableData += `
        <tr>
            <td>${values.title}</td>
            <td>${values.description}</td>
            <td>${values.price}</td>
            <td><img src="${values.image}" alt=""></td>
        </tr>
`
        });
        // Finally, the innerHTML, property of the "tbody", is set to "tableData". This updates the content of the table body with the generated rows, effectively rendering the product data in an HTML table.
        document.querySelector("tbody").innerHTML=tableData;
    // In case of errors during Fetch or JSON parsing process, the ".catch" is triggerend and is displaying error in the console.
    }).catch((error) => {
        console.log(error)
    })
```

Step 4: Be happy, that our fetch is working!

I hope, I helped you. Feel free to take this code as template. 
You got this! Fingers crossed!