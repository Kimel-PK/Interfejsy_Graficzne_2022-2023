const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors());

const db = require ('./models')

const usersRouter = require ('./routes/users')
app.use("/auth", usersRouter);
const tutorsRouter = require ('./routes/tutors')
app.use("/tutors", tutorsRouter);
const coursesRouter = require ('./routes/courses')
app.use("/courses", coursesRouter)

db.sequelize.sync().then(() => {
	app.listen(3001, () => {
		console.log("Uruchomiono serwer na porcie 3001");
	})
})