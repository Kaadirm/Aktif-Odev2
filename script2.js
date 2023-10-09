function add() {
    var name = document.getElementById('name').value;
    var unitPrice = document.getElementById('unitPrice').value;
    var stock = document.getElementById('stock').value;

    var newProduct = {
        name,
        unitPrice,
        stock
    }

    axios.post('https://northwind.vercel.app/api/products', newProduct)
    .then(res => {
        console.log(res.data);
    })
}