import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Form = () => {
    const {store, actions} = useContext(Context)
    //la pagina no puede recargarse!!!!!! 

    const handleSubmit = e => {
        e.preventDefault();//evita que se recargue
        actions.addContact(formData)
    }  

    const [formData, setFormdata] = useState({
        fname: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormdata({...formData, [e.target.name]: e.target.value});
    };


    return (
        <>
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <input type="text" className="form-control" placeholder="full name" value={formData.fname} name="fname" onChange={handleChange}/>
                <input type="text" className="form-control" placeholder="email" value={formData.email} name="email" onChange={handleChange}/>
                <input type="text" className="form-control" placeholder="phone" name="phone" value={formData.phone} onChange={handleChange}/>
                <input type="submit" className="btn btn-primary" value={'añadir'} />
            </form>
        </>
    )
}