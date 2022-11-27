import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

function Tutor() {
	
	const [tutor_data, getTutor] = useState([])
	
	const { id } = useParams()
	
	useEffect (() => {
		axios.get(`http://localhost:3001/tutors/${id}`).then((response) => {
			getTutor(response.data)
		})
	}, [id])
	
	return (
		<main>
			<Container>
				<Row>
					<Col md='6'>
						<h2>Personel</h2>
					</Col>
					<Col md='6'>
						<form>
							<input type='text' className='search-bar' placeholder='Szukaj...' />
							<input type='submit' className='search-submit' value='Szukaj' />
						</form>
					</Col>
				</Row>
				<Row>
					<h3>Wyniki wyszukiwania</h3>
				</Row>
				
				{tutor_data.map((tutor, key) => {
					return (
						<div>
							<Row>
								<p className='tutor-name'>{tutor.name} {tutor.last_name}</p>
								<p className='tutor-title'>{tutor.title}</p>
							</Row>
							<Row>
								<Col md='8'>
									<h4>Podstawowe informacje</h4>
									<p className='tutor-info'>{tutor.informations}</p>
								</Col>
								<Col md='4' className='tutor-contact'>
									<img className='tutor-photo' src='https://thispersondoesnotexist.com/image' alt='tutor' />
									<h5 className='text-center'>Kontakt</h5>
									<p className='text-center'>{tutor.phone_number}</p>
									<p className='text-center'>{tutor.email}</p>
								</Col>
							</Row>
							<Row>
								<h4>Prowadzone przedmioty</h4>
								<ul>
									<li></li>
									<li></li>
									<li></li>
								</ul>
								{/* wszystkie przedmioty gdzie ta osoba wpisana jako prowadzący */}
							</Row>
						</div>
					)
				})}
			</Container>
		</main>
	)
}

export default Tutor