import React from "react";
import Link from 'gatsby-link';
import Slide from 'react-reveal/Slide';

import image1 from '../img/singlu/singlu.jpg'
import bag from '../img/singlu/bag1.jpg'
import poster from '../img/singlu/poster.jpg'
import sign from '../img/singlu/signal.jpg'
import streetsign from '../img/singlu/signal2.jpg'

import styles from "../css/paredes.module.css";

require('../css/global.css');

export default () => (

<div className={styles.wrapper}>
	
	<Slide bottom>
		<div className={styles.projecttitle}><h1>singlu</h1>
		<h3>creando la primera pastelería sin gluten</h3></div>
	</Slide>

	<Slide bottom>
		<img src={image1} className={styles.hero}></img>
	</Slide>

	<Slide bottom>
		<div className={styles.double}>
			<p className={styles.text1}>Recibimos el encargo para crear una identidad visual para su proyecto de repostería para celíacos. El cliente buscaba un naming fácil y recordable y un diseño escalable en caso de que su franquicia creciera, reconocible, y amigable.</p>
		</div>
	</Slide>
	
	<Slide bottom>
		<img src={sign} className={styles.sign}/>
		<img src={poster} className={styles.poster}/>
	</Slide>

	<Slide bottom>
		<div className={styles.double}>
			<p className={styles.text2}>El azul claro y las formas circulares representado la forma de la molécula y la burbuja orquestan la identidad visual. Los elementos se reutilizan creando una imagen coherente.</p>
		</div> 
	</Slide>	
		
	<Slide bottom>
		
			<img src={streetsign} className={styles.street}></img>
			<img src={bag} className={styles.bag}></img>
		
	</Slide>
		
	<Slide bottom>
		<div className={styles.double}>
			<p  className={styles.text3}>En sus distintas aplicaciones se puede apreciar la imagen simpática, memorable y accesible de la marca.</p>
		</div> 
	</Slide>

	<Slide bottom>
				<Link to='/circo/' className={styles.next}>Siguiente Proyecto<svg className={styles.nextarrow}version="1.2" baseProfile="tiny" x="0px" y="0px" width="112.5px" height="34.3px" viewBox="0 0 112.5 34.3">
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