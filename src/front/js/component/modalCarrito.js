import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Image, Container, Row, Col, Button, Badge } from "react-bootstrap";
import index from "../../styles/index.scss";
import { Context } from "../store/appContext";
import { InputCantidad } from "./inputCantidad";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

export const ModalCarrito = event => {
	const { store, actions } = useContext(Context);

	return (
		<Container>
			<Row>
				{store.carrito.map((item, index) => {
					return (
						<Row className="d-flex align-items-center" key={index}>
							<Col className="col-3">
								<Image className="imgLista" src={item.imagen} />
							</Col>
							<Col>
								<Row>
									<Col>
										<p>{item.nombre}</p>
									</Col>
								</Row>
								<Row>
									<Col>
										<small>
											<p>Precio &#162; {item.precio}</p>
										</small>
									</Col>
								</Row>
								<Row>
									<Col className="d-flex justify-content-between flex-nowrap">
										<InputCantidad />
										<HighlightOffIcon />
									</Col>
								</Row>
							</Col>
						</Row>
					);
				})}
			</Row>
			<Row>
				<Col>
					<p>Total Suma</p>
				</Col>
			</Row>
		</Container>
	);
};
