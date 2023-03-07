"use client";  // Required to use react-bootstrap

// CSS
import style from '@/css/header.module.css';

// Bootstrap UI components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Header() {
	return (
		<div className={style.header}>
			<Navbar style={{background: '#F39E95', boxShadow: "0px 0px 2px 2px #F39E95, 0px 4px 15px 0px rgb(0, 0, 0, 0.5)"}} expand="md">
				<Container>
					<Navbar.Brand href="/">
						<b>🍉 Fruit App</b>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='navbar-toggle-id' />
					<Navbar.Collapse id='navbar-toggle-id'>
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
					</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	)
}