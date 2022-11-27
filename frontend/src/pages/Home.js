import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

function Home() {
	
	useEffect(() => {
		
	}, [])
	
	return (
		<main>
			<Container>
				<Row>
					<h2>Start</h2>
				</Row>
				<Row>
					<Col>
						<div className='start-panel start-panel-red'>
							<h3>Ogłoszenia</h3>
							<div className='start-panel-text'>
								<p>Zgodnie z Zarządzeniem nr 72 Rektora Uniwersytetu Jagiellońskiego z 30 września 2019 roku wszystkie przedmioty muszą zostać podpięte pod program oraz etap studiów do dnia 19 października. Podczas rejestracji na przedmiot USOSweb tworzy automatycznie podpięcie do domyślnego programu studiów. Studenci wielu kierunków mogą samodzielnie wybrać domyślny program w zakładce 'Domyślny program'.</p>
							</div>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className='start-panel'>
							<h3>Plan zajęć</h3>
							<div className='start-panel-text'>
								<Row>
									<Col md='4'>
										<p>Następne zajęcia:</p>
										<p>Interfejsy graficzne</p>
										<p>wtorek godzina 14:00</p>
									</Col>
									<Col md='8'>
										<Link to='/schedule'>
											<img src='/start-plan.png' alt='' />
										</Link>
									</Col>
								</Row>
							</div>
						</div>
					</Col>
				</Row>
				<Row>
					<Col>
						<div className='start-panel'>
							<h3>Informacje o użytkowniku</h3>
							<div className='start-panel-text'>
								<ul>
									<li>Numer albumu: xxxxxxx</li>
									<li>Role/uprawnienia w systemie: student</li>
									<li>Wydział Fizyki, Astronomii i Informatyki Stosowanej</li>
								</ul>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</main>
	)
}

export default Home
