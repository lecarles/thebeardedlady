import React from "react";
import Link from 'gatsby-link';
import bea from '../img/gifs/bea.mp4'
import andreu from '../img/gifs/andreu.mp4'
import carles from '../img/gifs/carles.mp4'
import john from '../img/gifs/john.mp4'
import jorge from '../img/gifs/jorge.mp4'
import pallar from '../img/gifs/pallar.mp4'
import selene from '../img/gifs/selene.mp4'
import silvia from '../img/gifs/silvia.mp4'
import fabian from '../img/gifs/fabian.mp4'
import nosotros from '../img/NOSOTROS.mp4'
import image2 from '../img/img2.jpg'
import styles from "../css/nosotros.module.css";

require('../css/global.css');

export default () => (

<div className={styles.wrapper}>
	
	<div className={styles.header}>
		<h1>somos esta gente</h1>
		<h3>un equipo de 9 diseñadores, comunicadores y programadores</h3>
	</div>
	
	<div className={styles.hero}>
		<video>
			<source mute src={nosotros}/>
		</video>
	</div>

	<div className={styles.perfiles}>
		<video className={styles.pic}>
			<source mute src={bea}/>
		</video>
			<h2 className={styles.ustitle}>bea del caz</h2>
			<p className={styles.usdesc}></p>
	</div>


</div>

);