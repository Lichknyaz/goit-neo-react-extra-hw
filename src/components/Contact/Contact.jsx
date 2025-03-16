import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";

function Contact({ name, number, id, setOpenModal, setContactDeleteId }) {
  return (
    <Card sx={{ gap: 2 }}>
      <CardContent>
        <Stack spacing={1}>
          <Box sx={{ display: "flex" }}>
            <PersonIcon sx={{ fontSize: 32 }} />
            <Typography
              variant="h5"
              component="div"
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "100%",
              }}
            >
              {name}
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <LocalPhoneIcon sx={{ fontSize: 32 }} />

            <Typography variant="h6">
              {number.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}
            </Typography>
          </Box>
          <Box>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={() => {
                setOpenModal(true);
                setContactDeleteId(id);
              }}
            >
              Delete
            </Button>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default Contact;
