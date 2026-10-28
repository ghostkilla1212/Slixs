const searchButton = document.getElementById('searchButton')
const searchInput = document.getElementById('searchInput')


searchButton.addEventListener('click', () => {
    const searchTrem = searchInput.value;

    productGrid.innerHTML = '';

    const url = 'https://fakestoreapi.com/products/category/${searchTerm}';

    console.log("was geht ab du hs", searchInput)
});