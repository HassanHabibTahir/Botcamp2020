import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, Button, Menu, MenuItem, Paper, IconButton } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// const useStyles = makeStyles({
//   root: {
//     backgroundColor: 'red',  
//     color: props => props.color,
//   },
// });


const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em"
    }
  },
  logo: {
    height: "7em",
    [theme.breakpoints.down("md")]: {
      height: "6em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em"
    }
  },
  TabContainer: {
    marginLeft: "auto",

  },
  tab: {
    ...theme.typography.tab,
    // fontFamily:"Raleway",
    // textTransform:"none",
    // fontWeight:700,
    // fontSize:"1rem",
    minWidth: 10,
    marginLeft: "25px"
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }

  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white"
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
    color: "white"

  },
  drawer: {
    backgroundColor: theme.palette.common.blue
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange
  },
  drawerItemSelected: {
    "&.MuiListItemText-root": {
      opacity: 1

    }
    // opacity: 1
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1
  }



}))

function ElevationScroll(props) {

  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


//diableGutter is used to remove the  left and right
export default function Header(props) {
  const classes = useStyles(props);
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("md"))
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [openMenu, setOpenMenu] = useState(false);
  // const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  // const [open, setOpen] = useState(false)
  // const [selectedIndex, setSelectedIndex] = useState(0)
  const [openDrawer, setOpenDrawer] = useState(null)

  const changeHandler = (e, newValue) => {

    props.setValue(newValue)
  }


  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true)
  }

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false)
  }

  const handleMenueItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false)
    props.setSelectedIndex(i)
  }

  const menuOptions = [{
    name: "Services",
    link: "/services"
    , activeIndex: 1
    , selectedIndex: 0
  }
    , {
    name: "custome Software Developmet",
    link: "/customeSoftware"
    , activeIndex: 1
    , selectedIndex: 1
  }
    , {
    name: "ios/Android App Development",
    link: "/mobileapps", activeIndex: 1
    , selectedIndex: 2
  },
  {
    name: "Web Sites Development",
    link: "/websites"
    , activeIndex: 1
    , selectedIndex: 3
  }]


  const rOutes = [{
    name: "Home",
    link: "/", activeIndex: 0
  },
  {
    name: "Services", link: "/services", activeIndex: 1,
    ariaOwns: anchorEl ? "simple-menu" : undefined,
    ariahaspopup: anchorEl ? "true" : undefined,
    mouseOver: (event) => handleClick(event)
  },
  { name: "The Revolution", link: "/revolution", activeIndex: 2 }

    , { name: "About Us", link: "/about", activeIndex: 3 },
  { name: "Contact Us", link: "/contact", activeIndex: 4 },
    //  {name:"Extimate",link:"/extimate"} 
  ]




  // const rOutes = [{
  //   name: "Home",
  //   link: "/", activeIndex: 0
  // },
  // { name: "Services", link: "/services", activeIndex: 1 },
  // { name: "The Revolution", link: "/revolution", activeIndex: 2 }

  //   , { name: "About Us", link: "/about", activeIndex: 3 },
  // { name: "Contact Us", link: "/contact", activeIndex: 4 },
  //   //  {name:"Extimate",link:"/extimate"} 
  // ]


  useEffect(() => {

    [...menuOptions, ...rOutes].forEach(route => {


      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex)
            if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
              props.setSelectedIndex(route.selectedIndex)
            }
          }
          break;
        default:
          break;
      }


    })

    // if (window.location.pathname === "/" && value !== 0) {
    //   setValue(0)
    // } else if (window.location.pathname === "/services" && value !== 1) {

    //   setValue(1)
    // } else if (window.location.pathname === "/revolution" && value !== 2) {

    //   setValue(2)
    // } else if (window.location.pathname === "/about" && value !== 3) {

    //   setValue(3)
    // } else if (window.location.pathname === "/contact" && value !== 4) {

    //   setValue(4)
    // } else if (window.location.pathname === "/extimate" && value !== 5) {

    //   setValue(5)
    // }

    // switch (window.location.pathname) {
    //   case "/":
    //     if (value !== 0) {
    //       setValue(0)
    //     }
    //     break;
    //   case "/services":
    //     if (value !== 1) {
    //       setValue(1)
    //       setSelectedIndex(0)
    //     }
    //     break;
    //   case "/customeSoftware":
    //     if (value !== 1) {
    //       setValue(1);
    //       setSelectedIndex(1)
    //     }
    //     break;
    //   case "/mobileapps":
    //     if (value !== 1) {
    //       setValue(1);
    //       setSelectedIndex(2)
    //     }
    //     break;

    //   case "/websites":
    //     if (value !== 1) {
    //       setValue(1);
    //       setSelectedIndex(3)
    //     }
    //     break;
    //   case "/revolution":
    //     if (value !== 2) {
    //       setValue(2);
    //     }
    //     break;
    //   case "/about":
    //     if (value !== 3) {
    //       setValue(3)
    //     }

    //     break;
    //   case "/contact":
    //     if (value !== 4) {
    //       setValue(4);
    //     }

    //     break;
    //   case "/extimate":
    //     if (value !== 5) {
    //       setValue(5)
    //     }
    //     break;
    //   default:
    //     break;

    // }


  }, [props.value, menuOptions, props.selectedIndex, rOutes]);



  const tabs = (
    <React.Fragment>
      <Tabs value={props.value} onChange={changeHandler}
        className={classes.TabContainer}
        indicatorColor="primary"
      >

        {rOutes.map((route, index) => (

          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariahaspopup}
            onMouseOver={route.mouseOver}
          />

        ))}


        {/* <Tab

          className={classes.tab}
          label="Home"
          component={Link}
          to="/" />
        <Tab
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup={anchorEl ? "true" : undefined}
          onMouseOver={(event) => handleClick(event)}
          className={classes.tab}
          label="Services"
          component={Link}
          to="/services" />
        <Tab className={classes.tab} label="The Revolution" component={Link} to="/revolution" />
        <Tab className={classes.tab} label="About Us" component={Link} to="/about" />
        <Tab className={classes.tab} label="Contact Us" component={Link} to="/contact" /> */}
      </Tabs>
      <Button variant="contained" color='secondary' className={classes.button} > Free Estimate</Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl} open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
        style={{ zIndex: "1302" }}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link} to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => { handleMenueItemClick(event, i); props.setValue(1); handleClose() }}
            selected={i === props.selectedIndex && props.value === 1}
          >{option.name}  </MenuItem>
        ))}
        {/* <MenuItem onClick={()=>{handleClose();setValue(1)  }}  component={Link} to="/services" classes={{root:classes.menuItem}}>Services</MenuItem>
              <MenuItem classes={{root:classes.menuItem}} onClick={()=>{handleClose();setValue(1)  }}  component={Link} to="/customeSoftware" > Custome Software Development </MenuItem>
              <MenuItem classes={{root:classes.menuItem}} onClick={()=>{handleClose();setValue(1)  }}  component={Link} to="/mobileapps"> Mobile App Development </MenuItem>
              <MenuItem classes={{root:classes.menuItem}} onClick={()=>{handleClose();setValue(1)  }}  component={Link} to="/websites"> Website Development </MenuItem> */}
      </Menu>
    </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => { setOpenDrawer(false) }}
        onOpen={() => { setOpenDrawer(true) }}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>

          {rOutes.map((route, index) => (
            <ListItem key={`${route}${index}`}
              divider button component={Link} to={route.link} selected={props.value === route.activeIndex}
              onClick={() => { setOpenDrawer(false); props.setValue(route.activeIndex) }}
              classes={{ selected: classes.drawerItemSelected }}
            // className={ value===route.activeIndex?[classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem}
            >
              <ListItemText
                disableTypography
                className={classes.drawerItem}
              //  value===route.activeIndex?[classes.drawerItem,classes.drawerItemSelected]
              // changed in classes all from by the array
              // className={value===route.activeIndex?[classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem} 

              >{route.name}</ListItemText>
            </ListItem>
          ))}

          {/* <ListItem divider button onClick={() => { setOpenDrawer(false); setValue(0) }}
            selected={value === 0}
            component={Link} to="/">
            <ListItemText className={value === 0 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem divider button onClick={() => { setOpenDrawer(false); setValue(1) }}
            selected={value === 1}
            component={Link} to="/services">
            <ListItemText className={value === 1 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>Services</ListItemText>
          </ListItem>
          <ListItem divider button onClick={() => { setOpenDrawer(false); setValue(2) }}
            component={Link} to="/revolution"
            selected={value === 2}
          >
            <ListItemText className={value === 2 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>Revolution</ListItemText>
          </ListItem>
          <ListItem divider button onClick={() => { setOpenDrawer(false); setValue(3) }}
            component={Link} to="/about"
            selected={value === 3}
          >
            <ListItemText className={value === 3 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>About</ListItemText>
          </ListItem>
          <ListItem divider button onClick={() => { setOpenDrawer(false); setValue(4) }} component={Link} to="/contact" selected={value === 4}>
            <ListItemText className={value === 4 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>Contact</ListItemText>
          </ListItem> */}

          <ListItem divider button
            classes={{ root: classes.drawerItemEstimate, selected: classes.drawerItemSelected }} onClick={() => { setOpenDrawer(false); props.setValue(5) }} component={Link} to="/extimate"
            selected={props.value === 5}>
            <ListItemText
              // value === 5 ? [classes.drawerItem, classes.drawerItemSelected]:classes.drawerItem
              className={classes.drawerItem} disableTypography>Free Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.drawerIconContainer} >

        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <ElevationScroll >
        <AppBar position="fixed" className={classes.appbar}>

          <Toolbar disableGutters>
            {/* <Typography variant="h3">Hellow Hassan</Typography>  */}
            <Button component={Link} to="/" className={classes.logoContainer} onClick={() => props.setValue(0)}>
              <img className={classes.logo} src={logo} />

            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>


      </ElevationScroll >
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}






