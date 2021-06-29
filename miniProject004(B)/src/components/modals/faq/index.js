import React from "react";
import {
  Modal,
  Fade,
  Backdrop,
  makeStyles,
  Tabs,
  Tab,
  AppBar,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { closeModal, openModal } from "../../../redux/actions/actions";
import { ExpandMore } from "@material-ui/icons";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { tabsData } from "../../../core/data";
import CustomTab from "./tab";

const useStyles = makeStyles(theme => ({
  roots: { display: "flex", alignItems: "center", justifyContent: "center", overflow: "auto" },
  paper: { backgroundColor: theme.palette.background.paper, border: "2px solid #000", boxShadow: theme.shadows[5], padding: theme.spacing(2, 4, 3) },
  tab: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  appBar: {
    backgroundColor: "transparent",
    padding: "0px 5px !important",
  },
}));

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

function Index() {
  const classes = useStyles();
  const { faq } = useSelector(state => state);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangePanel = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    // <div>
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={faq}
      className={classes.roots}
      onClose={() => dispatch(closeModal("faq"))}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={faq}>
        <div class='popup faq'>
          <div class='white px-3'>
            <a href='#' class='closex' onClick={() => dispatch(closeModal("faq"))}></a>
            <div class='title'>FAQ</div>
            <div class='text'>Here you can find answers to most frequently asked questions.</div>

            <div className={classes.tab}>
              {/* <AppBar position='static' className={classes.appBar}> */}
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor='primary'
                textColor='primary'
                variant='scrollable'
                scrollButtons='auto'
                aria-label='scrollable auto tabs example'>
                <Tab label='General' {...a11yProps(0)} />
                <Tab label='Referral' {...a11yProps(1)} />
                {/* <Tab label='Incentive Bonus' {...a11yProps(2)} /> */}
                {/* <Tab label='Referral Pool' {...a11yProps(3)} /> */}
                <Tab label='Wallet' {...a11yProps(4)} />
              </Tabs>
              {/* </AppBar> */}
              <CustomTab data={tabsData.firstTab} value={value} index={0} classs='f1' />
              <CustomTab data={tabsData.secondTab} value={value} index={1} classs='f2' />
              {/* <CustomTab data={tabsData.thirdTab} value={value} index={2} classs='f3' /> */}
              <CustomTab data={tabsData.forthTab} value={value} index={2} classs='f4' />
              <CustomTab data={tabsData.fifthTab} value={value} index={4} classs='f5' />
            </div>

            <div class='faq_content'></div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default Index;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
