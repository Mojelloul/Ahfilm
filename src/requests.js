const API_KEY = "ef46286193aba536cc8d1a126731d71e";


const requests ={
fetchTrendin : `/trending/all/Week?api_key=${API_KEY}&language=en—US`, 
fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`, 
fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en—US`, 
fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`, 
fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, 
fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`, 
fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&With_genres=10749`, 
fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99 `
}
export default requests;

