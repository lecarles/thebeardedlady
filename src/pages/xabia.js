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
			<iframe className={styles.hero} width="100%" height="900px" src="https://player.vimeo.com/video/272603814" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
	</Slide>

	<Slide bottom>
		<div className={styles.double}>
			<p className={styles.text1}>Xàbia recibe gran parte del porcentaje de turismo autonómico pero su problemática reside en la falta de turismo de invierno. Por eso nos pidieron una campaña de promoción de Xàbia con el eslogan “Todo el año, cualquier día” y su hastag #Xabia365 para demostrar que Xàbia es un lugar con muchas posibilidades todo el año.</p>
		</div>
	</Slide>

	<Slide bottom>
		
			<img src={flyer}/>
			<img src={cartel}/>
		
	</Slide>

	<Slide bottom>
		<div className={styles.double}>
			<p  className={styles.text3}>Los colores utilizados han sido el azul y el blanco. Ambos reflejan claridad, frescura y tranquilidad, muy acorde con los valores de turismo de Xàbia. Podemos ver una puerta típica del lugar que representa la bienvenida, la puerta de entrada a este paraíso inexplorado. Los elementos que introducimos hacen que el diseño de Xàbia quede limpio y sencillo.</p>
		</div> 
	</Slide>
	
	<Slide bottom>
				<Link to='/xuquer/' className={styles.next}>Siguiente Proyecto<svg className={styles.nextarrow}version="1.2" baseProfile="tiny" x="0px" y="0px" width="112.5px" height="34.3px" viewBox="0 0 112.5 34.3">
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