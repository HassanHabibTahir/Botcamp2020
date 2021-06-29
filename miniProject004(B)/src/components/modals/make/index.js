import React from "react";
import { Modal, Fade, Backdrop, makeStyles } from "@material-ui/core";
import { closeModal, invest, setState } from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: { display: "flex", alignItems: "center", justifyContent: "center", overflow: "auto" },
  paper: { backgroundColor: theme.palette.background.paper, border: "2px solid #000", boxShadow: theme.shadows[5], padding: theme.spacing(2, 4, 3) },
}));

function Index() {
  const classes = useStyles();
  const { makeDeposit, money, basePercent, getUserReferralBonus, getUserPercentRate, getUserHoldBonus, getContractBonus } = useSelector(
    state => state
  );
  const dispatch = useDispatch();

  return (
    // <div>
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={makeDeposit}
      className={classes.root}
      onClose={() => dispatch(closeModal("makeDeposit"))}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={makeDeposit}>
        <div class='popup middle makedepo'>
          <div class='white'>
            <a href='#' class='closex' onClick={() => dispatch(closeModal("makeDeposit"))}></a>

            <div class='d-flex '>
              <div class='left'>
                <div class='title'>Make deposit</div>

                <div class='input'>
                  <label>Specify deposit TRX amount here:</label>
                  <div class='i'>
                    <input
                      type='text'
                      placeholder='0'
                      value='100'
                      class='js-foward-amount'
                      data-contractBonus='3'
                      data-holdBonus='0'
                      data-refBonus='0'
                      value={money}
                      onChange={e => dispatch(setState("money", e.target.value))}
                    />
                  </div>
                  <small>Minimal deposit amount is 1000 TRX</small>
                  <input type='submit' value='Make deposit' disabled={money < 100} class='js-invest-button' onClick={() => dispatch(invest())} />
                </div>

                <ul>
                  <li>Minimal deposit amount: 1000 TRX</li>
                  <li>We are working only with TRON (TRX) cryptocurrency</li>
                  <li>Your deposit will be activated after 1 confirmation in blockchain</li>
                  <li>Earnings comes every moment on your wallet balance</li>
                </ul>
              </div>

              <div class='right'>
                <div class='lt'>Profit Information:</div>

                {/* <div class='n'>
                  <span class='js-current-daily'>{getUserPercentRate}%</span>Current Profit Per Day
                </div> */}
                <div class='n'>
                  <span class='js-user-contractbonus'>{basePercent}</span>Basic Bonus
                </div>
                <div class='n'>
                  <span class='js-user-refbonus'>{getUserReferralBonus}</span>Referral bonus
                </div>
                <div class='n'>
                  <span class='js-user-holdbonus'>{getUserHoldBonus}</span>UniLevel Bonus
                </div>
                <div class='n'>
                  <span class='js-user-holdbonus'>{getContractBonus}</span>Incentive Bonus
                </div>
                <hr />
                {/* <div class='n'>
                  <span class='js-calc-hourly'></span>Hourly earnings
                </div>
                <div class='n'>
                  <span class='js-calc-daily'></span>Daily earnings
                </div>
                <div class='n'>
                  <span class='js-calc-end'></span>At the end
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default Index;
