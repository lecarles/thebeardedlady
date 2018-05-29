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
			<p className={styles.text1}>We have completely filled our grid with areas in this example, leaving no white space. However you can leave grid cells empty with this method of layout. To leave a cell empty use the full stop character, '.'. If I want to only display the footer directly under the main content I would need to leave the three cells underneath the sidebar empty.</p>
		</div>
	</Slide>
	
	<Slide bottom>
		<div className={styles.double}>
			<img src={sign} className={styles.sign}/>
			<img src={poster} className={styles.poster}/>
		</div>
	</Slide>

	<Slide bottom>
		<div className={styles.double}>
			<p className={styles.text2}>Lorem Ipsum</p>
		</div> 
	</Slide>	
		
	<Slide bottom>
		<div className={styles.double}>
			<img src={streetsign} className={styles.street}></img>
			<img src={bag} className={styles.bag}></img>
		</div>
	</Slide>
		
	<Slide bottom>
		<div className={styles.double}>
			<p  className={styles.text3}>Lorem Ipsum</p>
		</div> 
	</Slide>

</div>

);