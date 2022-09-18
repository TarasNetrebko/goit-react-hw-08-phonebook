import { useState } from "react"
import { useDispatch } from "react-redux";
import { userLogin } from "redux/auth/auth-operations";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const onInputChange = (e) => {        
        e.target.name === "email" ? setEmail(e.target.value) : setPassword(e.target.value);         
    }
    const submitHandler = (e) => {
        const user = {
            email,
            password
        }
        e.preventDefault();
        dispatch(userLogin(user));
        setEmail("");
        setPassword("");
    }

    return (
        <form action="" onSubmit={submitHandler}>
            <label >
                Your email
                <input type="email" name="email" value={email} onChange={onInputChange} />
            </label>
            <label>
                Your password
                <input type="password" name="password" value={password} onChange={onInputChange}/>
            </label>
            <button type="submit">Log in</button>
        </form>
    )
}