// import React, { useState, useEffect } from 'react'
// import AppBar from '@material-ui/core/AppBar';
// import { Toolbar, Typography, Button, Menu, MenuItem, Paper, IconButton } from '@material-ui/core';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import { makeStyles } from '@material-ui/core/styles';
// import PropTypes from 'prop-types';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import logo from "../../assets/logo.svg"
// import { Link } from "react-router-dom";
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { useTheme } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// // const useStyles = makeStyles({
// //   root: {
// //     backgroundColor: 'red',
// //     color: props => props.color,
// //   },
// // });


// const useStyles = makeStyles(theme => ({
//   toolbarMargin: {
//     ...theme.mixins.toolbar,
//     marginBottom: "3em",
//     [theme.breakpoints.down("md")]: {
//       marginBottom: "2em",
//     },
//     [theme.breakpoints.down("xs")]: {
//       marginBottom: "1.25em"
//     }
//   },
//   logo: {
//     height: "7em",
//     [theme.breakpoints.down("md")]: {
//       height: "6em",
//     },
//     [theme.breakpoints.down("xs")]: {
//       height: "5.5em"
//     }
//   },
//   TabContainer: {
//     marginLeft: "auto"
//   },
//   tab: {
//     ...theme.typography.tab,
//     // fontFamily:"Raleway",
//     // textTransform:"none",
//     // fontWeight:700,
//     // fontSize:"1rem",
//     minWidth: 10,
//     marginLeft: "25px"
//   },
//   button: {
//     ...theme.typography.estimate,
//     borderRadius: "50px",
//     marginLeft: "50px",
//     marginRight: "25px",
//     height: "45px",

