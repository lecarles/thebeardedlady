import React from "react";
import Link from 'gatsby-link';
import image1 from '../img/img1.jpg'
import styles from "../css/paredes.module.css";

require('../css/global.css');

export default () => (

<div className={styles.wrapper}>

	<h1>paredes</h1>
	<h3>descripción del proyecto</h3>
	<img src={image1}></img>

</div>


);