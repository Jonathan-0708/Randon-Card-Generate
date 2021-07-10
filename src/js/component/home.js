/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import Tipocarta from "./Tipocarta";
import Simbolo from "./Simbolo";
import PropTypes from "prop-types";

const WIDTH_DEFAULT = 400;
const HEIGHT_DEFAULT = 520;
const MIN_WIDTH_VALUE = 350;
const MIN_HEIGHT_VALUE = 200;
const MAX_VALUE = 600;
const ELECCION = [
	{ icon: "♦", color: "red" },
	{ icon: "♥", color: "red" },
	{ icon: "♠", color: "black" },
	{ icon: "♣", color: "black" }
];
const ELECCION_CART = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"J",
	"Q",
	"K"
];

export function Home() {
	const [time, setTime] = useState(10);
	const [width, setWidth] = useState(WIDTH_DEFAULT);
	const [height, setHeight] = useState(HEIGHT_DEFAULT);
	const [total, setTotal] = useState(
		Math.floor(Math.random() * ELECCION.length)
	);
	const [cardNumber, setCardNumber] = useState(
		Math.floor(Math.random() * ELECCION_CART.length)
	);

	useEffect(() => {
		getTime();
	});

	function getTime() {
		if (time > 0) {
			setTimeout(() => setTime(prevTime => prevTime - 1), 1000);
		} else {
			setTime(10);
			actualizarLaPagina();
		}
	}

	function actualizarLaPagina() {
		window.location.reload();
	}

	function handleChangeInputWidth(event) {
		var value = event.target.value;
		setWidth(value);
	}

	function handleChangeInputHeight(event) {
		const value = event.target.value;
		setHeight(value);
	}

	function validateWidth(width) {
		return width >= MIN_WIDTH_VALUE && width <= MAX_VALUE
			? width
			: WIDTH_DEFAULT;
	}

	function validateHeight(height) {
		return height >= MIN_HEIGHT_VALUE && height <= MAX_VALUE
			? height
			: HEIGHT_DEFAULT;
	}

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-8 mt-5 ">
						<div
							style={{
								width: `${validateWidth(width)}px`,
								height: `${validateHeight(height)}px`
							}}
							className="Card container">
							<div className="Figura">
								<Simbolo cartObject={ELECCION[total]} />
							</div>
							<div className="numero d-flex justify-content-center align-items-center ">
								<Tipocarta
									tipoCarta={ELECCION[total]}
									cardNumber={ELECCION_CART[cardNumber]}
								/>
							</div>

							<div className="Figura invertido">
								<Simbolo cartObject={ELECCION[total]} />
							</div>
						</div>
					</div>

					<div className="col-4 mt-5">
						<div className="col-12 ">
							<p>
								<input
									className="form-control form-control-lg ml-3 mt-4 "
									type="number"
									placeholder="Seleccione el Ancho"
									min={MIN_WIDTH_VALUE}
									max={MAX_VALUE}
									onChange={handleChangeInputWidth}
									name={"width"}
									value={width}
								/>
								<label className="ml-3 mb-0 red p-1 text-light rounded letra">
									Escoge un valor entre 300 y 600
								</label>
							</p>
							<p>
								<input
									className="form-control form-control-lg ml-3 mt-0"
									type="number"
									placeholder="Seleccione el Largo"
									min={MIN_HEIGHT_VALUE}
									max={MAX_VALUE}
									name={"height"}
									value={height}
									onChange={handleChangeInputHeight}
								/>
								<label className="ml-3 mb-0 text-light p-1 rounded letra ">
									Escoge un valor entre 200 y 600
								</label>
							</p>
						</div>
						<div className=" col-12">
							<div className="text-center bg-light rounded  ml-3 fondo p-2">
								<div>Obtener carta aleatoria en: {time}</div>
							</div>
							<div className="ml-3  mt-4 fondo">
								<button
									className="btn btn-light fondo"
									type="button"
									onClick={actualizarLaPagina}>
									Actualizar
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
Simbolo.propTypes = { total: PropTypes.number };
