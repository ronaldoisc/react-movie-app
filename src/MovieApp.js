import { CardMovie } from './components/CardMovie';
import { HeaderMovie } from './components/HeaderMovie';
import { useFetchMovie } from './hooks/useFetchMovie';


export const MovieApp = () => {

    const {data:movies,loanding} = useFetchMovie();

    
    return (
        <div>
            <HeaderMovie/> 
            
            <h3>Películas Recientes...</h3>
            <div className="cards">
            {loanding && <p>Cargando</p>}
            
            {
                movies.map(movie => {
                      return <CardMovie key={movie.id} movie={movie}/>
                })

            }
                
            </div>

        </div>
    )
}
