function getData() {
    axios.get('https://northwind.vercel.app/api/products')
    .then(res => {
        console.log(res.data);
        const products = res.data

        products.forEach(element => {
            let liElement = document.createElement('li');
            liElement.innerText = `${element.name} - ${element.unitPrice}`;

            document.querySelector('ul').appendChild(liElement);
            if (element.unitPrice > 50) {
                document.querySelector('ul').appendChild(liElement).style.color = "red";
                } else {
                document.querySelector('ul').appendChild(liElement);
}
        });
    })
}