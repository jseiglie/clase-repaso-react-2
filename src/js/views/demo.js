import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [username, setUsername] = useState('')
	//metodo GET es el por defecto

	useEffect(() => {
		actions.getUsers()
	}, [])

	const handleSubmit = e => {
		e.preventDefault()
		actions.addUser(username)
	}

	const handleDelete = (user) => {
		actions.delUser(user)
	}

	return (
		<div className="container">
			<h2>METODOS</h2>
			<ul>
				<li>C - Create --- POST</li>
				<li>R - Read --- GET</li>
				<li>U - Update --- PUT</li>
				<li>D - Delete --- DELETE</li>
			</ul>
			<ul>

				{store.users?.map(el => <li key={el.id}>{el.name} <span onClick={() => handleDelete(el.name)}>XXXX</span> </li>)}
			</ul>
			<form onSubmit={handleSubmit}>
				<h2>Create user </h2>
				<input type="text" value={username} placeholder="username" onChange={e => setUsername(e.target.value)} />
				<input type="submit" value={'crear'} />

			</form>

		</div>
	);
};
