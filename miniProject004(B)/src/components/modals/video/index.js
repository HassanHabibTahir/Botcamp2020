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
  const { video } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    // <div>
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={video}
      className={classes.root}
      onClose={() => dispatch(closeModal("video"))}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={video}>
        <div class='popup middle vv'>
          <div class='white'>
            <a href='#' class='closex' onClick={() => dispatch(closeModal("video"))}></a>

            <div class='v' style={{ padding: 10, marginTop: 10, display: "none" }}>
              <iframe
                width='100%'
                height='315'
                src='#'
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
