import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Link from 'gatsby-link';
import bea from '../img/gifs/bea.mp4'
import andreu from '../img/gifs/andreu.mp4'
import carles from '../img/gifs/carles.mp4'
import john from '../img/gifs/john.mp4'
import jorge from '../img/gifs/jorge.mp4'
import pallar from '../img/gifs/pallar.mp4'
import selene from '../img/gifs/selene.mp4'
import silvia from '../img/gifs/silvia.mp4'
import fabian from '../img/gifs/fabian.mp4'
import nosotros from '../img/NOSOTROS.mp4'
import image2 from '../img/img2.jpg'
import styles from "../css/nosotros.module.css";
import ReactPlayer from 'react-player'
import Slide from 'react-reveal/Slide';

require('../css/global.css');

class Nosotros extends Component {
	constructor(props){
		super(props);
		this.togglePlaying = this.togglePlaying.bind(this);
		this.state = {
			isPlaying: false,
		};

	}

		togglePlaying() {
			const currentPlaying = this.state.isPlaying;
			this.setState({isPlaying: !currentPlaying});
		};

render () {
	
return( 

<div className={styles.wrapper}>
	
	<Slide bottom>
		<div className={styles.header}>
			<h1>nosotros</h1>
			<h3>la pequeña gran familia de the bearded lady</h3>
		</div>
	</Slide>
		
	<Slide bottom>
		<video mute autoPlay loop className={styles.hero}>
			<source src={nosotros}/>
		</video>
	</Slide>

	<Slide bottom>
		<p className={styles.texthero}>Somos un grupo de 9 soñadores jóvenes que se han unido para sumergirse en el mundo del diseño y ofrecer sus ideas rompedoras y novedosas a todo aquel que las necesite.</p>
	</Slide>


	<Slide bottom>
		<div className={styles.perfiles}>
			<ReactPlayer width='100%' height='100%' url={silvia} onMouseEnter={this.togglePlaying} loop onMouseOut={this.togglePlaying} playing={this.state.isPlaying ? true : false} />
			<div className={styles.ustexto}>
					<h2 className={styles.ustitle}>silvia bonillo</h2>
					<p className={styles.usdesc}>Directa  y sincera por naturaleza. Me gusta que las cosas estén en armonía con el universo y por ello me dedico a conectar elementos para crear bonitas composiciones (o al menos, intentarlo). En definitiva, me apasiona el diseño gráfico, por lo que aquí estoy, viendo el mundo y deseando plasmarlo a mi modo.</p>
			</div>
		</div>
	</Slide>


	<Slide bottom>	
		<div className={styles.perfiles}>
			<ReactPlayer width='100%' height='100%' url={bea} onMouseEnter={this.togglePlaying} loop onMouseOut={this.togglePlaying} playing={this.state.isPlaying ? true : false} />
			<div className={styles.ustexto}>
					<h2 id={styles.textbea} className={styles.ustitle}>bea del caz</h2>
					<p className={styles.usdesc}>De pequeña quería ser Indiana Jones, así que ahora me encargo de buscar clientes. Invierto mi experiencia jugando al tetris organizando el estudio. Cuando no estoy ahí, me dedico a crear contenido para webs como Flooxer o Cocinatis mientras estudio filología española. Lo mío es ser multitarea.</p>
			</div>
		</div>
	</Slide>

	<Slide bottom>
		<div className={styles.perfiles}>
			<ReactPlayer width='100%' height='100%' url={jorge} onMouseEnter={this.togglePlaying} loop onMouseOut={this.togglePlaying} playing={this.state.isPlaying ? true : false} />
			<div className={styles.ustexto}>
					<h2 className={styles.ustitle}>jorge galán</h2>
					<p className={styles.usdesc}>Me considero un chico alegre y extrovertido cuyas mayores aficiones son hablar, comer y dormir; aunque prácticamente todo el día me lo paso trabajando en lo que más me gusta: El mundo del diseño. Desde pequeño apuntaba alto usando Paint y Comic Sans. Aunque ahora que lo pienso, creo que es esa la razón por la que la mayor parte de mi trabajo hoy en día es ser Influencer en las redes sociales. </p>
			</div>
		</div>
	</Slide>

	<Slide bottom>
		<div className={styles.perfiles}>
			<ReactPlayer width='100%' height='100%' url={selene} onMouseEnter={this.togglePlaying} loop onMouseOut={this.togglePlaying} playing={this.state.isPlaying ? true : false} />
			<div className={styles.ustexto}>
					<h2 className={styles.ustitle}>selene gómez</h2>
					<p className={styles.usdesc}>Un sabio un día me miró y me dijo: “Un mar en calma nunca hizo una pirata experta”, probablemente no sea el dicho correcto, ni un verdadero sabio, pero me gusta pensar que soy esa pirata. Me considero una chica explosiva y extremadamente soñadora capaz de proyectarlo en todos los aspectos de mi vida, sobre todo en el trabajo. Además, mi madre dice que soy guapa y perfecta ¿qué más puedo decir?</p>
			</div>
		</div>
	</Slide>

	<Slide bottom>
		<div className={styles.perfiles}>
			<ReactPlayer width='100%' height='100%' url={carles} onMouseEnter={this.togglePlaying} loop onMouseOut={this.togglePlaying} playing={this.state.isPlaying ? true : false} />
			<div className={styles.ustexto}>
					<h2 className={styles.ustitle}>carles ibáñez</h2>
					<p className={styles.usdesc}>De pequeño quería ser motorista pero he terminado haciendo diseño gráfico y programación web. Cuando quiero procrastinar sin sentirme mal, toco la guitarra, cuando no, juego a videojuegos. Además, presido el club de fans oficial de Marshall McLuhan: señor del mensaje y amo del medio.</p>
			</div>
		</div>
	</Slide>

	<Slide bottom>
		<div className={styles.perfiles}>
			<ReactPlayer width='100%' height='100%' url={john} onMouseEnter={this.togglePlaying} loop onMouseOut={this.togglePlaying} playing={this.state.isPlaying ? true : false} />
			<div className={styles.ustexto}>
					<h2 className={styles.ustitle}>john grothier</h2>
					<p className={styles.usdesc}>Como buen niño de los 90, me crié con dibujos animados y videojuegos japoneses. Desde entonces me cautivan las bandas sonoras de 8-bit y los estilos visuales noventeros. Doy vida sonora y apoyo visual en nuestros proyectos 2D o 3D.</p>
			</div>
		</div>
	</Slide>


	<Slide bottom>
		<div className={styles.perfiles}>
			<ReactPlayer width='100%' height='100%' url={fabian} onMouseEnter={this.togglePlaying} loop onMouseOut={this.togglePlaying} playing={this.state.isPlaying ? true : false} />
			<div className={styles.ustexto}>
					<h2 className={styles.ustitle}>fabián muñoz</h2>
					<p className={styles.usdesc}>Medio actor, medio pintamonos, busqué algo que uniera estas dos disciplinas. Como Hollywood estaba tan sobrecargado me dedico a la animación en dos dimensiones (la de toda la vida, vaya). Soy el encargado de que todo se mueva como toca y, además, con un toque de gracia. A veces lo mezclamos con el 3D, agitado pero no revuelto.</p>
			</div>
		</div>
	</Slide>


	<Slide bottom>	
		<div className={styles.perfiles}>
			<ReactPlayer width='100%' height='100%' url={pallar} onMouseEnter={this.togglePlaying} loop onMouseOut={this.togglePlaying} playing={this.state.isPlaying ? true : false} />
			<div className={styles.ustexto}>
					<h2 className={styles.ustitle}>irene pallardó</h2>
					<p className={styles.usdesc}>Graduada en Comunicación Audiovisual soy la tesorera de nuestro estudio. Sí, con lo que he odiado las matemáticas desde bien pequeña. Supongo que mi manía por los números me ha traído hasta aquí y no el hecho de que me guste Taburete, ya sabéis. La realidad es que amo trabajar y creo fielmente en lo que hago, así es como aporto mi grano de arena en este equipo.</p>
			</div>
		</div>
	</Slide>

	<Slide bottom>
		<div className={styles.perfiles}>
			<ReactPlayer width='100%' height='100%' url={andreu} onMouseEnter={this.togglePlaying} loop onMouseOut={this.togglePlaying} playing={this.state.isPlaying ? true : false} />
				<div className={styles.ustexto}>
					<h2 className={styles.ustitle}>andreu vicedo</h2>
					<p className={styles.usdesc}>Nací en Denia y soy un apasionado del diseño gráfico y el modelado y la animación 3D.
						Mi especialidad son la cartelería publicitaria y artística y la animación creativa. Soy el que se encarga de toda la animación en 3D de la productora y junto al departamento de Diseño conseguimos los resultados que puedes ver en nuestra web.
					</p>
			</div>
		</div>
	</Slide>

</div>

	);
	}
}

export default Nosotros;