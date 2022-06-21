import React from 'react';
import "./NavIcon.scss";
import PropTypes from 'prop-types';
import icons from "../../Helpers/icons";

/**
 * @component
 * @memberOf Nutriment
 * @description Component NavIcon who contains links for differents futurs pages of the app
 */
const NavIcon = (props) => {

	return (
		<div className="navIcon">
			<img src={
				icons[props.pic]
					} alt="Icone" />
		</div>
	)
}

NavIcon.propTypes = {
	/**
	 * Just the pic to show on the component, according to the nutriment
	 */
	pic: PropTypes.string.isRequired,
}

export default NavIcon;