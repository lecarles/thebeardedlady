import React from "react";
import ResponsiveMenu from 'react-responsive-navbar';
import styles from "../css/layout.module.css";
import Link from 'gatsby-link';
import FontAwesome from 'react-fontawesome';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 

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
		            <a className={styles.menuitem} href="#"><FontAwesome name='instagram'/></a>
		            <a className={styles.menuitem} href="#"><FontAwesome name='facebook'/></a>
	            </div>
	          </div>
	        }
	      />
    {children()}
  </div>
);