import { NavLink } from "react-router-dom"
import { HeaderDiv, NavDiv } from "./Header.styled"
import { useSelector } from "react-redux"
import { getIsLogedIn} from "redux/auth/auth-selectors"
import { UserMenu } from "components/UserMenu/UserMenu"
import { RegisterLoginMenu } from "components/RegisterLoginMenu/RegisterLoginMenu"

export const Header = () => {
    const isLogedIn = useSelector(getIsLogedIn);
    return (
        <HeaderDiv>
            <NavDiv>
            <NavLink to="/goit-react-hw-08-phonebook">Home</NavLink>
            <NavLink to="/goit-react-hw-08-phonebook/contacts">Contacts</NavLink>
            </NavDiv>
            <h1>Phonebook</h1>
            {isLogedIn ? <UserMenu/> : <RegisterLoginMenu/>}
        </HeaderDiv>
    )
}