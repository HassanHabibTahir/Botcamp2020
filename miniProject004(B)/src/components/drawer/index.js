import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/actions/actions";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function AppDrawer({ toggleDrawer, open, children }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <SwipeableDrawer anchor='left' open={open} onClose={() => toggleDrawer()} onOpen={() => toggleDrawer()}>
        <List className={classes.list}>
          <ListItem button>
            <ListItemText className='text-white' primary='Home' />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              toggleDrawer();
              dispatch(openModal("makeDeposit"));
            }}>
            <ListItemText className='text-white' primary='Make Deposit' />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              toggleDrawer();
              dispatch(openModal("account"));
            }}>
            <ListItemText className='text-white' primary='Promote Us' />
          </ListItem>
          <ListItem button onClick={() => toggleDrawer()} component='a' href='#RefPool'>
            <ListItemText className='text-white' primary='Referral Pool' />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              toggleDrawer();
              dispatch(openModal("faq"));
            }}>
            <ListItemText className='text-white' primary='FAQ' />
          </ListItem>
          <ListItem button onClick={() => toggleDrawer()} component='a' href='#contacts'>
            <ListItemText className='text-white' primary='Contacts' />
          </ListItem>
        </List>
      </SwipeableDrawer>
      <div>{children}</div>
    </React.Fragment>
  );
}
