const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./pool')

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send("backend running")
})

app.get('/users', async (req, res) => {
    const result = await pool.query('select * from info')
    res.send(result[0])
    // console.log(result);  
})

app.get('/users/add/:id/:name', async (req, res) => {
    try {
        const uid = req.params.id
        const uname = req.params.name

        const [result] = await pool.query('insert into info values(?, ?)', [uid, uname])

        res.send("added")
    } catch (error) {
        res.send("database error")
    }

})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})