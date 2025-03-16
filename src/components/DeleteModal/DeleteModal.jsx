import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOps";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function DeleteModal({ setOpenModal, openModal, contactDeleteId }) {
  const handleClose = () => setOpenModal(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contactDeleteId));
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure want to delete this contact?
          </Typography>
          <Stack spacing={2} direction="row">
            <Button
              variant="outlined"
              onClick={() => {
                handleDelete(contactDeleteId);
                handleClose();
              }}
            >
              Yes
            </Button>
            <Button onClick={handleClose} variant="outlined">
              No
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

export default DeleteModal;
