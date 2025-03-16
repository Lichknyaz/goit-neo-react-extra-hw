import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contactsOps";
import { Box, Button, TextField } from "@mui/material";

function ContactForm() {
  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d+$/, "Only numbers are allowed")
      .min(10, "Minimum 10 digit number!")
      .max(12, "Maximum 12 digit number!")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        {({ errors, touched }) => (
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
                  <TextField
                    {...field}
                    label="Name"
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    fullWidth
                  />
                )}
              </Field>

              <Field name="number">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Number"
                    error={touched.number && Boolean(errors.number)}
                    helperText={touched.number && errors.number}
                    fullWidth
                  />
                )}
              </Field>

              <Button type="submit" variant="contained">
                Add Contact
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default ContactForm;
