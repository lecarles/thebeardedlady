import React from "react";
import Link from 'gatsby-link';
import image1 from '../img/img1.jpg'
import styles from "../css/contacto.module.css";
import Slide from 'react-reveal/Slide';

require('../css/global.css');

export default () => (

<div className={styles.wrapper}>

	<Slide bottom>
	<div className={styles.header}>
		<h1>contacto</h1>
		<h3>¿nos tomamos un café?</h3>
	</div>
	<p>Si después de echar una ojeada a nuestra página te ha surgido alguna duda o propuesta, no dudes en ponerte en contacto con nosotros, te atenderemos con mucho gusto tan pronto como nos sea posible. </p>

	<a>thebeardedlady@gmail.com</a>
	<a>+34 751 678 278</a>

	<p>¡Y no olvides seguirnos en nuestras redes!</p>
	</Slide>


</div>


);