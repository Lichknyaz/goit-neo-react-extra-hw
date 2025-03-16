import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Box, Button, TextField, Typography } from "@mui/material";

function LoginPage() {
  const initialValues = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
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
      <Typography variant="h2">Please, Log In</Typography>
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
              LOG IN
            </Button>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
}

export default LoginPage;
