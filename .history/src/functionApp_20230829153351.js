const searchInput = document.getElementById('searchInput');
const searchIcon = document.getElementById('searchIcon');

searchInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    searchIcon.click();
  }
});