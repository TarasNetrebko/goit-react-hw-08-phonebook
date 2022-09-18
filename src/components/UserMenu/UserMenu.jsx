import { LoginDiv } from "components/Header/Header.styled"
import { useSelector } from "react-redux";
import { getUser } from "redux/auth/auth-selectors";
import { useDispatch } from "react-redux";
import { userLogout } from "redux/auth/auth-operations";


export const UserMenu = () => {
    const user = useSelector(getUser);
    const dispatch = useDispatch();
    return (
        <LoginDiv>
                <span>{user.email}</span>
            <button type="button" onClick={() => dispatch(userLogout())}>Logout</button>
        </LoginDiv>
    )
}