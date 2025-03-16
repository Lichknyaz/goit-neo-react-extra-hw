import { useDispatch } from "react-redux";
import { setNameFilter, setPhoneFilter } from "../../redux/filter/filtersSlice";
import { Box, TextField } from "@mui/material";

function SearchBox() {
  const dispatch = useDispatch();

  const handleNameOnUpdate = (evt) => {
    dispatch(setNameFilter(evt.target.value));
  };

  const handlePhoneOnUpdate = (evt) => {
    dispatch(setPhoneFilter(evt.target.value));
  };

  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: 500,
      }}
    >
      <TextField
        id="outlined-basic"
        label="Find contacts by name"
        variant="outlined"
        name="search"
        onChange={handleNameOnUpdate}
        fullWidth
      />

      <TextField
        id="outlined-basic"
        label="Find contacts by phone"
        variant="outlined"
        name="phone"
        onChange={handlePhoneOnUpdate}
        fullWidth
      />
    </Box>
  );
}

export default SearchBox;
