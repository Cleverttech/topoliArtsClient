import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardContent, Card,  Grid,  TextField,  Button,  FormControl,} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "40ch",
    },
    flexGrow: 1,
    paddingTop: 25,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function LoginForm (props) {
    const classes = useStyles();
    const { onLogin } = props
    return (
      <div className={classes.root}>
      <Grid container direction="row" justify="center"  >
        <Grid item>
          <Card className={classes.paper} >
            <CardContent >
              <form onSubmit={onLogin}>
                <FormControl noValidate autoComplete="off" >
                  <TextField
                    id="outlined-basic"
                    name="email"
                    label="Email"
                    variant="outlined"
                    />
                  <TextField
                    id="outlined-basic"
                    name="password"
                    type="password"
                    label="Password"
                    variant="outlined"
                    />
                    
                  <Button style={{width:"45%"}} type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </FormControl>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}


export default LoginForm;
