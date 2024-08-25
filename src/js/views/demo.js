import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Demo = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState(""); 
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newContact = {
            name: name,
            email: email,
            phone: number, 
            address: address 
        };

        actions.addContact(newContact);

        navigate("/");
    };

    return (
        <div className="row justify-content-center" style={{ width: "100%" }}>
            <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3" style={{ width: "75%" }}>
                        <label htmlFor="exampleInputName" className="form-label">Full Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="exampleInputName" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3" style={{ width: "75%" }}>
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                
                    <div className="mb-3" style={{ width: "75%" }}>
                        <label htmlFor="exampleInputPhone" className="form-label">Number</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="exampleInputPhone" 
                            value={number} 
                            onChange={(e) => setNumber(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3" style={{ width: "75%" }}>
                        <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="exampleInputAddress" 
                            value={address} 
                            onChange={(e) => setAddress(e.target.value)} 
                            required 
                        />
                    </div>
                    <button  to="/" type="submit" className="btn btn-primary">Add Contact</button>
                    <Link to="/" className="btn btn-secondary ms-2">Back to Contact</Link>
                </form>
            </div>
        </div>
    );
};
