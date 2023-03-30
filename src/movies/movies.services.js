const moviescontrollers = require('./movies.controllers')

const getAllMovies =(req, res) => {
    moviescontrollers.findAllMovies()
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        res.status(400).json({message: err})
    })
}

const getMovieById = (req, res) => {
    const id = Number(req.params.id)
    moviescontrollers.findMovieById(id)
    .then((data) => {
        if(!data) {
            return res.status(404).json({message: 'Movie not found'})
        }
        
        res.status(200).json(data)
    })
    .catch((err) => {
        res.status(400).json({message: err})
    })
}

const postNewMovie = (req, res) => {
    const movieObj = req.body
    moviescontrollers.createmovie(movieObj)
    .then(data => {
        res.status(201).json(data)
    })
    .catch(err => {
        res.status(400).json({message: err})
    })
}

module.exports = {
    getAllMovies,
    getMovieById,
    postNewMovie
}