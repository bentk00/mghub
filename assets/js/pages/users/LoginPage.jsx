import React, {useContext, useState} from 'react';
import AuthentificationApi from "../../services/AuthentificationApi";
import Field from "../../components/forms/Field";
import AuthContext from "../../context/AuthContext";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import mg1 from "../../../images/mg1.png";


function LoginPage({history}) {

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState('');

    const handleChange = ({currentTarget}) => {
        const {value, name} = currentTarget;
        setCredentials({...credentials, [name]: value});
    }

    const {setIsAuthenticated} = useContext(AuthContext);
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await AuthentificationApi.authenticate(credentials);
            setError("");
            setIsAuthenticated(true);
            toast.success("Login success, welcome to Mg hub.")
            history.replace("/customers")
        } catch (error) {
            console.log(error);
            setError("Auccun compte ne possède cette adresse, ou alors les information ne correspondent pas !");
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <div className="card text-white bg-primary mb-3">
                            <div className="card-header">Login to Mg hub.</div>
                            <form onSubmit={handleSubmit}>
                                <div className="card-body">
                                    <p className="card-title mb-3">Join the Moroccan Gammers Hub.</p>
                                    <Field label="Adresse email"
                                           name="username"
                                           type="email"
                                           value={credentials.username}
                                           onChange={handleChange}
                                           placeholder="Adresse email de connexion"
                                           error={error}
                                    />

                                    <Field label="Mot de passe"
                                           name="password"
                                           type="password"
                                           value={credentials.password}
                                           onChange={handleChange}
                                    />

                                    <div className="form-group d-flex justify-content-between align-items-center">
                                        <button type="submit" className="btn btn-success">Sign-in</button>
                                        <Link to="/register" className="btn btn-link">Ma3ndekch compte ?</Link>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="col-md-6 mt-3">
                        <div className="card text-white bg-primary mb-3">
                            <h4 className="card-header">Mer7ba Bikom F' Mg Hub.</h4>
                            <img className="img-fluid" src={mg1} alt="Card image"/>
                            <div className="card-footer">
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusamus alias amet dignissimos dolor excepturi, fugit?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginPage;
