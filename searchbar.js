const searchButton = document.getElementById('searchButton')
const searchInput = document.getElementById('searchInput')

searchButton.addEventListener('click', () => {
    const searchTrem = searchInput.value;

    window.location.href = 'http://127.0.0.1:5500/results.html'
})