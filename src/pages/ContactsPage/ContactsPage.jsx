import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import {
  selectError,
  selectIsLoading,
} from "../../redux/contacts/contactsSlice";
import ContactList from "../../components/ContactList/ContactList";
import { useEffect, useState } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

function ContactsPage() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [contactDeleteId, setContactDeleteId] = useState("");

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingBottom: "20px",
        }}
      >
        <Typography variant="h2">Phonebook</Typography>
        <ContactForm />
        <SearchBox />
        {isLoading && !error && (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
        {!isLoading && !error && (
          <ContactList
            setOpenModal={setOpenModal}
            setContactDeleteId={setContactDeleteId}
          />
        )}
      </Box>
      <DeleteModal
        setOpenModal={setOpenModal}
        openModal={openModal}
        contactDeleteId={contactDeleteId}
      />
    </Container>
  );
}

export default ContactsPage;
