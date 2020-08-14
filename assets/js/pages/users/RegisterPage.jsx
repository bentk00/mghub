import React, {useState} from 'react';
import Field from "../../components/forms/Field";
import mg1 from '../../../images/mg1.png'
import {Link} from "react-router-dom";
import AuthentificationApi from "../../services/AuthentificationApi";

const RegisterPage = props => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [passwordOk, setPasswordOk] = useState(false);


    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget;
        setUser({...user, [name]: value});
    }


    const handleSubmit = async event => {
        event.preventDefault();

        const apiErrors = {};

        if (user.password !== user.confirmPassword) {
            apiErrors.confirmPassword = "Password not mach !!!";
            setErrors(apiErrors);
            setPasswordOk(false);
        } else {
            setPasswordOk(true);
            setErrors({});
            try {
                await AuthentificationApi.register(user);
            } catch (error) {
                const {violations} = error.response.data;
                if (violations) {
                    violations.forEach(violation => apiErrors[violation.propertyPath] = violation.message)
                    setErrors(apiErrors);
                    console.log('invest violations => ', errors)
                }
            }
        }


    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <div className="card text-white bg-primary mb-3">
                            <div className="card-header">User registration.</div>
                            <form onSubmit={handleSubmit}>
                                <div className="card-body">
                                    <p className="card-title mb-3">Join the Moroccan Gammers Hub.</p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Field name='firstName'
                                                   label="First name"
                                                   placeholder="Chnou smytek ?"
                                                   error={errors.firstName}
                                                   value={user.firstName}
                                                   required
                                                   onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <Field name='lastName'
                                                   label="Last name"
                                                   placeholder="Chnou knytek ?"
                                                   error={errors.lastName}
                                                   value={user.lastName}
                                                   required
                                                   onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <Field name='email'
                                           label="Email"
                                           placeholder="Chnou email dialek ?"
                                           type="email"
                                           error={errors.email}
                                           value={user.email}
                                           required
                                           onChange={handleChange}
                                    />

                                    <div className="row">
                                        <div className="col-md-6">
                                            <Field name='password'
                                                   label="Password"
                                                   placeholder="Chi mot de passe nadi"
                                                   type="password"
                                                   required
                                                   success={passwordOk}
                                                   error={errors.password}
                                                   value={user.password}
                                                   onChange={handleChange}/>
                                        </div>
                                        <div className="col-md-6">
                                            <Field name='confirmPassword'
                                                   label="Confirm your password"
                                                   placeholder="3awd mot de passe hnaya"
                                                   type="password"
                                                   required
                                                   success={passwordOk}
                                                   error={errors.confirmPassword}
                                                   value={user.confirmPassword}
                                                   onChange={handleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group d-flex justify-content-between align-items-center">
                                        <button type="submit" className="btn btn-success">Signup</button>
                                        <Link to="/login" className="btn btn-link">3ndek compte ?</Link>
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
};

export default RegisterPage;