//   },
//   logoContainer: {
//     padding: 0,
//     "&:hover": {
//       backgroundColor: "transparent"
//     }
//   },
//   menu: {
//     backgroundColor: theme.palette.common.blue,
//     color: "white"
//   },
//   menuItem: {
//     ...theme.typography.tab,
//     opacity: 0.7,
//     "&:hover": {
//       opacity: 1
//     }
//   },
//   drawerIconContainer: {
//     marginLeft: "auto",
//     "&:hover": {
//       backgroundColor: "transparent"
//     }
//   },
//   drawerIcon: {
//     height: "50px",
//     width: "50px",
//     color: "white"

//   },
//   drawer: {
//     backgroundColor: theme.palette.common.blue
//   },
//   drawerItem: {
//     ...theme.typography.tab,
//     color: "white",
//     opacity: 0.7
//   },
//   drawerItemEstimate: {
//     backgroundColor: theme.palette.common.orange
//   },
//   drawerItemSelected: {
//     opacity: 1
//   },
//   appbar:{
//     zIndex:theme.zIndex.modal+1 
//   }



// }))

// function ElevationScroll(props) {

//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: window ? window() : undefined,
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   });
// }

// ElevationScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };


// //diableGutter is used to remove the  left and right
// export default function Header(props) {
//   const classes = useStyles(props);
//   const theme = useTheme()
//   const matches = useMediaQuery(theme.breakpoints.down("md"))
//   const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
//   const [openMenu, setOpenMenu] = useState(false);
//   const [value, setValue] = useState(0);
//   const [anchorEl, setAnchorEl] = useState(null);
//   // const [open, setOpen] = useState(false)
//   const [selectedIndex, setSelectedIndex] = useState(0)
//   const [openDrawer, setOpenDrawer] = useState(null)

