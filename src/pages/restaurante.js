import React from "react";
import Link from 'gatsby-link';

import image1 from '../img/singlu/singlu.jpg'
import bag from '../img/singlu/bag1.jpg'
import poster from '../img/singlu/poster.jpg'
import sign from '../img/singlu/signal.jpg'
import streetsign from '../img/singlu/signal2.jpg'

import styles from "../css/paredes.module.css";

require('../css/global.css');

export default () => (

<div className={styles.wrapper}>
	
	<div className={styles.projecttitle}><h1>singlu</h1>
	<h3>creando la primera pastelería sin gluten</h3></div>
	
	<p className={styles.text1}>We have completely filled our grid with areas in this example, leaving no white space. However you can leave grid cells empty with this method of layout. To leave a cell empty use the full stop character, '.'. If I want to only display the footer directly under the main content I would need to leave the three cells underneath the sidebar empty.</p>
	<div className={styles.empta}></div> 
	<img src={image1} className={styles.hero}></img>
	
	<img src={sign} className={styles.sign}></img>
	<img src={poster} className={styles.poster}></img>
	<p className={styles.text2}>Lorem Ipsum</p>
	<div className={styles.emptb}></div> 
	
	<img src={streetsign} className={styles.street}></img>
	<img src={bag} className={styles.bag}></img>
	<p  className={styles.text3}>Lorem Ipsum</p>
	<div className={styles.emptc}></div> 

</div>

);