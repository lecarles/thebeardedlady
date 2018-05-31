import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import image1 from '../img/img1.jpg'
import styles from "../css/servicios.module.css";
import Slide from 'react-reveal/Slide';

require('../css/global.css');

class Servicios extends Component {
	constructor(props) {
		super(props);
		
		this.toggleClass = this.toggleClass.bind(this);
		this.toggleClassTwo = this.toggleClassTwo.bind(this);
		this.toggleClassThree = this.toggleClassThree.bind(this);
		this.toggleClassFour = this.toggleClassFour.bind(this);
		this.state = {
			isFirstOpen: false,
			isSecondOpen: false,
			isThirdOpen: false,
			isFourthOpen: false,
		};
	}

		toggleClass() {
			const currentFirstState = this.state.isFirstOpen;
			this.setState({isFirstOpen: !currentFirstState});
		};

		toggleClassTwo() {
			const currentSecondState = this.state.isSecondOpen;
			this.setState({isSecondOpen: !currentSecondState});
		};

		toggleClassThree() {
			const currentThirdState = this.state.isThirdOpen;
			this.setState({isThirdOpen: !currentThirdState});
		};

		toggleClassFour() {
			const currentFourthState = this.state.isFourthOpen;
			this.setState({isFourthOpen: !currentFourthState});
		};
	
		

render () {

	return(
	<div className={styles.wrapper}>

		<Slide bottom>
		<h1>¿qué hacemos?</h1>
		<h3>en the bearded lady ofrecemos soluciones visuales sorprendentes</h3>
		</Slide>
		
		<Slide bottom cascade>
		<div className={styles.servicios}>
			<a><div onClick={this.toggleClass} className={this.state.isFirstOpen ? styles.fotoopen : styles.foto}></div></a>
			<a><div className={styles.texto}>
				<h2 onClick={this.toggleClass} className={styles.serviciotitle}>branding</h2>
				<p onClick={this.toggleClass} className={this.state.isFirstOpen ? styles.subtitleopen : styles.subtitleclosed}>Creamos y diseñamos estrategia de marca. Ayudamos a nuestros clientes a lograr reconocimiento, posicionamiento, identificación y una buena percepción para diferenciarse de la competencia. Para ello, creamos proyectos de identidad visual y comunicación 360. Branding adaptado a cualquier tipo de medio, según las necesidades de nuestros clientes, potenciando significativamente su presencia tanto en sus canales habituales como en nuevos medios.</p>
			</div></a>
		</div>

		<div className={styles.servicios}>
			<a><div onClick={this.toggleClassTwo} className={this.state.isSecondOpen ? styles.fotoopenweb : styles.fotoweb}></div></a>
			<a><div className={styles.texto}>
				<h2 onClick={this.toggleClassTwo} className={styles.serviciotitle}>diseño web</h2>
				<p onClick={this.toggleClassTwo} className={this.state.isSecondOpen ? styles.subtitleopen : styles.subtitleclosed}>Estudiamos las necesidades de nuestros clientes para poder sumergirnos de lleno en el diseño de la mejor web, buscando la solución que mejor se adecúe a lo que nuestros clientes necesitan. Trabajamos desde el primer píxel y no paramos hasta crear la mejor web. Nos especializamos en proyectos personalizados y únicos donde el diseño de la interfaz y la experiencia del usuario se atienden al máximo para crear una sinergia entre ambos.</p>
			</div></a>
		</div>

		<div className={styles.servicios}>
			<a><div onClick={this.toggleClassThree} className={this.state.isThirdOpen ? styles.fotoopenani : styles.fotoani}></div></a>
			<a><div className={styles.texto}>
				<h2 onClick={this.toggleClassThree} className={styles.serviciotitle}>animación</h2>
				<p onClick={this.toggleClassThree} className={this.state.isThirdOpen ? styles.subtitleopen : styles.subtitleclosed}>Está más que demostrado que las webs que cuentan con material audiovisual de calidad o videos interactivos mejoran su posicionamiento y la experiencia del usuario de forma espectacular. Por ello en The Bearded Lady creamos contenido audiovisual de calidad con la última tecnología, realizando animaciones tanto en 2D como en 3D, además de vídeos corporativos, según las necesidades de nuestros clientes.</p>
			</div></a>
		</div>

		<div className={styles.servicios}>
			<a><div onClick={this.toggleClassFour} className={this.state.isFourthOpen ? styles.fotoopenpack : styles.fotopack}></div></a>
			<a><div className={styles.texto}>
				<h2 onClick={this.toggleClassFour} className={styles.serviciotitle}>packaging</h2>
				<p onClick={this.toggleClassFour} className={this.state.isFourthOpen ? styles.subtitleopen : styles.subtitleclosed}>Este es el primer punto de contacto entre el consumidor y una marca o producto. Diseñamos envases, etiquetas o cualquier tipo de envoltorio, tras analizar las necesidades de nuestros clientes para conseguir sus objetivos. Abarcamos desde el desarrollo y la creación de packs originales, a la selección de materiales, procesos y acabados concretos para que el producto sea perfecto</p>
			</div></a>
		</div>
		</Slide>

	</div>

	);
	}
}

export default Servicios;