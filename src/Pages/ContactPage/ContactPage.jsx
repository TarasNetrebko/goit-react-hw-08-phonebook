import { useSelector } from "react-redux";
import { getContacts } from "../../redux/contacts/selector";
import { getFilter } from "../../redux/filter/selector";
import { PhonebookForm } from "components/PhonebookForm/PhonebookForm";
import { Filter } from "components/Filter/Filter";
import { PhonebookList } from "components/PhonebookList/PhonebookList";

export const ContactPage = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact => {
    return (contact.name.toLowerCase().includes(normalizedFilter) || contact.number.includes(normalizedFilter))
    }      
  );
    return (
        <>
        <PhonebookForm />
          <h2>Contacts</h2>
          <Filter/>
          <PhonebookList
            contacts={filteredContacts}
            />
        </>
    )
}