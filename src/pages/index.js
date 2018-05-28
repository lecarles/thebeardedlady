import React from "react";
import Link from 'gatsby-link';
import image1 from '../img/img1.jpg'
import styles from "../css/index.module.css";
import video from "../img/video.mp4"

require('../css/global.css');

export default () => (

<div className={styles.wrapper}>
	<video loop muted autoPlay className={styles.fullscreenvideo}>
        <source src={video} type="video/mp4"/>
    </video>
	<div className={styles.header}>
		<h1 className={styles.breakword}>the bearded lady</h1>
		<h3>una agencia de diseño venida del circo</h3>
		<h3><Link to="proyectos">¡mira nuestro trabajo!</Link></h3>
	</div>
</div>


);