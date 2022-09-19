import { ContactElement, Span } from './ListElem.styled';
import { ListButtonDelete, ListButtonPatch } from 'components/Atoms/Buttons.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import { useState } from 'react';
import { PatchForm } from 'components/PatchForm/PatchForm';

import PropTypes from 'prop-types';

export const ListElem = ({ contactId, name, number }) => {
  const dispatch = useDispatch();
  const [wantToPatch, setWantToPatch] = useState(false);
  const patchHandler = bool => {
    setWantToPatch(bool);
  };
  return (
    <ContactElement>
      <Span>
        {name}: {number}
      </Span>
      {wantToPatch ? (
        <PatchForm id={contactId} wantToPatch={patchHandler} />
      ) : (
        <ListButtonPatch type="button" onClick={() => patchHandler(true)}>
          Patch
        </ListButtonPatch>
      )}
      {!wantToPatch && <ListButtonDelete
        type="button"
        id={name}
        onClick={() => dispatch(deleteContact(contactId))}
      >
        Delete
      </ListButtonDelete> }
    </ContactElement>
  );
};

ListElem.propTypes = {
  contactId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
