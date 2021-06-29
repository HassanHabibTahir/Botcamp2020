import React from "react";
import { Modal, Fade, Backdrop, makeStyles } from "@material-ui/core";
import { closeModal } from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { code } from "./code";

const useStyles = makeStyles(theme => ({
  root: { display: "flex", alignItems: "center", justifyContent: "center", overflow: "auto" },
  paper: { backgroundColor: theme.palette.background.paper, border: "2px solid #000", boxShadow: theme.shadows[5], padding: theme.spacing(2, 4, 3) },
}));

function Index() {
  const classes = useStyles();
  const { vv } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    // <div>
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={vv}
      className={classes.root}
      onClose={() => dispatch(closeModal("vv"))}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={vv}>
        <div class='popup middle cc'>
          <div class='white'>
            <a href='#' class='closex' onClick={() => dispatch(closeModal("vv"))}></a>
            <div class='form'>
              <textarea readOnly>{code}</textarea>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default Index;
