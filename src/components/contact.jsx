import React from "react";
import Divider from '@mui/material/Divider';
import { useForm } from '@formspree/react';
import { TextField, Button, Container, Box } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



function Contact() {
  const formRef = React.useRef(null);
  const [state, handleSubmit] = useForm(process.env.REACT_APP_FORMSPREE_ID);
  const [showSnackbar, setShowSnackbar] = React.useState(false);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowSnackbar(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    handleSubmit(event)
      .then((submission) => {
        // console.log(submission.body.ok);

        if (submission.body && submission.body.ok) {
          if (formRef.current) {
            formRef.current.reset();
          }
          setShowSnackbar(true);
        } else {
          console.log('Form submission failed:', submission);
        }
      })
      .catch((error) => {
        console.error('Form submission error:', error);
      });
  };


  return (
    <section id='contact'>
      <Divider><h2>Contact Me</h2></Divider>

      <Container maxWidth="sm">
        <Box mx={5}>
          <form ref={formRef} onSubmit={handleFormSubmit}>
            <TextField
              fullWidth
              required
              margin="normal"
              label="Name"
              variant="standard"
              name="name"
            />
            <TextField
              fullWidth
              required
              margin="normal"
              label="Email"
              variant="standard"
              type="email"
              name="email"
            />
            <TextField
              fullWidth
              required
              margin="normal"
              label="Message"
              variant="standard"
              multiline
              rows={6}
              name="message"
            />
            <div style={{ display: 'flex', justifyContent: 'left', gap: 10 }}>
              <Button type="submit" variant="contained" disabled={state.submitting} color="primary" style={{ width: '10vw' }}>
                Send
              </Button>
              <Button type="reset" variant="outlined" color="secondary" style={{ width: '10vw' }}>
                Reset
              </Button>
            </div>
          </form>
        </Box>


        <Snackbar open={showSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} autoHideDuration={4000} onClose={handleSnackbarClose}>
          <Alert onClose={handleSnackbarClose} severity="success">
            Thank You for reaching out!<br />I will surely get back to you.
          </Alert>
        </Snackbar>


      </Container>
    </section>
  );
};


export default Contact;