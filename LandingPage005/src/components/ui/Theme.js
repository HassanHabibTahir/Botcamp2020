
import { createMuiTheme } from '@material-ui/core/styles';



const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGray = "#808080"
let theme = createMuiTheme({

  palette: {
    common: {
      blue: `${arcBlue}`,
      orange: `${arcOrange}`
    },
    primary: {
      main: `${arcBlue}`
    },
    secondary: {
      main: `${arcOrange}`

    }
  },
  typography: {
    // h3:{
    //   fontWeight:300
    // }
    tab: {
      fontFamily: "'DM Sans', sans-serif;",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: 'white'
    },
    h2: {
      fontFamily: "Raleway",
      fontSize: '2rem',
      fontWeight: 700,
      textTransform: "none",
      lineHeight: 1.5,
      color: `${arcBlue}`
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: arcBlue
    },
    h4: {
      fontFamily: "Releway",
      fontSize: "1.75rem",
      color: `${arcBlue}`,
      fontWeight: 700
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: `${arcGray}`
    },
    subtitle2: {
      color: "white",
      fontSize: "1.5rem",
      fontWeight: 300
    }
    ,
    learnButton: {
      borderColor: `${arcBlue}`,
      color: arcBlue,
      // marginTop: "1rem",
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Raboto",
      fontWeight: "bold",
    }

  }

});
export default theme;