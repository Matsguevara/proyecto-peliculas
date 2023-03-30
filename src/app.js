const express = require('express')
const moviesRouter = require('./movies/movies.router')

const app = express()
const PORT = 3000;


app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'SERVER OK'})
})

app.use('/', moviesRouter)

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
})




module.exports = app


