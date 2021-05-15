import React from "react";

import {
  Avatar,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormLabel,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  // KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

function BookReadingForm() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    online: true,
    inPerson: false,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { online, inPerson } = state;
  const error = [online, inPerson].filter((v) => v).length !== 1;

  const paperStyle = {
    padding: "30px 20px",
    width: 375,
    margin: "30px auto",
  };

  const avatarStyle = {
    backgroundColor: "#7f7f7f",
  };
  const btnStyle = {
    marginTop: "20px",
  };
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  console.log(selectedDate);

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <ScheduleIcon />
          </Avatar>
          <h2>Book here!</h2>
          <Typography variant="caption" gutterBottom>
            Please enter all fields to book
          </Typography>
        </Grid>

        <form>
          <TextField
            as={TextField}
            name="fullname"
            fullWidth
            label="Fullname"
            placeholder="Enter fullname"
          />
          <TextField
            as={TextField}
            name="email"
            fullWidth
            label="Email"
            placeholder="Enter Email"
          />
          <TextField
            as={TextField}
            name="telephone"
            fullWidth
            label="Telephone"
            placeholder="Enter email"
          />

          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                fullWidth
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <TextField
            as={TextField}
            name="message"
            fullWidth
            label="Message"
            type="text"
          />
          <FormControl
            required
            error={error}
            component="fieldset"
            className={classes.formControl}
          >
            <FormLabel component="legend">Please choose one</FormLabel>
            <RadioGroup style={{ display: "initial" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={online}
                    onChange={handleChange}
                    name="online"
                  />
                }
                label="Online "
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={inPerson}
                    onChange={handleChange}
                    name="inPerson"
                  />
                }
                label="In Person"
              />
            </RadioGroup>
          </FormControl>
          <Button
            style={btnStyle}
            type="submit"
            variant="contained"
            color="primary"
          >
            Request Booking
          </Button>
        </form>
      </Paper>
    </Grid>
  );
}

export default BookReadingForm;
