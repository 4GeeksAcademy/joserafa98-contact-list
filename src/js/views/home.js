import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getContact(); 
    }, [actions]);

    if (!store.contacts) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="container">
            <h2>Contact List</h2>
            <ul className="list-group">
                {store.contacts.length > 0 ? (
                    store.contacts.map((item, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between">
                            <div className="d-flex align-items-center">
                                <img className="rounded-circle" src="https://i.pinimg.com/280x280_RS/66/a1/a4/66a1a4a22e271ec3ee3ef35ba0883ca4.jpg" alt="contact" />
                                <div>
                                    <strong>Name:</strong> {item.name} <br />
                                    <strong>Number:</strong> {item.phone} <br />
                                    <strong>Address:</strong> {item.address}
                                </div>
                            </div>
                            <button className="btn btn-danger" onClick={() => actions.deleteContact(item.id)}>
    								Delete
							</button>
                        </li>
                    ))
                ) : (
                    <div>No contacts available</div> 
                )}
            </ul>
        </div>
    );
};

