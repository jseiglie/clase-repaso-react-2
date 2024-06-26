import React, { useContext } from "react";
import "../../styles/home.css";
import { Form } from "../component/form";
import { Context } from "../store/appContext";
import { Contact } from "../component/contact";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div className="text-center mt-5">
				<h1>los ejemplos del fetch estan en el boton azul grande y feo de la esquina</h1>
			<Form />

			{store.contacts.length > 0 ? 
			store.contacts.map((el, i) => <Contact key={i} index={i} fname={el.fname} email={el.email} phone={el.phone} />) 
			: <p>Agrega contactos</p>}


		</div>
	);
}