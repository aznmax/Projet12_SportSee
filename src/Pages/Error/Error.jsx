import React from 'react'
import "./Error.scss"
import {Link} from "react-router-dom"

/**
 * @component
 * @description Component Error who appears when the datas are fetched but an error is occured xxx
 */
function Error() {
	return (
		<section className="error404">
				<>
					<p className="error404__number">404</p>
					<div className="error404__phrase">
						<p>Oups ! La page que </p>
						<p>vous demandez n'existe pas</p>
					</div>
				</>
			<Link to="/" >
				<p  className="error404__homeLink">Retourner sur la page d'accueil</p>
			</Link>
		</section>
	)
}

Error.propTypes = {
	
}

export default Error;