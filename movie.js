const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDg2OGQ5Yjg2NTNhMzg3ZWRmNGVjN2ZiZWM1NThmNyIsInN1YiI6IjY2MmEzZDZkZGM4NjQ3MDBhZTUyNzI2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.22Vap4cFQXB9I2ZRnpMhTcXIvfOE1JPo8lRvXDJwibU'
  }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => {
    // fetch 요청이 완료된 후 movieArray에 데이터 할당
    const movieArray = response.results;
    console.log(movieArray);
     
  // 각 카드 요소에 대해 필요한 요소를 선택하여 값을 설정
  const cards = document.querySelectorAll(".moviecard");

 cards.forEach((card, index) => {

  card.querySelector('img').src = `https://image.tmdb.org/t/p/w300${movieArray[index].poster_path}`;                                 
  card.querySelector(".title").textContent = movieArray[index].title;
  card.querySelector(".overview").textContent = movieArray[index].overview;
  card.querySelector(".average").textContent = movieArray[index].vote_average;
 
});
   
    
    //카드 클릭 이벤트 등록
    cards.forEach((card, index) => {
      card.addEventListener("click", function () {
        // 클릭한 카드의 인덱스를 사용하여 movieArray에서 해당하는 영화 ID를 가져옴
        const movieId = movieArray[index].id;
        alert(`ID: ${movieId}`);
      });
    });

 






  })
  .catch(err => console.error(err));

 

