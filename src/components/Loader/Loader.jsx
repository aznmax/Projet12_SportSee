import React from 'react';
import "./Loader.scss";


/**
 * @component
 * @description Component Loader who appears when the datas are not fetched yet
 */
function Loader() {
	return (
		<div className="diamonds">
		<div className="diamond diamond-1"></div>
		<div className="diamond diamond-2"></div>
		<div className="diamond diamond-3"></div>
		<div className="diamond diamond-4"></div>
	  </div>
	)
}

Loader.propTypes = {

}

export default Loader;