/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";

const Tipocarta = ({ tipoCarta, cardNumber }) => {
	cardNumber = cardNumber === "1" ? tipoCarta.icon : cardNumber;

	return (
		<div className={cardNumber === "1" ? tipoCarta.color : null}>
			{cardNumber}
		</div>
	);
};
Tipocarta.propTypes = {
	tipoCarta: PropTypes.object,
	cardNumber: PropTypes.string
};
export default Tipocarta;
