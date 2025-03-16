import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/contactsSlice";
import { Grid2 } from "@mui/material";

function ContactList({ setOpenModal, setContactDeleteId }) {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <Grid2 container spacing={2} width="100%">
      {contacts.map(({ name, number, id }) => (
        <Grid2 key={id} size={4}>
          <Contact
            name={name}
            number={number}
            id={id}
            setOpenModal={setOpenModal}
            setContactDeleteId={setContactDeleteId}
          />
        </Grid2>
      ))}
    </Grid2>
  );
}

export default ContactList;