//   const changeHandler = (e, newValue) => {

//     setValue(newValue)
//   }


//   const handleClick = (e) => {
//     setAnchorEl(e.currentTarget);
//     setOpenMenu(true)
//   }

//   const handleClose = (e) => {
//     setAnchorEl(null);
//     setOpenMenu(false)
//   }

//   const handleMenueItemClick = (e, i) => {
//     setAnchorEl(null);
//     setOpenMenu(false)
//     setSelectedIndex(i)
//   }

//   const menuOptions = [{
//     name: "Services",
//     link: "/services"
//     , activeIndex: 1
//     , selectedIndex: 0
//   }
//     , {
//       name: "custome Software Developmet",
//        link: "/customeSoftware"
//     , activeIndex: 1
//     , selectedIndex: 1
//   }
//     , {
//       name: "Mobile App Development",
//     link: "/mobileapps", activeIndex: 1
//     , selectedIndex: 2
//   },
//   {
//     name: "Web Sites Development",
//     link: "/websites"
//     , activeIndex: 1
//     , selectedIndex: 3
//   }]


//   const rOutes = [{
//     name: "Home",
//     link: "/", activeIndex: 0
//   },
//   { name: "Services", link: "/services", activeIndex: 1 , 
//     ariaOwns: anchorEl ? "simple-menu" : undefined,
//     ariahaspopup:anchorEl ? "true" : undefined ,
//     mouseOver:(event) => handleClick(event)
// },
//   { name: "The Revolution", link: "/revolution", activeIndex: 2 }

//     , { name: "About Us", link: "/about", activeIndex: 3 },
//   { name: "Contact Us", link: "/contact", activeIndex: 4 },
//     //  {name:"Extimate",link:"/extimate"} 
//   ]




//   // const rOutes = [{
//   //   name: "Home",
//   //   link: "/", activeIndex: 0
//   // },
//   // { name: "Services", link: "/services", activeIndex: 1 },
//   // { name: "The Revolution", link: "/revolution", activeIndex: 2 }

//   //   , { name: "About Us", link: "/about", activeIndex: 3 },
//   // { name: "Contact Us", link: "/contact", activeIndex: 4 },
//   //   //  {name:"Extimate",link:"/extimate"} 
//   // ]


//   useEffect(() => {

//     [...menuOptions, ...rOutes].forEach(route => {


//       switch (window.location.pathname) {
//         case `${route.link}`:
//           if (value !== route.activeIndex) {
//             setValue(route.activeIndex)
//             if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
//               setSelectedIndex(route.selectedIndex)
//             }
//           }
//           break;
//         default:
//           break;
//       }


//     })

