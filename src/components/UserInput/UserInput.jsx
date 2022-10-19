import React from "react";
import {
  Container,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  Typography,
  TextField,
} from "@mui/material";

const UserInput = ({
  handleChange,
  handleSubmit,
  string,
  handleClose,
  handleOpen,
  open,
}) => {
  return (
    <>
      <Container>
        <Typography
          variant="h3"
          style={{
            fontWeight: "bolder",
            margin: "80px 0px 20px",
            width: "500px",
            color: "#1c2d4bf5",
          }}
        >
          Award-winning Compliance and Soft Skills Training for Your Company
        </Typography>
        <Typography
          style={{
            fontSize: "1.3em",
            width: "400px",
            fontWeight: "lighter",
            color: "white",
            lineHeight: "20px",
          }}
        >
          Media Partners provides the powerful training content you need,
          whether you're complying with a mandate or building critical workforce
          skills.{" "}
        </Typography>
        <Button
          style={{
            color: "white",
            margin: "20px auto",
            backgroundColor: "#1c2d4bf5",
            width: "auto",
            fontSize: "1.2em",
            padding: '12px 24px',
            fontWeight: 'lighter',
            borderRadius: '30px'
          }}
          onClick={handleOpen}
        >
          Click here for a demo
        </Button>
      </Container>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Please enter a word</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To have your word tested through our API please type a word and
            click Submit.
          </DialogContentText>
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              fullWidth
              id="searchTerm"
              margin="dense"
              name="string"
              variant="standard"
              autoComplete="off"
              onChange={handleChange}
              required
              value={string}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button style={{ color: "grey" }} onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UserInput;
