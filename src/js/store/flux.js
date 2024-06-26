const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			users: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			delUser: async (username) => {
				try {
					const resp = await fetch('https://playground.4geeks.com/todo/users/' + username, {
							method: 'DELETE',
							headers: {
								'Content-Type': 'application/json'
							},
						});
					const data  = await resp.json();
					console.log(data)
				} catch (error) {
					console.log('error getting users ---> ', error);
				}
			},
			addUser: async (username) => {
				try {
					const resp = await fetch('https://playground.4geeks.com/todo/users/' + username, {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							},
							body: JSON.stringify()
						});
					const data  = await resp.json();
					console.log(data)
				} catch (error) {
					console.log('error getting users ---> ', error);
				}
			},
			getUsers: async () => {
				try {
					const resp = await fetch('https://playground.4geeks.com/todo/users');
					const data  = await resp.json();
					setStore({users: data.users})
				} catch (error) {
					console.log('error getting users ---> ', error);
				}
				//JSON ---> JavaScript Object Notation
			},
			delContact: (contact) => {
				let aux = getStore().contacts;
				aux.splice(contact, 1);
				setStore({ contacts: aux })
			},
			addContact: (formData) => {
				setStore({ contacts: [...getStore().contacts, formData] })
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
