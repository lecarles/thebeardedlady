import React from "react";
import Link from 'gatsby-link';
import image1 from '../img/img1.jpg'
import styles from "../css/contacto.module.css";
import Slide from 'react-reveal/Slide';
import FontAwesome from 'react-fontawesome';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 

require('../css/global.css');

export default () => (

<div className={styles.wrapper}>
	<Slide bottom>
	<div className={styles.header}>
		<h1>contacto</h1>
		<h3>¿nos tomamos un café?</h3>
	</div>
	<p>Si después de echar una ojeada a nuestra página te ha surgido alguna duda o propuesta, no dudes en ponerte en contacto con nosotros, te atenderemos con mucho gusto tan pronto como nos sea posible. </p>
	<div className={styles.double}>
		<div className={styles.links}><FontAwesome name='envelope'/><a> thebeardedlady@gmail.com</a></div>
		<div className={styles.links}><FontAwesome name='phone'/><a> +34 751 678 278</a></div>
	</div>
	<p>¡Y no olvides seguirnos en nuestras redes!</p>
	<div className={styles.xarxes}>
		<a className={styles.menuitem} target="_blank" href="https://twitter.com/TBLStudio_"><FontAwesome name='twitter'/></a>
		<a className={styles.menuitem} target="_blank" href="https://www.instagram.com/tblstudio_/"><FontAwesome name='instagram'/></a>
		<a className={styles.menuitem} target="_blank" href="https://www.facebook.com/The-Bearded-Lady-Studio-2075699575976424/?ref=bookmarks"><FontAwesome name='facebook'/></a>
		<a className={styles.menuitem} target="_blank" href="https://www.youtube.com/channel/UCUtpYx64eeibjqIXHEPGFDA?view_as=subscriber"><FontAwesome name='linkedin'/></a>
		<a className={styles.menuitem} target="_blank" href="https://www.linkedin.com/in/the-bearded-lady-studio-501637164/"><FontAwesome name='youtube'/></a>
	</div>
	</Slide>
</div>


);