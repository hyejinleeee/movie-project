const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDg2OGQ5Yjg2NTNhMzg3ZWRmNGVjN2ZiZWM1NThmNyIsInN1YiI6IjY2MmEzZDZkZGM4NjQ3MDBhZTUyNzI2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.22Vap4cFQXB9I2ZRnpMhTcXIvfOE1JPo8lRvXDJwibU",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => {
    // fetch 요청이 완료된 후 movies에 데이터 할당
    const movies = response.results;

    const movieSection = document.querySelector("ul");
    //조건에 맞는 카드를 생성하는 함수
    function showMovieCard(val = "") {
      movieSection.innerHTML = ""; // 검색했을때 원래 있던 카드 지우기
      movies.forEach((movie) => {
        if (movie.title.toLowerCase().includes(val.toLowerCase())) {
          const card = document.createElement("li");
          card.classList.add("movieCard");
          card.setAttribute("id", `${movie.id}`);
          card.innerHTML = `
            <img src='https://image.tmdb.org/t/p/w300${movie.poster_path}'/>
            <p>${movie.title}</p>
            <p>${movie.overview}</p>
            <p>Rating:${movie.vote_average}</p>`;
          movieSection.appendChild(card);
        }
      });
    }
    showMovieCard();

    // 검색기능
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");

    searchBtn.addEventListener("click", function (e) {
      const val = searchInput.value;
      e.preventDefault();
      showMovieCard(val);
    });

    //id 이벤트핸들러
    movieSection.addEventListener("click", function (event) {
      const target = event.target;
      if (target === movieSection) return;

      if (target.matches(".movieCard")) {
        alert(`영화 id: ${target.id}`);
      } else {
        alert(`영화 id: ${target.parentNode.id}`);
      }
    });
  })
  .catch((err) => console.error(err));
