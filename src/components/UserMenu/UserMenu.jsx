import { LoginDiv } from "components/Header/Header.styled"
import { useSelector } from "react-redux";
import { getUser } from "redux/auth/auth-selectors";
import { useDispatch } from "react-redux";
import { userLogout } from "redux/auth/auth-operations";
import { UserButton } from "components/Atoms/Buttons.styled";


export const UserMenu = () => {
    const user = useSelector(getUser);
    const dispatch = useDispatch();
    return (
        <LoginDiv>
                <b>{user.email}</b>
            <UserButton type="button" onClick={() => dispatch(userLogout())}>Logout</UserButton>
        </LoginDiv>
    )
}