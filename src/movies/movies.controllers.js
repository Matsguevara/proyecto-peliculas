const moviesDB = [
    {
            id: 1,
            title: "Figth Club",
            description: "lorem Ipsum",
            year: 1999,
            director: "David Fincher"
    },
];

let movieId = 2;

const findAllMovies = async (id) =>  {
    return moviesDB;
};

const findMovieById = async (id) => {
    const movie = moviesDB.find(movieItem => movieItem.id === id)
    return movie
}


const createmovie = async (movieObj) => {
    const newMovie = {

            id: movieId++,
            title: movieObj.title||'untitled',
            description: movieObj.description||'Lorem ipsum',
            year: movieObj.year|| 'unknown',
            director: movieObj.director||'anonymous'
    }
    moviesDB.push(newMovie)
    return newMovie
}

module.exports = {
    findAllMovies,
    findMovieById,
    createmovie
}