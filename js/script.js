var searchForm = document.querySelector(".popup");
var searchButton = document.querySelector(".search-hotel-button");

searchForm.classList.remove("popup");

searchButton.addEventListener("click", function(e) {
  e.preventDefault();
  searchForm.classList.toggle("popup");
});
