import { useState } from "react"
import { useDispatch } from "react-redux";
import { userSignup } from "redux/auth/auth-operations";

export const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const onInputChange = (e) => {
        if (e.target.name === "name") {
            setName(e.target.value);
        } else if (e.target.name === "email") {
            setEmail(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const user = {
            name,
            email,
            password
        }
        e.preventDefault();
        dispatch(userSignup(user));
        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <form action="" onSubmit={submitHandler}>
            <label>
                Your name
                <input type="text" name="name" value={name} onChange={onInputChange} />
            </label>
            <label >
                Your email
                <input type="email" name="email" value={email} onChange={onInputChange} />
            </label>
            <label>
                Your password
                <input type="password" name="password" value={password} onChange={onInputChange}/>
            </label>
            <button type="submit">Sign up</button>
        </form>
    )
}