import React from "react";
import "../../SASS/AsideLeftBar.scss";
import Meditation from "../../assets/meditation.svg";
import Swim from "../../assets/swim.svg";
import Bike from "../../assets/bike.svg";
import Alter from "../../assets/alter.svg";

//
/**
 * @component
 * @description Component Vertical Layout who appears on the left of the app for all pages and contains the NavIcons
 */
function AsideLeftBar() {
    return (
        <div className="AsideLeftBar">
            <div className="AsideLeftBar-div">
                <img src={Meditation} alt="Meditation Logo" />
                <img src={Swim} alt="Swim Logo" />
                <img src={Bike} alt="Bike Logo" />
                <img src={Alter} alt="Alter Logo" />
            </div>
            <p className="AsideLeftBar-text">Copyright, SportSee 2020</p>
        </div>
    );
}

AsideLeftBar.propTypes = {};

export default AsideLeftBar;
