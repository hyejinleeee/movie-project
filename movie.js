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
    console.log(movies);

    //카드 구현
     const movieSection = document.getElementById("movieSection");
     const movieCards = document.querySelectorAll(".movieCard");

    //카드 만들고 section에 추가하는 함수 
    function showMovieCard(val = "") {
      //html 기존카드 지우고 내용비우기    
         while (movieSection.firstChild) {
          movieSection.removeChild(movieSection.firstChild);
         }
      movieCards.innerHTML = "";
      //배열 반복문 돌면서 조건에 만족하는 카드만들고 추가
      movies.forEach((movie) => {
        if (movie.title.toLowerCase().includes(val.toLowerCase())) {
          const card = document.createElement("article");
          card.classList.add("movieCard");
          card.innerHTML = `
            <img src='https://image.tmdb.org/t/p/w300${movie.poster_path}'/>
            <p>${movie.title}</p>
            <p>${movie.overview}</p>
            <p>Rating:${movie.vote_average}</p>`;
          movieSection.appendChild(card); 
          
          //id alert
          card.addEventListener("click", function () {
            const movieId = movie.id;
            alert(`ID: ${movieId}`);
          });
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
  })
  .catch((err) => console.error(err));
