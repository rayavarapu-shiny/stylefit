import { useState } from "react";

function Register() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        role: "USER"
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = async () => {

        const response = await fetch(
            "http://localhost:8080/api/auth/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            }
        );

        const data = await response.json();

        alert("Registered Successfully");

        console.log(data);
    };

    return (
        <div>

            <h1>User Registration</h1>

            <input
                type="text"
                name="name"
                placeholder="Enter Name"
                onChange={handleChange}
            />

            <br /><br />

            <input
                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={handleChange}
            />

            <br /><br />

            <input
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={handleChange}
            />

            <br /><br />

            <button onClick={handleRegister}>
                Register
            </button>

        </div>
    );
}

export default Register;