//     // if (window.location.pathname === "/" && value !== 0) {
//     //   setValue(0)
//     // } else if (window.location.pathname === "/services" && value !== 1) {

//     //   setValue(1)
//     // } else if (window.location.pathname === "/revolution" && value !== 2) {

//     //   setValue(2)
//     // } else if (window.location.pathname === "/about" && value !== 3) {

//     //   setValue(3)
//     // } else if (window.location.pathname === "/contact" && value !== 4) {

//     //   setValue(4)
//     // } else if (window.location.pathname === "/extimate" && value !== 5) {

//     //   setValue(5)
//     // }

//     // switch (window.location.pathname) {
//     //   case "/":
//     //     if (value !== 0) {
//     //       setValue(0)
//     //     }
//     //     break;
//     //   case "/services":
//     //     if (value !== 1) {
//     //       setValue(1)
//     //       setSelectedIndex(0)
//     //     }
//     //     break;
//     //   case "/customeSoftware":
//     //     if (value !== 1) {
//     //       setValue(1);
//     //       setSelectedIndex(1)
//     //     }
//     //     break;
//     //   case "/mobileapps":
//     //     if (value !== 1) {
//     //       setValue(1);
//     //       setSelectedIndex(2)
//     //     }
//     //     break;

//     //   case "/websites":
//     //     if (value !== 1) {
//     //       setValue(1);
//     //       setSelectedIndex(3)
//     //     }
//     //     break;
//     //   case "/revolution":
//     //     if (value !== 2) {
//     //       setValue(2);
//     //     }
//     //     break;
//     //   case "/about":
//     //     if (value !== 3) {
//     //       setValue(3)
//     //     }

//     //     break;
//     //   case "/contact":
//     //     if (value !== 4) {
//     //       setValue(4);
//     //     }

//     //     break;
//     //   case "/extimate":
//     //     if (value !== 5) {
//     //       setValue(5)
//     //     }
//     //     break;
//     //   default:
//     //     break;

//     // }


//   }, [value, menuOptions, selectedIndex, rOutes]);



//   const tabs = (
//     <React.Fragment>
//       <Tabs value={value} onChange={changeHandler}
//         className={classes.TabContainer}
//         indicatorColor="primary"
//       >

// {rOutes.map((route,index)=>(

// <Tab 
// key={`${route}${index}`}
// className={classes.tab}
// component={Link} 
// to={route.link} 
// label={route.name}
// aria-owns={route.ariaOwns} 
// aria-haspopup={route.ariahaspopup} 
// onMouseOver={route.mouseOver}
// />

// ))}


//         {/* <Tab

//           className={classes.tab}
//           label="Home"
//           component={Link}
//           to="/" />
//         <Tab
//           aria-owns={anchorEl ? "simple-menu" : undefined}
//           aria-haspopup={anchorEl ? "true" : undefined}
//           onMouseOver={(event) => handleClick(event)}
//           className={classes.tab}
//           label="Services"
//           component={Link}
//           to="/services" />
//         <Tab className={classes.tab} label="The Revolution" component={Link} to="/revolution" />
//         <Tab className={classes.tab} label="About Us" component={Link} to="/about" />
//         <Tab className={classes.tab} label="Contact Us" component={Link} to="/contact" /> */}
//       </Tabs>
//       <Button variant="contained" color='secondary' className={classes.button} > Free Estimate</Button>
//       <Menu 
//         id="simple-menu"
//         anchorEl={anchorEl} open={openMenu}
//         onClose={handleClose}
//         MenuListProps={{ onMouseLeave: handleClose }}
//         classes={{ paper: classes.menu }}
//         elevation={0}
//         keepMounted
//       >
//         {menuOptions.map((option, i) => (
//           <MenuItem component={Link} to={option.link}
//             classes={{ root: classes.menuItem }}
//             onClick={(event) => { handleMenueItemClick(event, i); setValue(1); handleClose() }}
//             selected={i === selectedIndex && value === 1}
//           >{option.name}  </MenuItem>
//         ))}
//         {/* <MenuItem onClick={()=>{handleClose();setValue(1)  }}  component={Link} to="/services" classes={{root:classes.menuItem}}>Services</MenuItem>
//               <MenuItem classes={{root:classes.menuItem}} onClick={()=>{handleClose();setValue(1)  }}  component={Link} to="/customeSoftware" > Custome Software Development </MenuItem>
//               <MenuItem classes={{root:classes.menuItem}} onClick={()=>{handleClose();setValue(1)  }}  component={Link} to="/mobileapps"> Mobile App Development </MenuItem>
//               <MenuItem classes={{root:classes.menuItem}} onClick={()=>{handleClose();setValue(1)  }}  component={Link} to="/websites"> Website Development </MenuItem> */}
//       </Menu>
//     </React.Fragment>
//   )

