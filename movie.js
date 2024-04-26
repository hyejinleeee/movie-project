const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDg2OGQ5Yjg2NTNhMzg3ZWRmNGVjN2ZiZWM1NThmNyIsInN1YiI6IjY2MmEzZDZkZGM4NjQ3MDBhZTUyNzI2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.22Vap4cFQXB9I2ZRnpMhTcXIvfOE1JPo8lRvXDJwibU'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));