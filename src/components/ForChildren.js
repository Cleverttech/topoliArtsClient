import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Typography,
  Grid,
  Box,
  Link,
  IconButton,
} from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import BookReadingForm from "./BookReadingForm";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    // display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const imageStyle = {
  width: "280px",
  display: "flex",
  margin: "auto",
};
const FriedaCover = {
  width: "100%",
};
const sectionStyle = { width: "70%", margin: "auto" };
const friedaIntText = {
  margin: "20px",
};

function ForChildren() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [openVol1, setOpenVol1] = useState(false);
  const [openVol2, setOpenVol2] = useState(false);
  const [openFriedaInt, setOpenFriedaInt] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenVol1 = () => {
    setOpenVol1(true);
  };
  const handleCloseVol1 = () => {
    setOpenVol1(false);
  };
  const handleOpenVol2 = () => {
    setOpenVol2(true);
  };
  const handleCloseVol2 = () => {
    setOpenVol2(false);
  };
  const handleOpenFriedaInt = () => {
    setOpenFriedaInt(true);
  };
  const handleCloseFriedaInt = () => {
    setOpenFriedaInt(false);
  };
  const closeStyle = {
    color: "white",
  };
  const centerBtn = {
    justifyContent: "center",
    display: "flex",
    marginTop: "20px",
  };

  return (
    <div className={classes.root} style={sectionStyle}>
      <Typography fontWeight="fontWeightLight">
        <Box textAlign="center" m={6}>
          <h4>Book Readings</h4>
        </Box>
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua.
          </p>
          <Box style={centerBtn}>
            <Button type="button" onClick={handleOpen} color="primary">
              Schedule a Book Reading
            </Button>
          </Box>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Grid>
                <BookReadingForm />
                <IconButton onClick={handleClose}>
                  <CancelIcon fontSize="large" style={closeStyle} />
                </IconButton>
              </Grid>
            </Fade>
          </Modal>
        </Grid>

        <Grid item xs={6} fullWidth>
          <Box>
            <img
              fullWidth
              style={imageStyle}
              src="../assets/mädchen_intern.jpg"
              alt="book-reading-image"
              loading="lazy"
            />
          </Box>
        </Grid>
      </Grid>
      <Typography fontWeight="fontWeightLight">
        <Box textAlign="center" m={6}>
          <h4>Frieda Interactive</h4>
        </Box>
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <Grid>
            <img
              style={FriedaCover}
              src="../assets/AllBooks/Frieda/cover.png"
              alt="book-reading-image"
              loading="lazy"
            />
            <Box style={centerBtn}>
              <Button
                type="button"
                onClick={handleOpenVol1}
                variant="outlined"
                color="primary"
              >
                View Frieda Vol.1
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                onClick={handleCloseVol1}
                open={openVol1}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={openVol1}>
                  <img src="../assets/AllBooks/Frieda/MDerenbach_Frieda_3.jpg"></img>
                </Fade>
              </Modal>
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            fullWidth
            style={FriedaCover}
            src="../assets/AllBooks/Frieda/coverband2.png"
            alt="book-reading-image"
            loading="lazy"
          />
          <Box style={centerBtn}>
            <Button
              type="button"
              onClick={handleOpenVol2}
              variant="outlined"
              color="primary"
            >
              View Frieda Vol.2
            </Button>
          </Box>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            onClick={handleCloseVol2}
            open={openVol2}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={openVol2}>
              <img src="../assets/AllBooks/Frieda/MDerenbach_Frieda_1.jpg"></img>
            </Fade>
          </Modal>
        </Grid>
        <Typography fontWeight="fontWeightLight" style={friedaIntText}>
          <Box textAlign="center">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          </Box>
          <Box style={centerBtn}>
            <Button type="button" onClick={handleOpenFriedaInt} color="primary">
              Frieda from the kids Perspective
            </Button>
          </Box>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            onClick={handleCloseFriedaInt}
            open={openFriedaInt}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={openFriedaInt}>
              <img src="../assets/AllBooks/Frieda/MDerenbach_Frieda_8.jpg"></img>
            </Fade>
          </Modal>
        </Typography>
      </Grid>
    </div>
  );
}

export default ForChildren;
