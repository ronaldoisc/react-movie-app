import { CardMovie } from './components/CardMovie';
import { HeaderMovie } from './components/HeaderMovie';
import { useFetchMovie } from './hooks/useFetchMovie';


export const MovieApp = () => {

    const { data: movies, loanding } = useFetchMovie();


    return (
        <div>
            {
                loanding ?
                   <div className='d-flex flex-column align-items-center justify-content-center vh-100'>
                       <h1 className='font-weight-bold'>WELCOME</h1>
                       <h1 className='font-weight-normal'>MOVIE APP</h1>

                   </div>
                    :
                    <div>
                        <HeaderMovie />

                        <h1 className='text-center'>New Movies</h1>
                        <div className="cards">


                            {
                                movies.map(movie => {
                                    return <CardMovie key={movie.id} movie={movie} />
                                })

                            }

                        </div>
                    </div>

            }


        </div>
    )
}
