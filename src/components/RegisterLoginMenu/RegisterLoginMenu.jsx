import { NavLink } from "react-router-dom"
import { LoginDiv } from "components/Header/Header.styled"


export const RegisterLoginMenu = () => {
    return (
        <LoginDiv>
            <NavLink to="/goit-react-hw-08-phonebook/register">Registration |</NavLink>
            <NavLink to="/goit-react-hw-08-phonebook/login">| Login</NavLink>
        </LoginDiv>
    )
}