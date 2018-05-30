import React from "react";
import Link from 'gatsby-link';
import styles from "../css/circo.module.css";
import Slide from 'react-reveal/Slide';

import portada from "../img/circo/portada.jpg";
import screen1 from "../img/circo/screen1.jpg";
import screen2 from "../img/circo/screen2.jpg";
import web from "../img/circo/web.jpg";
import hero from "../img/circo/principal.jpg";
import interior from "../img/circo/interior.jpg";
import poster from "../img/circo/poster.jpg";
import logo from "../img/circo/logo.jpg";


require('../css/global.css');

export default () => (

<div className={styles.wrapper}>

	<Slide bottom>
		<div className={styles.projecttitle}><h1>el último circo</h1>
		<h3>creando imagen para el último corto del mundo</h3></div>
	</Slide>

	<Slide bottom>
		<img src={hero} className={styles.hero}></img>
	</Slide>

	<Slide bottom>
		<div className={styles.double}>
			<p className={styles.text1}>Recibimos el encargo de crear la identidad del corto sobre el Último Circo del mundo, en uno de los proyectos más importantes y que más nos han marcado como diseñadores. </p>
		</div>
	</Slide>

	<Slide bottom>
		
			<img src={poster}/>
			<img src={logo}/>
		
	</Slide>

	<Slide bottom>
		
			<img src={screen1} className={styles.sign}/>
			<img src={screen2} className={styles.poster}/>
		
	</Slide>

		<Slide bottom>
		<div className={styles.double}>
			<p className={styles.text2}>Se trabajó codo con codo con el equipo de dirección artística con el cual se concibió una imagen oscura, potente y decadente. Se trabajó con la fotografía en el diseño de los títulos de crédito y el genérico, usando en ellos técnicas de animación avanzadas.</p>
		</div> 
	</Slide>	
		
	<Slide bottom>
		
			<img src={web} className={styles.web}></img>
					
	</Slide>
		
	<Slide bottom>
		<div className={styles.double}>
			<p  className={styles.text3}>Para la web se trasladaron los valores del cartel y el 'feel' oscuro y elegante de la identidad. En ella se publicita el corto al público mostrándole la trama y sus personajes.</p>
		</div> 
	</Slide>

	<Slide bottom>
		
			<img src={portada} className={styles.sign}/>
			<img src={interior} className={styles.poster}/>
		
	</Slide>

	<Slide bottom>
		<Link to='/xabia/' className={styles.next}>Siguiente Proyecto</Link>
	</Slide>
	
</div>


);