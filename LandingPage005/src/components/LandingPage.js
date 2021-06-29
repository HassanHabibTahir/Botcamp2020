import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../animations/landinganimation/data'
import { Grid, makeStyles, Button, Typography, useTheme } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ButtonArrow from './ui/ButtonArrow';
import CusotomeSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobilappsIcon from '../assets/mobileIcon.svg'
import websitesIcon from '../assets/websiteIcon.svg'
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core'
import revolutionBackgrounds from '../assets/repeatingBackground.svg'
import infoBackGround from '../assets/infoBackground.svg'
import CallAction from './ui/callAction';
import { Link } from 'react-router-dom'
const useStyles = makeStyles(theme => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em"
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: 40,
    height: 45,
    width: 145,

    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 45,
    width: 145,
  },
  buttonContainer: {
    marginTop: "1rem"
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em"
    }
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    marginTop: "3em",

    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      marginTop: 0,

    },


  },
  spacialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange
  },
  LearnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.9rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em"

    }
    // width: 145,
  },
  subtitle: {
    marginBottom: "1em"
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25
    }
  },
  revolutionBackground: {
    backgroundImage: `url(${revolutionBackgrounds})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "8em",
      paddingBottom: "8em",
      paddingLeft: 0,
      paddingRight: 0,
      borderRadius: 0
    }
  },
  infosBackGround: {
    backgroundImage: `url(${infoBackGround})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%"
  }

}))
export default function LandingPage(props) {

  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"))
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"))
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item >
        <Grid container direction="row" >
          <Grid sm item className={classes.heroTextContainer}>
            <Typography align="center" variant="h2">Bringing West Coast Technology  <br /> to MidWest</Typography>
            <Grid container justify="center" container className={classes.buttonContainer}>
              <Grid item>
                <Button variant="outlined"
                  component={Link}
                  to="/estimate"
                  className={classes.estimateButton}
                  variant="contained"
                  onClick={() => props.setValue(5)}


                  className={classes.estimateButton}>Free Estimate</Button>
              </Grid>
              <Grid>
                <Button item variant="outlined"
                  component={Link}
                  to="/revolution"
                  className={classes.learnButtonHero}
                  variant="outlined"
                  onClick={() => props.setValue(2)}

                  className={classes.learnButtonHero}> Learn More
                <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                </Button>
              </Grid>
            </Grid>

          </Grid>
          <Grid sm item className={classes.animation}>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"}   ></Lottie>
          </Grid>

        </Grid>
      </Grid>
      <Grid item>  {/* Custom software Block*/}

        <Grid container direction="row" className={classes.serviceContainer} justify={matchesSm ? "center" : undefined}>

          <Grid item style={{ marginLeft: matchesSm ? 0 : "5em", textAlign: matchesSm ? "center" : undefined }}>
            <Typography variant="h4">
              Custome Software  Development
              </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Save Energy . Save time . Save Money
              </Typography>

            <Typography variant="subtitle1">
              Complete digital solutins , from investigation to {" "}
              <span className={classes.spacialText}> celebration</span>
            </Typography>


            <Button

              component={Link}
              to="/customsoftware"
              variant="outlined"
              className={classes.LearnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }} s


              variant="outlined" className={classes.LearnButton}>
              <span style={{ marginRight: 10 }} >
                Learn More
              </span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
            </Button>
          </Grid>
          <Grid item >
            <img alt="custome softwre iceon" src={CusotomeSoftwareIcon} className={classes.icon} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>  {/* ios/Android Block*/}

        <Grid container direction="row" className={classes.serviceContainer} justify={matchesSm ? "center" : "flex-end"}>

          <Grid item style={{ textAlign: matchesSm ? "center" : undefined }}>
            <Typography variant="h4">
              IOS/Android App Development
      </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Extend Functionaliy .Extend Access . Increase Engagement
      </Typography>

            <Typography variant="subtitle1">
              Integrate your web Expirence or  create a standalone app {matchesSm ? null : <br />} which either mobile plateform
            </Typography>


            <Button variant="outlined" className={classes.LearnButton}>
              <span style={{ marginRight: 10 }} >
                Learn More
      </span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSm ? 0 : "5em" }} >
            <img alt="mobile icon" src={mobilappsIcon} className={classes.icon} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>

        <Grid container direction="row" className={classes.serviceContainer} justify={matchesSm ? "center" : undefined}>

          <Grid item style={{ marginLeft: matchesSm ? 0 : "5em", textAlign: matchesSm ? "center" : undefined }}>
            <Typography variant="h4">
              Web Site Development
      </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Reach More.Discover More. Sell More
      </Typography>

            <Typography variant="subtitle1">
              Optimized  for Search Engines, built for  more speed
            </Typography>


            <Button variant="outlined" className={classes.LearnButton}>
              <span style={{ marginRight: 10 }} >
                Learn More
      </span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
            </Button>
          </Grid>
          <Grid item >
            <img alt="webSite iceon" src={websitesIcon} className={classes.icon} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container align="center" justify="center" alignItems="center" style={{ height: "100em", marginTop: "12em" }}>
          <Card className={classes.revolutionCard}>
            <CardContent >
              <Grid container direction="column" style={{ textAlign: "center" }}>
                <Grid item>
                  <Typography variant="h3">
                    The Revolution
               </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a recipe for revlution
                </Typography>
                  <Button item variant="outlined" className={classes.learnButtonHero}> Learn More
                   <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                  </Button>

                </Grid>
              </Grid>
            </CardContent >
          </Card>
          <div className={classes.revolutionBackground}></div>
        </Grid>
      </Grid>
      {/* information Block */}

      <Grid container style={{
        height: "70em"
      }}
        alignItems="center"
        direction="row"
        spacing={matchesXs ? 10 : 0}
      >
        <Grid item container
          style={{
            position: "absolute",
            textAlign: matchesXs ? "center" : "inherit"
          }}
          direction={matchesXs ? "column" : "row"} >



          <Grid item sm style={{ marginLeft: matchesXs ? 0 : matchesSm ? "2em" : "5em" }}>
            <Grid container direction="column">
              <Typography variant="h2"> ABOUT US</Typography>
              <Typography variant="subtitle2">lets go personal</Typography>
              <Grid item>

                <Button variant="outlined" className={classes.LearnButton}>
                  <span style={{ marginRight: 10 }} >
                    Learn More
              </span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                </Button>
              </Grid>
            </Grid>

          </Grid>

          <Grid item sm style={{ marginRight: matchesXs ? 0 : matchesSm ? "2em" : "5em", textAlign: matchesXs ? "center" : "right" }}>
            <Grid container direction="column"  >
              <Typography variant="h2"> Contact Us</Typography>
              <Typography variant="subtitle2">Say Hellow! .</Typography>
              <Grid item>

                <Button variant="outlined" className={classes.LearnButton}>
                  <span style={{ marginRight: 10 }} >
                    Learn More
                </span>
                  <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                </Button>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
        <div className={classes.infosBackGround} />
      </Grid>
      <Grid item>
        <CallAction />
      </Grid>
    </Grid >
  )
}
