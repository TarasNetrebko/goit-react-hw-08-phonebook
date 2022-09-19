import { useState } from "react"
import { useDispatch } from "react-redux";
import { userLogin } from "redux/auth/auth-operations";
import { AddButton } from "components/Atoms/Buttons.styled";
import { Form, LogLabel, LogInput } from "./LoginPage.styled";

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
        <Form action="" onSubmit={submitHandler}>
            <LogLabel >
                Your email
                <LogInput type="email" name="email" value={email} onChange={onInputChange} />
            </LogLabel>
            <LogLabel>
                Your password
                <LogInput type="password" name="password" value={password} onChange={onInputChange}/>
            </LogLabel>
            <AddButton type="submit">Log in</AddButton>
        </Form>
    )
}