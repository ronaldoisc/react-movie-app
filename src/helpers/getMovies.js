export const getMovies = async()=>{
    const url="https://yts.mx/api/v2/list_movies.json";
    const resp=await fetch(url);
    const {data}=await resp.json();
    const {movies} = data;

    

     const moviesInfo=movies.map(movie =>{

       return {
           id:movie.id,
           title:movie.title,
           img:movie.large_cover_image,
           summary:movie.summary,
           year:movie.year,
           slug:movie.slug,
           genres:movie.genres.map(genre =>{
               return genre +" ";
           })
       }

     });
     return moviesInfo;
   };