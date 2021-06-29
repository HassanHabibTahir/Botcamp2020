import React from "react";
import { openModal } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import image1 from "../../assets/images/av-1.svg";
import image2 from "../../assets/images/av-2.svg";
import image3 from "../../assets/images/av-3.svg";
import image4 from "../../assets/images/av-4.svg";

function Index() {
  const dispatch = useDispatch();
  const {
    getUserUniLevel
  } = useSelector(state => state);


  let LevelsUnil = getUserUniLevel !== undefined && getUserUniLevel !== null ? getUserUniLevel : []
  // console.log("getUserUniLevel=====>", LevelsUnil[0])

  return (
    <div>
      <div class='paninfo2'>
        <div class='container'>
          <div class='dvl'>
            <div class='d d1'>
              <div class='t'>
                <span>50,000</span>&nbsp;/&nbsp;250,000 TRX
              </div>
              <div class='text'>Users who made deposits of more than 250,000 TRX can withdraw only 50,000 TRX per 24 hours.</div>
            </div>
            <div class='d d2'>
              <div class='t'>
                <span>100,000</span>&nbsp;/&nbsp;500,000 TRX
              </div>
              <div class='text'>Users who made deposits of more than 500,000 TRX can withdraw only 100,000 TRX per 24 hours.</div>
            </div>

            {/* <div class='d d2'>
              <div class='t'>
                <span>CONTRACT TOTAL AMOUNT BONUS</span>
              </div>
              <div class='text'>
                +0.01% FOR EVERY 1,000,000 TRX ON PLATFORM BALANCE Smart-contract check its current balance and charge an additional +0.01% up to your
                earnings for every 1,000,000 TRX on balance. if the balance falls below 1 million then contract bonus reset again to 0%
              </div>
            </div> */}
            {/* <div class='d'>
              <div class='inf'>
                If you have more money on panel, the rest of profit will be returned to panel and you can withdraw after 24 hours.
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div class='container bg-second'>
        <div class='avpr'>
          <div class='d-flex '>
            <div class='ic'>
              <div class='img'>
                <img src={image1} />
              </div>
              <div class='text'>
                Total Profit: 200%<small>(Deposit Included)</small>
              </div>
            </div>

            <div class='ic'>
              <div class='img'>
                <img src={image2} />
              </div>
              <div class='text'>
                Earnings in realtime
                <small>All earnings all real-time</small>
              </div>
            </div>
            <div class='ic'>
              <div class='img'>
                <img src={image3} />
              </div>
              <div class='text'>
                Withdraw limit
                <small>You need at least 1 active referral to make withdrawal. Investors can withdraw once per 24 hours</small>
              </div>
            </div>
            <div class='ic nobefore'>
              <div class='img'>
                <img src={image4} />
              </div>
              <div class='text'>
                5% / 2% / 0.5% / 0.5%
                <br />
                <small>Referral commissions in 4 levels</small>
              </div>
            </div>
          </div>
        </div>

        <div class='refinfo'>
          <div class='d-flex justify-content-between align-items-center'>
            <div class='l'>
              <div class='title'>UniLevel Bonus Percentage</div>
              <div class='text'>
                The platform has been designed for optimal profitability. When you reach 50,000 TRX of your referral investments you receive extra 1%
                for daily profit
              </div>
            </div>
            <div class='r'>
              <a onClick={() => dispatch(openModal("account"))}>Check bonus</a>
            </div>
          </div>

          <div class='list'>
            <div>
              <span>L1-{" "} &nbsp; {LevelsUnil[0]}</span> total invested 1k Trx
              {/* <br /> 1,000 - 5,000 TRX */}
            </div>
            <div>
              <span>L2-{" "} &nbsp; {LevelsUnil[1]}</span>  total invested 1k Trx
              {/* <br /> 5,000 - 10,000 TRX */}
            </div>
            <div>
              <span>L3-{" "}&nbsp; {LevelsUnil[2]}</span>   total invested 1k Trx
              {/* <br /> 10,000 - 20,000 TRX */}
            </div>
            <div>
              <span>L4-{" "}{" "}&nbsp; {LevelsUnil[3]}</span> total invested 100k Trx
              {/* <br /> 20,000 - 50,000 TRX */}
            </div>
            <div>
              <span>L5-{" "}{" "}&nbsp; {LevelsUnil[4]}</span> total invested  100k Trx
              {/* <br /> 50,000 + TRX */}
            </div>

          </div>

          <div class='list'>
            <div>
              <span>L6-{" "}{" "}&nbsp; {LevelsUnil[5]}</span> total invested  1M TRX
              {/* <br /> 1,000 - 5,000 TRX */}
            </div>
            <div>
              <span>L7-{" "}{" "}&nbsp; {LevelsUnil[6]}</span> total invested  1M TRX
              {/* <br /> 5,000 - 10,000 TRX */}
            </div>
            <div>
              <span>L8-{" "}{" "}&nbsp; {LevelsUnil[7]}</span>total invested  10M TRX
              {/* <br /> 10,000 - 20,000 TRX */}
            </div>
            <div>
              <span>L9-{" "}{" "}&nbsp; {LevelsUnil[8]}</span>total invested  10M TRX
              {/* <br /> 20,000 - 50,000 TRX */}
            </div>
            <div>
              <span>L10-{" "} {" "}&nbsp; {LevelsUnil[9]}</span>total invested  10M TRX
              {/* <br /> 50,000 + TRX */}
            </div>
            {/* <div>
              <span>450 %</span> 10,000,000 TRX Max return is
             
            </div>
            <div>
              <span>500 %</span> 50,000,000 TRX Max return is
          
            </div> */}
          </div>
        </div>

        <div class='distr'>
          <div class='title'>DISTRIBUTION</div>
          <div class='text'>
            We reserve 92% of the main balance for user payouts. The rest is carefully distributed to keep running and be successful. We distribute 0%
            for advertisements in carefully chosen websites that ensure becomes a recognized name in the industry; 8% for referrals to increase our
            user base; 0% to cover our administrative costs, such as hosting, security, etc.
          </div>

          <div class='linestr'>
            <div class='s1 s'>
              <span>92%</span>
              <i>Main Smart Contract Balance for Payouts</i>
            </div>
            <div class='s2 s'>
              <span>8%</span>
              <i>Referral Commissions</i>
            </div>
            <div class='s3 s'>
              <span>0%</span>
              <i>For Advertisers</i>
            </div>
            {/* <div class='s4 s'>
              <span>0%</span>
              <i>Administration Fees</i>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
