import React, { useState } from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const createUser = (e) => {
        e.preventDefault();
        
        let formIsValid = true;
        const newErrors = { ...errors };

        if (firstName.trim() === "") {
            newErrors.firstName = "";
        } else if (firstName.length < 2) {
            newErrors.firstName = "First Name must be at least 2 characters";
            formIsValid = false;
        } else {
            newErrors.firstName = "";
        }

        if (lastName.trim() === "") {
            newErrors.lastName = "";
        } else if (lastName.length < 2) {
            newErrors.lastName = "Last Name must be at least 2 characters";
            formIsValid = false;
        } else {
            newErrors.lastName = "";
        }

        if (email.trim() === "") {
            newErrors.email = "";
        } else if (email.length < 5) {
            newErrors.email = "Email must be at least 5 characters";
            formIsValid = false;
        } else {
            newErrors.email = "";
        }

        if (password.trim() === "") {
            newErrors.password = "";
        } else if (password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
            formIsValid = false;
        } else {
            newErrors.password = "";
        }

        if (password !== confirmPassword) {
            newErrors.password = "Passwords must match";
            formIsValid = false;
        }

        if (!formIsValid) {
            setErrors(newErrors);
        } else {
            setErrors({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            });
            
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        }
    };

    return (
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
            <div>
                <label>Email Address: </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};

export default Form;
