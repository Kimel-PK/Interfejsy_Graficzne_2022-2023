const express = require ('express')
const router = express.Router ()
const { Users } = require ('../models')
const bcrypt = require ('bcrypt')

// hashowanie hasła (dev)
router.get('/hash/:haslo', async (req, res) => {
	const hasło = req.params.haslo
	bcrypt.hash (hasło, 10).then ((hash) => {
		res.json ({
			hasło: hasło,
			hash: hash
		})
	})
})

// logowanie użytkownika
router.post('/', async (req, res) => {
	const { email, hasło } = req.body
	
	if (!email || !hasło) {
		res.json ({
			error: 'Brakujące dane'
		})
		return
	}
	
	const użytkownik = await Users.findOne({
		where: {
			email: email
		}
	})
	
	if (!użytkownik) {
		res.json ({
			error: 'Użytkownik nie istnieje'
		})
		return
	}
	
	bcrypt.compare (hasło, Users.hasło_hash).then((zgodne) => {
		if (!zgodne) {
			res.json({
				error: 'Niepoprawne hasło'
			})
			return
		}
		
		res.json({
			message: 'Pomyślnie zalogowano użytkownika',
			user_id: użytkownik.id
		})
	})
})

module.exports = router