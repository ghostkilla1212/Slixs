const searchButton = document.getElementById('searchButton')
const searchInput = document.getElementById('searchInput')

searchButton.addEventListener('click', () => {
    const searchTrem = searchInput.value;

    productGrid.innerHTML = '';

    const url = `https://fakestoreapi.com/products/${searchTrem}`;
    

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log("Das hat die API zurückgeschickt:", data);
    })
});