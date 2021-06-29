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
  const { refs } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    // <div>
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={refs}
      className={classes.root}
      onClose={() => dispatch(closeModal("refs"))}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={refs}>
        <div class='popup middle refs_str rlist' style={{ display: "none" }}>
          <div class='white'>
            <div class='head'>
              <a href='#' onClick={() => dispatch(closeModal("refs"))}>
                Back
              </a>
              <span class='js-level'>Your Active LVL referral level</span>
            </div>
            <div class='sts'>
              <div>
                <span class='js-totalRefs'></span> Active Referrals
              </div>
              <div>
                <span class='js-totalInv'></span> Referral Invested
              </div>
              <div>
                <span class='js-totalCom'></span> Referral Commission
              </div>
            </div>

            <div class='list '>
              <div class='js-referral-list'></div>
              <div class='not_found js-no-refs'>You haven’t active referrals</div>
            </div>

            <div class='r' id='RefTemplate' style={{ display: "none" }}>
              <div class='u'>
                <span></span>
              </div>
              <div class='am'>
                <span class='js-r-dep'></span>Total Deposited
              </div>
              <div class='am'>
                <span class='js-r-com'></span>Total Earned
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default Index;
