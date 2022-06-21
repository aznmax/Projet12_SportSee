import React from 'react';
import "./Nutriment.scss";
import PropTypes from 'prop-types';
import icons from '../../Helpers/icons';

// Object who contains the class names for the different nutriments
const iconClassName = {
	"Calories": "nutriment__pic red",
	"Glucides": "nutriment__pic yellow",
	"Protéines": "nutriment__pic blue",
	"Lipides": "nutriment__pic pink"
}

/**
 * @component
 * @memberOf Dashboard
 * @namespace Nutriment
 * @description Component Nutriment who render the informations of the user for each nutriment
 */
function Nutriment(props) {
	// console.log(props)
	return (
		<article className="nutriment" >
		<div className={
					iconClassName[props.nutriment]
		}>
			<img src={
				icons[props.nutriment]
					} alt="Icône de nutriment" />

		</div>

			<div className="nutriment-info">
				<h3>{props.nutriment === "Calories" ? props.quantity + "kCal" : props.quantity + "g"}</h3>
				<p>{props.nutriment}</p>
			</div>
		</article>
	)
}

Nutriment.propTypes = {
	/**
	 * The quantity of the nutriment who appears on the category
	 */
	quantity: PropTypes.number.isRequired,
	/**
	 * The nutriment who appears on the category
	 */
	nutriment: PropTypes.string.isRequired
}

export default Nutriment;