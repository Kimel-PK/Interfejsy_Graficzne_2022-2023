import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

function Tutors() {
	
	return (
		<main>
			<Container>
				<Row>
					<h2>Personel</h2>
				</Row>
				<Row>
					<h3>Wyszukiwarka</h3>
					<form>
						<input type='text' className='search-bar' placeholder='Szukaj...' />
						<input type='submit' className='search-submit' value='Szukaj' />
					</form>
				</Row>
			</Container>
		</main>
	)
}

export default Tutors