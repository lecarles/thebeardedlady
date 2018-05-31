import React from "react";
import Link from 'gatsby-link';
import image1 from '../img/img1.jpg'
import styles from "../css/index.module.css";
import video from "../img/video.mp4"
import Slide from 'react-reveal/Slide';

require('../css/global.css');

export default () => (

<div className={styles.wrapper}>
	<video loop muted autoPlay className={styles.fullscreenvideo}>
        <source src={video} type="video/mp4"/>
    </video>
	<Slide bottom>
		<h1 className={styles.breakword}>the bearded lady</h1>
		<h3 className={styles.subtitle}>un estudio de diseño y branding</h3>	
	</Slide>
</div>


);