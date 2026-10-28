const searchButton = document.getElementById('searchButton')
const searchInput = document.getElementById('searchInput')

searchButton.addEventListener('click', () => {
    const searchTrem = searchInput.value;

    productGrid.innerHTML = '';

    const url = `https://fakestoreapi.com/products/category/${searchTrem}`;

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log("Das hat die API zurückgeschickt:", data);
        
            // 4. Hier kommt gleich deine Schleife rein, 
            // die über die 'data' läuft und die Produkte ins Grid malt!
    })
});