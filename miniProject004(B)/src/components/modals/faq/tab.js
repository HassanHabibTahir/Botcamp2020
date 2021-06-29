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
import { ExpandMore } from "@material-ui/icons";
import clsx from "clsx";

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
    flexBasis: "90.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function CustomTab({ data, value, index, classs }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChangePanel = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <TabPanel value={value} index={index}>
        {data.map(tab => (
          <div className={clsx(classes.root, "ft", classs)}>
            <Accordion expanded={expanded === tab.panel} onChange={handleChangePanel(tab.panel)}>
              <AccordionSummary expandIcon={<ExpandMore />} aria-controls={tab.areaControl} id={tab.id}>
                <Typography className={clsx(classes.heading, "f")}>{tab.header}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className='a'>{tab.description}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </TabPanel>
    </>
  );
}

export default CustomTab;

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
