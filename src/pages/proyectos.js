import React from "react";
import Link from 'gatsby-link';
import image1 from '../img/img1.jpg'
import styles from "../css/proyectos.module.css";

require('../css/global.css');

export default () => (

<div className={styles.wrapper}>

	<div className={styles.proyecto} id={styles.pprimero}><Link to="/circo/"><div className={styles.texto}>el último circo</div></Link></div>
	<div className={styles.proyecto} id={styles.psegundo}><Link to="/paredes/"><div className={styles.texto}>paredes</div></Link></div>
	<div className={styles.proyecto} id={styles.ptercero}><Link to="/xabia/"><div className={styles.texto}>xàbia 365</div></Link></div>
	<div className={styles.proyecto} id={styles.pcuarto}><Link to="/restaurante/"><div className={styles.texto}>restaurante</div></Link></div>

</div>


);