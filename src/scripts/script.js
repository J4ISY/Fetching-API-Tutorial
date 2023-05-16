fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
    let tableData = "";
    data.map((values) => {
        tableData += `
        <tr>
            <td>${values.title}</td>
            <td>${values.description}</td>
            <td>${values.rating.rate}</td>
            <td>${values.price}</td>
            <td><img src="${values.image}" alt=""></td>
        </tr>
`
    });
    document.querySelector("tbody").innerHTML=tableData;
}).catch((error) => {
    console.log(error)
})