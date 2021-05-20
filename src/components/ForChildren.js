import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Grid, Box, IconButton, GridList, GridListTile, useTheme } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import BookReadingForm from "./BookReadingForm";
import CancelIcon from "@material-ui/icons/Cancel";
import Carousel from './Carousel'
import kidsPaintings from '../kidsImages'

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    justifyContent: "center",
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
  gridList: {
    width: "100vw",
    height: 450,
    paddingBottom: "100px"
  },
}));

const imageStyle = {
  width: "100% ",
  display: "flex",
  margin: "auto",
  paddingTop: "5px"
};
const FriedaCover = {
  width: "100%",
};
const sectionStyle = { width: "80%", margin: "100px auto" };
const friedaText = {
  margin: "auto",
  marginBottom: "20px",
};
const friedaIntText = {
  margin: "auto",
  marginBottom: "40px",
  fontWeight: "bolder"
};

function ForChildren() {
  const classes = useStyles();
  const vol1 = [
    {
      imgPath: "../assets/AllBooks/Frieda/MDerenbach_Frieda_1.jpg",
    },
    {
      imgPath: "../assets/AllBooks/Frieda/MDerenbach_Frieda_3.jpg",
    },
    {
      imgPath: "../assets/AllBooks/Frieda/MDerenbach_Frieda_5.jpg",
    },
    {
      imgPath: "../assets/AllBooks/Frieda/MDerenbach_Frieda_8.jpg",
    },

  ]
  const vol2 = [
    {
      imgPath: "../assets/AllBooks/Frieda/MDerenbach_Frieda_11.jpg",
    },
    {
      imgPath: "../assets/AllBooks/Frieda/MDerenbach_Frieda_12.jpg",
    },
    {
      imgPath: "../assets/AllBooks/Frieda/MDerenbach_Frieda_8.jpg",
    },

  ]
  const theme = useTheme()
  const dividerStyle = { borderTop: `4px solid ${theme.palette.primary.main}`, marginTop: "30%", marginBottom: "10%", width: "100%" }
  const [open, setOpen] = useState(false);
  const [openVol1, setOpenVol1] = useState(false);
  const [openVol2, setOpenVol2] = useState(false);


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
  const closeStyle = {
    color: "white",
  };
  const centerBtn = {
    justifyContent: "center",
    display: "flex",
    margin: "20px",
  };

  return (
    <div className={classes.root} style={sectionStyle}>
      <Typography fontWeight="fontWeightLight">
        <Box textAlign="center">
          <Typography variant="h3" style={friedaIntText}>
            Book Readings
           </Typography>
        </Box>
      </Typography>


      <Grid container spacing={6}>
        <Grid item lg={7} md={7} xs={12}>

          <Typography variant="p" style={friedaText}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet, consetetur
              </Typography>


          <Box style={centerBtn} >
            <Button variant="outlined" type="button" onClick={handleOpen} color="secondary">
              Schedule a Book Reading
            </Button>
          </Box>
        </Grid>
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

        <Grid item lg={5} md={5} xs={12} fullWidth>
          <Box>
            <img
              fullWidth
              style={imageStyle}
              src="../assets/MatthiasDerenbach_Lesung3.jpg"
              alt="bookreadingimage"
              loading="lazy"
            />
          </Box>
        </Grid>
      </Grid>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={dividerStyle}>
        </div>

        <Box textAlign="center" m={6}>
          <Typography variant="h3" style={friedaIntText}>
            Frieda Interactive
                </Typography>
        </Box>
      </div>


      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <Grid>
            <img
              style={FriedaCover}
              src="../assets/AllBooks/Frieda/cover.png"
              alt="bookreadingimage"
              loading="lazy"
            />
            <Box style={centerBtn}>
              <Button
                type="button"
                onClick={handleOpenVol1}
                variant="contained"
                color="secondary"
              >
                View Frieda Vol.1
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openVol1}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={openVol1}>
                  <Grid>
                    <Carousel images={vol1} />
                    <IconButton onClick={handleCloseVol1}>
                      <CancelIcon fontSize="large" style={closeStyle} />
                    </IconButton>
                  </Grid>
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
            alt="bookReadingImage"
            loading="lazy"
          />
          <Box style={centerBtn}>
            <Button
              type="button"
              onClick={handleOpenVol2}
              variant="contained"
              color="secondary"
            >
              View Frieda Vol.2
            </Button>
          </Box>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openVol2}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={openVol2}>
              <Grid style={{ padding: "-50px" }}>
                <Carousel images={vol2} />
                <IconButton onClick={handleCloseVol2}>
                  <CancelIcon fontSize="large" style={closeStyle} />
                </IconButton>
              </Grid>
            </Fade>
          </Modal>
        </Grid>


        <Typography fontWeight="fontWeightLight" style={friedaText}>
          <Box textAlign="center">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            et ea rebum.
          </Box>
        </Typography>

      </Grid>

      {/* <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={dividerStyle}>
        </div>

        <Box textAlign="center" margin="45px" >
          <Typography marginBottom="20px" variant="h3" style={friedaIntText}>
            Kids drawing Frieda
          </Typography>
        </Box>

      </div> */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={dividerStyle}>
        </div>

        <Box textAlign="center" m={6} marginTop="45px" marginBottom="60px">
          <Typography  variant="h3" style={friedaIntText}>
            Kids drawing Frieda
                </Typography>
        </Box>
      </div>

      <Grid style={{ margin: "auto"}}>

        <GridList cellHeight={300} className={classes.gridList} cols={3}>
          {kidsPaintings.map((tile) => (
            <GridListTile key={tile.imgPath} cols={tile.cols || 1}>
              <img src={tile.imgPath} alt={tile.imgPath} />
            </GridListTile>
          ))}
        </GridList>
      </Grid>
   <br></br>
    </div>
  );
}

export default ForChildren;
