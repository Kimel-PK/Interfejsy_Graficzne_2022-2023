import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register';
import Courses from './pages/Courses';
import Schedule from './pages/Schedule';
import Tutors from './pages/Tutors'
import Tutor from './pages/Tutor'
import Settings from './pages/Settings'
import { Container, Row, Col } from 'react-bootstrap'

function App() {
	
	return (
		<div className='root site-background'>
			<Router>
				<header className='primary-bg-color'>
					<Container>
						<Row>
							<Col md='6'>
								<Link to='/'>
									<img className='logo' src={'/logo.png'} alt='logo' />
								</Link>
							</Col>
							<Col md='6' className='profile-bar'>
								<p className='profile-email'>example@student.edu.pl</p>
								<img className='profile-photo' src='https://thispersondoesnotexist.com/image' alt='profile' />
								<button className='button button-logout'>Wyloguj</button>
							</Col>
						</Row>
						<Row className='secondary-bg-color'>
							<Col md='5' className='nav-panel-title'>
								<p>Panel studenta</p>
							</Col>
							<Col md='7' className='availability'>
								<p>Czcionka:</p>
								<img alt='' src={'/czcionka.png'} />
								<p>Kontrast:</p>
								<img alt='' src={'/kontrast.png'} />
							</Col>
						</Row>
					</Container>
				</header>
				<Container className='white-background'>
					<Row>
						<Col md='3' className='nav-panel'>
							<nav>
								<ul>
									<li>
										<Link to='/'><div className='nav-button'><span class="nav-icon nav-icon-start" style={{ backgroundImage: "url(/ikony/start.png)" }}></span><p>Start</p></div></Link>
									</li>
									<li>
										<Link to='/register'><div className='nav-button'><span class="nav-icon nav-icon-register" style={{ backgroundImage: "url(/ikony/rejestracja.png)" }}></span><p>Rejestracja</p></div></Link>
									</li>
									<li>
										<Link to='/courses'><div className='nav-button'><span class="nav-icon nav-icon-courses" style={{ backgroundImage: "url(/ikony/katalog.png)" }}></span><p>Katalog przedmiotów</p></div></Link>
									</li>
									<li>
										<Link to='/schedule'><div className='nav-button'><span class="nav-icon nav-icon-schedule" style={{ backgroundImage: "url(/ikony/plan.png)" }}></span><p>Plan zajęć</p></div></Link>
									</li>
									<li>
										<Link to='/tutors'><div className='nav-button'><span class="nav-icon nav-icon-tutors" style={{ backgroundImage: "url(/ikony/personel.png)" }}></span><p>Personel</p></div></Link>
									</li>
									<li>
										<Link to='/settings'><div className='nav-button'><span class="nav-icon nav-icon-settings" style={{ backgroundImage: "url(/ikony/ustawienia.png)" }}></span><p>Ustawienia</p></div></Link>
									</li>
								</ul>
							</nav>
						</Col>
						<Col md='9'>
							<Routes>
								<Route path='/' exact element={<Home />} />
								<Route path='/register' exact element={<Register />} />
								<Route path='/courses' exact element={<Courses />} />
								<Route path='/schedule' exact element={<Schedule />} />
								<Route path='/tutors' exact element={<Tutors />} />
								<Route path='/tutor/:id' exact element={<Tutor />} />
								<Route path='/settings' exact element={<Settings />} />
							</Routes>
						</Col>
					</Row>
				</Container>
				<footer>
					<Container fluid>
						<Row>
							<p className='text-center'>Internetowe Zapisy na Zajęcia</p>
							<p className='text-center'>Uniwersytet Jagielloński</p>
						</Row>
					</Container>
				</footer>
			</Router>
		</div>
	)
}

export default App;
