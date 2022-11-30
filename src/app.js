const express = require('express')

const userRouter = require('./users/users.router')

const app = express()
const port = 9000

app.use(express.json())


app.get('/', (req, res) => {
    res.status(200).json({message: 'OK!'})
})

app.use('/api/v1', userRouter)

app.listen(port, () => {
    console.log(`server started at port ${port}`)
})