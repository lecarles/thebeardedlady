import React, { Component } from "react";
import Link from 'gatsby-link';
import image1 from '../img/img1.jpg'
import styles from "../css/proyectos.module.css";
import Slide from 'react-reveal/Slide';

require('../css/global.css');

class Proyectos extends Component {
	constructor(props) {
		super(props);
		
		this.toggleClassCircoOn = this.toggleClassCircoOn.bind(this);
		this.toggleClassSingluOn = this.toggleClassSingluOn.bind(this);
		this.toggleClassXabiaOn = this.toggleClassXabiaOn.bind(this);
		this.toggleClassParedesOn = this.toggleClassParedesOn.bind(this);
		this.toggleClassCircoOff = this.toggleClassCircoOff.bind(this);
		this.toggleClassSingluOff = this.toggleClassSingluOff.bind(this);
		this.toggleClassXabiaOff = this.toggleClassXabiaOff.bind(this);
		this.toggleClassParedesOff = this.toggleClassParedesOff.bind(this);
		
		this.state = {
			isOnCirco: true,
			isOnSinglu: true,
			isOnXabia: true,
			isOnParedes: true,
		};
	}


	toggleClassCircoOn() {
			this.setState({isOnCirco: true});
	};

	toggleClassCircoOff() {
			this.setState({isOnCirco: false});
	};

	toggleClassSingluOn() {
			this.setState({isOnSinglu: true});
	};

	toggleClassSingluOff() {
			this.setState({isOnSinglu: false});
	};

	toggleClassXabiaOn() {
			this.setState({isOnXabia: true});
	};

	toggleClassXabiaOff() {
			this.setState({isOnXabia: false});
	};

	toggleClassParedesOn() {
			this.setState({isOnParedes: true});
	};

	toggleClassParedesOff() {
			this.setState({isOnParedes: false});
	};

	
render () {

	return(

			<div className={styles.wrapper}>	
				<Link to="/circo/"><div onMouseEnter={this.toggleClassCircoOn} onMouseExit={this.toggleClassCircoOff} className={styles.proyecto} id={this.state.isOnCirco ? styles.pprimero : styles.pprimerofade}><div className={styles.texto}><Slide right>el último circo</Slide></div></div></Link>
				<Link to="/singlu/"><div onMouseEnter={this.toggleClassSingluOn} onMouseExit={this.toggleClassSingluOff} className={styles.proyecto} id={this.state.isOnSinglu ? styles.psegundo : styles.psegundofade}><div className={styles.texto}><Slide right>singlu</Slide></div></div></Link>
				<Link to="/xabia/"><div onMouseEnter={this.toggleClassXabiaOn} onMouseExit={this.toggleClassXabiaOff} className={styles.proyecto} id={this.state.isOnXabia ? styles.ptercero : styles.ptercerofade}><div className={styles.texto}><Slide right>xàbia 365</Slide></div></div></Link>
				<Link to="/paredes/"><div onMouseEnter={this.toggleClassParedesOn} onMouseExit={this.toggleClassParedesOff} className={styles.proyecto} id={this.state.isOnParedes ? styles.pcuarto : styles.pcuartofade}><div className={styles.texto}><Slide right>paredes</Slide></div></div></Link>
			</div>


		);
	}
}

export default Proyectos;