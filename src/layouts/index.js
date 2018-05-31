import React from "react";
import ResponsiveMenu from 'react-responsive-navbar';
import styles from "../css/layout.module.css";
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import ScrollUpButton from "react-scroll-up-button"; 

export default ({ children }) => (
  <div>
	      <ResponsiveMenu
	        menuOpenButton={<div />}
	        menuCloseButton={<div />}
	        changeMenuOn="500px"
	        largeMenuClassName="sda"
	        smallMenuClassName="small-menu-classname"
	        menu={
	          <div className={styles.lgMenu}>
	          	<div className={styles.menuleft}>
		            <Link className={styles.logo} to="/">tbl.</Link>
		            <Link className={styles.menuitem} to="/proyectos/">Proyectos</Link>
		            <Link className={styles.menuitem} to="/nosotros/">Nosotros</Link>
		            <Link className={styles.menuitem} to="/servicios/">Servicios</Link>
		            <Link className={styles.menuitem} to="/contacta/">Contacta</Link>
	            </div>
	            <div className={styles.menuright}>
		            <a className={styles.menuitem} target="_blank" href="https://twitter.com/TBLStudio_"><FontAwesome name='twitter'/></a>
		            <a className={styles.menuitem} target="_blank" href="https://www.instagram.com/tblstudio_/"><FontAwesome name='instagram'/></a>
		            <a className={styles.menuitem} target="_blank" href="https://www.facebook.com/The-Bearded-Lady-Studio-2075699575976424/?ref=bookmarks"><FontAwesome name='facebook'/></a>
	            </div>
	          </div>
	        }
	      />
	      <ScrollUpButton 
		      ContainerClassName={styles.uparrow} 
		      TransitionClassName={styles.uparrowtrans} 
		      StopPosition={0}
		      TransitionBtnPosition={1000}
		      EasingType='easeOutCubic'
		      AnimationDuration={500}>
      		<svg version="1.2" baseProfile="tiny" x="0px" y="0px" width="34.3px" height="112.5px" viewBox="0 0 34.3 112.5">
				<g>
					<line fill="none" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" x1="17.2" y1="112.5" x2="17.2" y2="3.5"/>
					<polyline fill="none" stroke="#FFFFFF" stroke-width="2" stroke-miterlimit="10" points="33.6,19.7 17.2,1.5 0.7,19.7 	"/>
				</g>
			</svg>
   		</ScrollUpButton>

    {children()}
  
  </div>
);