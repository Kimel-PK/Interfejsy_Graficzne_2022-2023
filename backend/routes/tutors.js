const express = require ('express')
const router = express.Router ()
const { Tutors } = require ('../models')

router.get('/', async (req, res) => {
	const tutors = await Tutors.findAll()
	res.json (tutors)
})

router.get('/:id', async (req, res) => {
	const id = req.params.id
	const tutor = await Tutors.findOne({
		where: {
			id: id
		}
	})
	res.json (tutor)
})

module.exports = router