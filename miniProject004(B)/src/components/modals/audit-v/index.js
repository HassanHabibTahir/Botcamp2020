import React from "react";
import { Modal, Fade, Backdrop, makeStyles } from "@material-ui/core";
import { closeModal } from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: { display: "flex", alignItems: "center", justifyContent: "center", overflow: "auto" },
  paper: { backgroundColor: theme.palette.background.paper, border: "2px solid #000", boxShadow: theme.shadows[5], padding: theme.spacing(2, 4, 3) },
}));

function Index() {
  const classes = useStyles();
  const { audit } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    // <div>
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={audit}
      className={classes.root}
      onClose={() => dispatch(closeModal("audit"))}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={audit}>
        <div class='popup middle auditV' style={{ display: "none" }}>
          <div class='white'>
            <a href='#' class='closex' onClick={() => dispatch(closeModal("audit"))}></a>

            <div class='v' style={{ padding: 10, marginTop: 10 }}>
              <iframe
                width='100%'
                height='315'
                src='https://www.youtube.com/embed/E4zFBu_G40c'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default Index;
