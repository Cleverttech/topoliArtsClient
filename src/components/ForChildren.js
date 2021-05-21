import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Grid, Box, IconButton, GridList, GridListTile, useTheme } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import BookReadingForm from "./BookReadingForm";
import CancelIcon from "@material-ui/icons/Cancel";
import Carousel from './Carousel'


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
  fontWeight: "bolder",
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
  const kidsPaintings = [
    {    
      imgPath: "../assets/KidsImages/AlihanT.jpg",
    },
    {    
      imgPath: "../assets/KidsImages/Beria.jpg",
    },
    {    
      imgPath: "../assets/KidsImages/Berkan.jpg",
    },
    {    
      imgPath: "../assets/KidsImages/Daniel3.jpg",
    },
    {    
      imgPath: "../assets/KidsImages/florian.jpg",
    },
    {    
      imgPath: "../assets/KidsImages/Helena.jpg",
    },
    {    
      imgPath: "../assets/KidsImages/jakob.jpg",
    },
    {    
      imgPath: "../assets/KidsImages/Jan-Hendrik.jpg",
    },
    {    
      imgPath: "../assets/KidsImages/Jan2.jpg",
    },
    {    
      imgPath: "../assets/KidsImages/Jonas_lebende wellen.jpg",
    },
    {    
      imgPath: "../assets/KidsImages/Laurenz.jpg",
    },
    {    
      imgPath: "../assets/KidsImages/Lea.jpg",
    },
    {    
      imgPath: "../assets/KidsImages/lena.jpg",
    },
    {    
      imgPath: "../assets/KidsImages/lena2.jpg",
    },
   
    {    
      imgPath: "../assets/KidsImages/LisaD.jpg",
    },
   
    {    
      imgPath: "../assets/KidsImages/Luca.jpg",
    },
   
    {    
      imgPath: "../assets/KidsImages/Malte.jpg",
    },
    {    
      imgPath: "../assets/KidsImages/Max.jpg",
    },
    {    
      imgPath: "../assets/KidsImages/Merve.jpg",
    },
    {    
      imgPath: "../assets/KidsImages/Michelle.jpg",
    },
    {    
      imgPath: "../assets/KidsImages/Onur.jpg",
    },
    {    
      imgPath: "../assets/KidsImages/stella.jpg",
    },
    {    
      imgPath: "../assets/KidsImages/Yusuf.jpg",
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
          Matthias Derenbach, born in 1979, is a passionate draftsman. He finished his studies at the Rhein-Sieg-Kunst Akademie in 2007 with a diploma grade of 1.0. The author has been working as a freelance illustrator and communication designer in Cologne since 2008. In 2009 he founded the "Topoli Verlag" to publish the Frieda series.
          How the adventure began ...After I was born, I ate, drank and slept a lot. Eventually I got older and was able to hold my first pen. After kindergarten I went to school. Frieda started a few years ago and dates back to my time as a student at the Rhein Sieg Kunst Akademie. I drew a little girl and a huge fish (about the size of a gym). Protruding ears, oversized red rubber boots and a small, tough figure were created that can also accomplish the seemingly impossible. The picture raised questions: who is that? Why the rubber boots? Who is the fish Did the girl catch the fish or did the fish catch the girl? Where does she live and what kind of friends does she have? Little by little, Frieda took shape as the protagonist and a story emerged from many ideas and fantasies.
          Frieda - design and marketing of a picture book series - then became my diploma thesis, which was rated very well.

          I am infinitely grateful to you and look forward to an exciting and exciting time! Frieda on earth! And very special thanks to you, Konstantinos!
     

          I am infinitely grateful to you and look forward to an exciting and exciting time! Frieda on earth! And very special thanks to you, Konstantinos!
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
          Frieda the adventure begins (Volume 1)
          “Where's he going?” Frieda is worried about Papa, the old adventurer who has been on the ocean for so long. Involuntarily, she is drawn into a great adventure with Boo, the spherical sparrow, and the five wise stones, which is not just about looking for papa.
          Frieda in the realm of the seahorses (Volume 2)
          “Will I find him?” The search for her missing papa leads Frieda and her friends into an enchanted world deep down in the infinite ocean. Boo, Abu, Hihi and the five wise stones are loyally at her side on a fantastic journey full of dangers and surprises. But is Frieda ready for the great task that has been waiting for her there for so long?
          The special thing about "Frieda" is the concept of the hands-on story! Do you have an idea how the story could go on in Volume 3? Then just send us a letter with your suggestions and self-painted pictures by post. We look forward to your contributions!
          73 lavishly illustrated color pages, A4 landscape format, hardcover. Particularly suitable for children from 5 years!

          </Box>
        </Typography>

      </Grid>

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
