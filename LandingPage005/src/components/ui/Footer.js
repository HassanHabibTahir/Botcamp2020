import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import { makeStyles } from '@material-ui/core/styles';
import footerAornment from "../../assets/Footer Adornment.svg"
import Grid from '@material-ui/core/Grid';
import Hidden from "@material-ui/core/Hidden";
import facebook from '../../assets/facebook.svg';
import instgram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
const useStyles = makeStyles(theme => ({

  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: "relative"
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em"
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em"
    }
  },
  mainContainer: {

    position: "absolute"
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0 75rem",
    fontWeight: "bold"
  },
  gridItem: {
    margin: "3em"
  },
  icon:{
    height:"4em",
    width:'4em',
    [theme.breakpoints.down('xs')]:{
      height:"2.5em",
      width:"2.5em"
    }
  },
  socialContainer:{
    position:'absolute',
    marginTop:"-6em",
    right:"1.5em",
    [theme.breakpoints.down("xs")]:{
      right:"0.6em"
    }
  }

}))
export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item>
       <Grid item className={classes.gridItem}>
             <Grid container direction="column" to="/" spacing={2}>

              <Grid item className={classes.link}>Home</Grid>

              
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
       <Grid item className={classes.gridItem}>
             <Grid container direction="column" spacing={2}>

              <Grid item className={classes.link}>Services</Grid>

              <Grid item className={classes.link}>Custome Software Development</Grid>

              <Grid item className={classes.link}>Mobile App Development</Grid>

              <Grid item className={classes.link}>Web Site Development</Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
        <Grid item className={classes.gridItem}>
             <Grid container direction="column" spacing={2}>

              <Grid item className={classes.link}>The Revolution</Grid>

              <Grid item className={classes.link}>Vision</Grid>

              <Grid item className={classes.link}>Technology</Grid>

              <Grid item className={classes.link}>Process</Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
        <Grid item className={classes.gridItem}>
             <Grid container direction="column" spacing={2}>

              <Grid item className={classes.link}>About Us</Grid>

              <Grid item className={classes.link}>History</Grid>

              <Grid item className={classes.link}>Team</Grid>

              <Grid item className={classes.link}>Contcact Us</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Hidden>
      <img className={classes.adornment}
        alt="black decorative slash"
        src={footerAornment} />

<Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
<Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
  <img alt="facebook logo" src={facebook} className={classes.icon}/>
</Grid>
<Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
  <img alt="twittere logo" src={twitter} className={classes.icon} />
</Grid>
<Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
  <img alt="instagram logo" src={instgram} className={classes.icon} />
</Grid>
</Grid>

    </footer>
  )
}
