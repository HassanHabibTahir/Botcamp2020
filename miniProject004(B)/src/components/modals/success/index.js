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
  const { success } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    // <div>
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={success}
      className={classes.root}
      onClose={() => dispatch(closeModal("success"))}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={success}>
        <div class='popup al success' style={{ display: "none" }}>
          <div class='white'>
            <a href='#' class='closex' onClick={() => dispatch(closeModal("success"))}></a>
            <div class='title'>Success New Deposit</div>
            <div class='text'>Your deposit has been successfully sent</div>

            <div class='amount'>
              <span class='js-deposit-invested'></span> Invested
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default Index;
