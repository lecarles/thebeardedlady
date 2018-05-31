import React from "react";
import Link from 'gatsby-link';
import Slide from 'react-reveal/Slide';

import hero from '../img/xuq/hero.jpg'
import bag from '../img/xuq/bag.jpg'
import poster from '../img/xuq/poster.jpg'
import card from '../img/xuq/card.jpg'
import carteles from '../img/xuq/carteles.jpg'


import styles from "../css/xuquer.module.css";

require('../css/global.css');

export default () => (

<div className={styles.wrapper}>

<Slide bottom>
		<div className={styles.projecttitle}><h1>xúquer</h1>
		<h3>naranjas con más de 70 años de historia</h3></div>
	</Slide>

	<Slide bottom>
		<img src={hero} className={styles.hero}></img>
	</Slide>

	<Slide bottom>
		<div className={styles.double}>
			<p className={styles.text1}>Xúquer es una de las empresas productoras y exportadoras de naranja valenciana de nuestro territorio. Nos pidieron un diseño clásico pero adaptado a nuestros tiempos para su nuevo logotipo. Por ello mantuvimos sus colores y creamos un concepto tradicional y reconocible.</p>
		</div>
	</Slide>
	
	<Slide bottom>
		<img src={poster} className={styles.sign}/>
		<img src={card} className={styles.poster}/>
	</Slide>

	<Slide bottom>
		<div className={styles.double}>
			<p className={styles.text2}>Por otro lado creamos toda su identidad para su primer evento sobre la promoción de la huerta valenciana. Quisimos plasmar elementos de la huerta y, por supuesto, sus naranjas de una manera clara y sencilla.</p>
		</div>
	</Slide>

	<Slide bottom>
		<img src={bag} className={styles.sign}/>
		<img src={carteles} className={styles.poster}/>
	</Slide>

	<Slide bottom>
				<Link to='/xabia/' className={styles.next}>Siguiente Proyecto<svg className={styles.nextarrow}version="1.2" baseProfile="tiny" x="0px" y="0px" width="112.5px" height="34.3px" viewBox="0 0 112.5 34.3">
		<defs>
		</defs>
		<g>
			<line fill="none" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" x1="0" y1="17.2" x2="109" y2="17.2"/>
			<polyline fill="none" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" points="92.8,33.6 111,17.2 92.8,0.7 	"/>
		</g>
		</svg></Link>
	</Slide>
</div>

);