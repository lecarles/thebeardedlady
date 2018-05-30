import React from "react";
import Link from 'gatsby-link';
import Slide from 'react-reveal/Slide';
import image1 from '../img/img1.jpg'
import styles from "../css/xabia.module.css";

import flyer from "../img/xabia/flyer.jpg";
import cartel from "../img/xabia/cartel.jpg";

require('../css/global.css');

export default () => (

<div className={styles.wrapper}>

	<Slide bottom>
		<div className={styles.projecttitle}><h1>xàbia 365</h1>
		<h3>una campaña para revitalizar el turismo de xàbia</h3></div>
	</Slide>

	<Slide bottom>
		<iframe className={styles.hero} width="100%" height="900px" src="https://www.youtube.com/embed/PSkxbTVD2g4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
	</Slide>

	<Slide bottom>
		<div className={styles.double}>
			<p className={styles.text1}>Recibimos el encargo de crear la identidad del corto sobre el Último Circo del mundo, en uno de los proyectos más importantes y que más nos han marcado como diseñadores. </p>
		</div>
	</Slide>

	<Slide bottom>
		
			<img src={flyer}/>
			<img src={cartel}/>
		
	</Slide>

	<Slide bottom>
		<div className={styles.double}>
			<p  className={styles.text3}>Para la web se trasladaron los valores del cartel y el 'feel' oscuro y elegante de la identidad. En ella se publicita el corto al público mostrándole la trama y sus personajes.</p>
		</div> 
	</Slide>
	
	<Slide bottom>
		<Link to='/xabia/' className={styles.next}>Siguiente Proyecto</Link>
	</Slide>
</div>

);