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
  const { deposit } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    // <div>
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={deposit}
      className={classes.root}
      onClose={() => dispatch(closeModal("deposit"))}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={deposit}>
        <div class='popup middle refs_str deps' style={{ display: "none" }}>
          <div class='white'>
            <div class='head'>
              <a href='#' onClick={() => dispatch(closeModal("deposit"))}>
                Back
              </a>
            </div>

            <div class='deposits js-deposit-list'>
              <div class='nm'>Your deposits</div>
            </div>

            <div class='not_found js-no-deps'>You haven’t active Deposits</div>

            <div class='dep' id='depositTemplate' style={{ display: "none" }}>
              <div class='d'>
                <div class='n'>
                  Date
                  <span class='js-deposit-date'></span>
                </div>
                <div class='am'>
                  <span class='js-deposit-invested'></span> Amount Invested
                </div>
              </div>
              <div class='earned'>
                <div>
                  Withdrawn:<span class='js-deposit-withdrawn'></span>
                </div>
                <div>
                  Left:<span class='js-deposit-left'></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default Index;
