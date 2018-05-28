import React from "react";
import ResponsiveMenu from 'react-responsive-navbar';
import styles from "../css/layout.module.css";
import Link from 'gatsby-link';

export default ({ children }) => (
  <div>
	      <ResponsiveMenu
	        menuOpenButton={<div />}
	        menuCloseButton={<div />}
	        changeMenuOn="500px"
	        largeMenuClassName={styles.lgMenu}
	        smallMenuClassName="small-menu-classname"
	        menu={
	          <div>
	            <Link className={styles.logo} to="/">tbl.</Link>
	            <Link className={styles.menuitem} to="/proyectos/">Proyectos</Link>
	            <Link className={styles.menuitem} to="/nosotros/">Nosotros</Link>
	            <Link className={styles.menuitem} to="/servicios/">Servicios</Link>
	            <Link className={styles.menuitem} to="/contacta/">Contacta</Link>
	          </div>
	        }
	      />
    {children()}
  </div>
);