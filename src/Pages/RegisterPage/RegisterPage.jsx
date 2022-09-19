import { useState } from "react"
import { useDispatch } from "react-redux";
import { userSignup } from "redux/auth/auth-operations";
import { AddButton } from "components/Atoms/Buttons.styled";
import { Form, LogLabel, LogInput } from "Pages/LoginPage/LoginPage.styled";

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
        <Form action="" onSubmit={submitHandler}>
            <LogLabel>
                Your name:
                <LogInput type="text" name="name" value={name} onChange={onInputChange} />
            </LogLabel>
            <LogLabel >
                Your email:
                <LogInput type="email" name="email" value={email} onChange={onInputChange} />
            </LogLabel>
            <LogLabel>
                Your password:
                <LogInput type="password" name="password" value={password} onChange={onInputChange}/>
            </LogLabel>
            <AddButton type="submit">Sign up</AddButton>
        </Form>
    )
}