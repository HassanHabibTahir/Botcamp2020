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
  const { confirm } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    // <div>
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={confirm}
      className={classes.root}
      onClose={() => dispatch(closeModal("confirm"))}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={confirm}>
        <div class='popup al confirm' style={{ display: "none" }}>
          <div class='white'>
            <a href='#' class='closex' onClick={() => dispatch(closeModal("confirm"))}></a>
            <div class='title'>Confirm Withdraw</div>
            <div class='text'>Please confirm your withdrawal</div>

            <div class='amount'>
              <span class='js-withdrawal-amount'></span> Amount to withdraw
            </div>

            <div class='amount'>
              <span class='js-withdrawal-limit'>50,000 TRX</span>
              <p class='js-div-text'>You can withdraw only once per 24 hours</p>
              <p class='js-com-text'>You can withdraw only once per 48 hours</p>
            </div>

            <div class='tt2'>
              <p class='js-div-text'>
                If you have more money on panel, the rest of profit will be returned to panel and can be withdrawn after 24 hours.
              </p>
              <p class='js-com-text'>
                If you have more money on panel, the rest of profit will be returned to panel and can be withdrawn after 48 hours.
              </p>
            </div>

            <div class='keys'>
              <a href='#' data-type='' class='confirm js-withdrawal-button'>
                Confirm Withdraw
              </a>
              <a href='#' onclick="javascript:popup('.account');" class='cancel'>
                Cancel
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default Index;
