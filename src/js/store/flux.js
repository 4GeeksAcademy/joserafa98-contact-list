const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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
			],
			contacts: []
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				// fetch().then().then(data => setStore({ "foo": data.bar }))
			},
			changeColor: (index, color) => {
				const store = getStore();

				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				setStore({ demo: demo });
			},
			getContact: ()=>{
				fetch('https://playground.4geeks.com/contact/agendas/joserafa98', {
					method: "GET",
					headers: {
					  "Content-Type": "application/json"
					}
				  })
				  .then(resp => {
                    if (!resp.ok) {
                        throw new Error(`HTTP error! status: ${resp.status}`);
                    }
                    return resp.json(); 
                })
				.then(data => {
                    console.log("Data from API:", data); 
                    setStore({ contacts: data.contacts });
                })
				  .catch(error => {
					 
					  console.log(error);
				  });
			},
			addContact: (newContact) => {
				const store = getStore();
				const updatedContacts = [...store.contacts, newContact];
				setStore({ contacts: updatedContacts });
			
				fetch('https://playground.4geeks.com/contact/agendas/joserafa98/contacts', {
					method: "POST",
					body: JSON.stringify(newContact),
					headers: {
						"Content-Type": "application/json"
					}
				})
				.then(resp => {
					if (!resp.ok) {
						throw new Error(`HTTP error! status: ${resp.status}`);
					}
					return resp.json(); 
				})
				.then(data => {
					console.log("Data from API:", data);
					setStore({ contacts: [...store.contacts, data] });
				})
				.catch(error => {
					console.log(error);
				});
			}
			,
			deleteContact: (contactId) => {
				const store = getStore();
				const updatedContacts = store.contacts.filter(contact => contact.id !== contactId);
				setStore({ contacts: updatedContacts });
			
				fetch(`https://playground.4geeks.com/contact/agendas/joserafa98/contacts/${contactId}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
				.then(resp => {
					if (!resp.ok) {
						throw new Error(`HTTP error! status: ${resp.status}`);
					}
					return resp.json(); 
				})
				.then(data => {
					console.log("Data from API after delete:", data);
				})
				.catch(error => {
					console.log(error);
					setStore({ contacts: store.contacts });
				});
			}
		 modifyContact: ()=>{

			
		 }
		}
	};
};

export default getState;

