import React from "react";
import { openModal } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

function Index() {
  const dispatch = useDispatch();
  const { basePercent, getContractBonus, getUserPercentRate, getUserHoldBonus, getUserReferralBonus, getUniLevelBonus } = useSelector(state => state);

  return (
    <div>
      <div class='condition'>
        <div class='container'>
          <div class='title'>Investment Conditions</div>
          <div class='text'>
            The CRYPTO BANK platform has been designed for optimal stability and profitability. Anti-Whale system and other limits prevents contract
            from short life span.
          </div>
        </div>
        <div class='panel2'>
          <div class='bg'>
            <div class='container'>
              <div class='percent'>
                <span>1%</span> Basic Daily
              </div>

              <div class='d-flex df '>
                <div class='min'>
                  <span>1000 TRX</span>Minimum Deposit
                </div>
                <div class='max'>
                  <span>1,000,000 TRX</span>Maximum Deposit
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='container'>
          <div class='panel'>
            <div class='bg'>
              <div class='percent'>
                <span>1%</span> Basic Daily
                <br /> Percent
              </div>
              <div class='d-flex df '>
                <div class='left'>
                  <div class='d-flex justify-content-between'>
                    <div class='l1'>
                      <div class='b  b1'>
                        <div class='p'>
                          <b>1%</b>
                          <small>
                            {" "}
                            {/* (For Every 10 days <br /> Without WITHDRAW) */}
                          </small>
                          <br />
                          {/* Personal Hold-Bonus */}
                        </div>



                      </div>

                      <div class='b b2'>
                        <div class='p'>
                          <b> {getUserReferralBonus ? getUserReferralBonus : 0}</b>
                          {/* <small>/ 1.0%</small> */}
                          <br />
                          Get User Referral Bonus
                        </div>
                        <div class='a'>
                          {" "}
                          <a onClick={() => dispatch(openModal("account"))}>Check level</a>
                        </div>
                      </div>

                      <div class='b b3'>
                        <div class='p'>
                          <small>{getUniLevelBonus ? getUniLevelBonus : 0}</small>
                          <br />
                          Uni Level Bouns
                        </div>
                        {/* <div class='hint'>
                          <div>
                            <div>Only for users who haven't made withdrawal before reaching 320%</div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class='right'>
                  <div class='min'>
                    <span>100 TRX</span>Minimum Deposit
                  </div>
                  <div class='max'>
                    <span>1,000,000 TRX</span>Maximum Deposit
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
