import { useEffect } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=c34a95a8';

const movie1 = {
    "Title": "The Batman",
    "Year": "2022",
    "imdbID": "tt1877830",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Batman')
    }, [])

    return (
        <div className='app'>
            <h1>Movie Land</h1>

            <div className='search'>
                <input
                    placeholder='Search for movies'
                    value='Superman'
                    onChange={() => { }} />
                <img
                    src={SearchIcon}
                    alt='Search'
                    onClick={() => { }}
                />
            </div>

            <div className='container'>
                <MovieCard movie1={movie1}/>
            </div>
        </div>
    )
}

export default App;