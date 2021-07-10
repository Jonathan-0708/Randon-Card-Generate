/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";
const Simbolo = ({ cartObject }) => {
	return <div className={cartObject.color}>{cartObject.icon}</div>;
};
Simbolo.propTypes = { cartObject: PropTypes.object };
export default Simbolo;
