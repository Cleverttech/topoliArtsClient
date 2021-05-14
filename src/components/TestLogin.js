import React from "react";
import {
  Avatar,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";

function TestLogin() {
  const paperStyle = {
    padding: "30px 20px",
    width: 375,
    margin: "30px auto",
  };

  const avatarStyle = {
    backgroundColor: "#799cc6",
  };
  const buttonStyle = {
    margin: "8px 0",
  };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2>Login</h2>
        </Grid>

        <form>
          <TextField
            name="email"
            fullWidth
            label="Email"
            placeholder="Enter email"
          />
          <TextField
            name="password"
            fullWidth
            label="Password"
            placeholder="Enter password"
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" />}
            label="Remember me"
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            style={buttonStyle}
          >
            Login
          </Button>

          <Typography>
            {" "}
            Do you have an account ?<Link href="#">Resgister </Link>
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
}

export default TestLogin;
