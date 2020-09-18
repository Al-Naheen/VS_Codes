import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from "./axios"; //for export Default..!

const base_url = 'https://image.tmdb.org/t/p/original/'
;
function Row({ title, fetchUrl }) {
    const [ movies, setMovies ] = useState([])


    // A snippet of code which runs based on a specific Condition/Variable
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.requests);
            return request
            // "https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US",
        }
        fetchData()
        // if[],  run once when the row loads, and don't run again
    }, [ fetchUrl ])

    console.log(movies);

    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className="row__posters" >
                {movies.map(movie => (
                    <img className='row__poster' src={`${base_url}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>
        </div>
    )
}
export default Row