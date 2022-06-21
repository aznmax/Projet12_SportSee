import React from 'react';
import "./VerticalLayout.scss";
import NavIcon from '../NavIcon/NavIcon';

// 
/**
 * @component
 * @description Component Vertical Layout who appears on the left of the app for all pages and contains the NavIcons
 */
function VerticalLayout() {
	return (
		<div className="verticalLayout">
			<div className="verticalLayout-div">
				<NavIcon pic="yoga" />
				<NavIcon pic="swim" />
				<NavIcon pic="bike" />
				<NavIcon pic="dumbbell" />

			</div>
			<p className="verticalLayout-text">Copyright, SportSee 2020</p>
		</div>
	)
}

VerticalLayout.propTypes = {

}

export default VerticalLayout;