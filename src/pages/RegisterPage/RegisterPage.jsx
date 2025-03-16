import { Field, Form, Formik } from "formik";
import { register } from "../../redux/auth/authOps";
import { useDispatch } from "react-redux";
import { Box, Button, TextField, Typography } from "@mui/material";

function RegisterPage() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2">Please, Register</Typography>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
              width: 500,
            }}
          >
            <Field name="name">
              {({ field }) => (
                <TextField {...field} type="text" label="Name" fullWidth />
              )}
            </Field>
            <Field name="email">
              {({ field }) => (
                <TextField {...field} type="email" label="Email" fullWidth />
              )}
            </Field>

            <Field name="password">
              {({ field }) => (
                <TextField
                  {...field}
                  type="password"
                  label="Password"
                  fullWidth
                />
              )}
            </Field>

            <Button type="submit" variant="contained">
              SIGN UP
            </Button>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
}

export default RegisterPage;
