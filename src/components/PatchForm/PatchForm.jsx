import { useState } from "react"
import { useDispatch } from "react-redux";
import  PropTypes  from "prop-types"
import { patchContact } from "redux/contacts/contacts-operations";
import { ListButtonPatch, ListButtonDelete } from "components/Atoms/Buttons.styled";
import { Label, Form, Buttons, Input } from "./PatchForm.styled";

export const PatchForm = ({id, wantToPatch}) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const dispatch = useDispatch();
    const changeHandler = (e) => {
        e.target.name === "name" ? setName(e.target.value) : setNumber(e.target.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();

        const data = {
            id,
            contact: {
                name,
                number,
            }
    };
     dispatch(patchContact(data));
        setName("");
        setNumber("");
        wantToPatch(false);
    }
    return (
        <Form action="" onSubmit={onSubmitHandler}>
            <Label >
                New name
                <Input type="text" name="name" onChange={changeHandler} />
            </Label>
            <Label >
                New number
                <Input type="number" name="tel" onChange={changeHandler} />
            </Label>
            <Buttons>
            <ListButtonPatch type="submit">Submit</ListButtonPatch>
            <ListButtonDelete type="button" onClick={() => wantToPatch(false)}>Cancel</ListButtonDelete>
            </Buttons>
        </Form>
    )
}
PatchForm.propTypes = {
    id: PropTypes.string.isRequired,
    wantToPatch: PropTypes.func.isRequired,
} 