//   const drawer = (
//     <React.Fragment>
//       <SwipeableDrawer disableBackdropTransition={!iOS}
//         disableDiscovery={iOS}
//         open={openDrawer}
//         onClose={() => {setOpenDrawer(false)}}
//         onOpen={() => { setOpenDrawer(true) }}
//         classes={{ paper: classes.drawer }}
//       >
// <div className={classes.toolbarMargin}/>
//         <List disablePadding>

//  {rOutes.map((route,index)=>(
//    <ListItem key={`${route}${index}`}
//    divider button component={Link} to={route.link} selected={value===route.activeIndex} onClick={()=>{setOpenDrawer(false);setValue(route.activeIndex)}} >
//      <ListItemText disableTypography   className={value===route.activeIndex?[classes.drawerItem,classes.drawerItemSelected]:classes.drawerItem}  >{route.name}</ListItemText>
//    </ListItem>
//  ))}

//           {/* <ListItem divider button onClick={() => { setOpenDrawer(false); setValue(0) }}
//             selected={value === 0}
//             component={Link} to="/">
//             <ListItemText className={value === 0 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>Home</ListItemText>
//           </ListItem>
//           <ListItem divider button onClick={() => { setOpenDrawer(false); setValue(1) }}
//             selected={value === 1}
//             component={Link} to="/services">
//             <ListItemText className={value === 1 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>Services</ListItemText>
//           </ListItem>
//           <ListItem divider button onClick={() => { setOpenDrawer(false); setValue(2) }}
//             component={Link} to="/revolution"
//             selected={value === 2}
//           >
//             <ListItemText className={value === 2 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>Revolution</ListItemText>
//           </ListItem>
//           <ListItem divider button onClick={() => { setOpenDrawer(false); setValue(3) }}
//             component={Link} to="/about"
//             selected={value === 3}
//           >
//             <ListItemText className={value === 3 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>About</ListItemText>
//           </ListItem>
//           <ListItem divider button onClick={() => { setOpenDrawer(false); setValue(4) }} component={Link} to="/contact" selected={value === 4}>
//             <ListItemText className={value === 4 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>Contact</ListItemText>
//           </ListItem> */}

//           <ListItem divider button className={classes.drawerItemEstimate} onClick={() => { setOpenDrawer(false); setValue(5) }} component={Link} to="/extimate" selected={value === 5}>
//             <ListItemText className={value === 5 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>Free Estimate</ListItemText>
//           </ListItem>
//         </List>
//       </SwipeableDrawer>
//       <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.drawerIconContainer} >

//         <MenuIcon className={classes.drawerIcon} />
//       </IconButton>
//     </React.Fragment>
//   )

//   return (
//     <React.Fragment>
//       <ElevationScroll >
//         <AppBar position="fixed" className={classes.appbar}>

//           <Toolbar disableGutters>
//             {/* <Typography variant="h3">Hellow Hassan</Typography>  */}
//             <Button component={Link} to="/" className={classes.logoContainer} onClick={() => setValue(0)}>
//               <img className={classes.logo} src={logo} />

//             </Button>
//             {matches ? drawer : tabs}
//           </Toolbar>
//         </AppBar>


//       </ElevationScroll >
//       <div className={classes.toolbarMargin} />
//     </React.Fragment>
//   )
// }
