const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const app = express()
const PORT = process.env.PORT || 3000

// dotenv
dotenv.config();




app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


// routes
const userRoutes = require('./routes/UserRoutes')
app.use(userRoutes)

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))