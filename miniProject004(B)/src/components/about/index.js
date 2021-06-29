import clsx from "clsx";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { invest, openModal, setState, withdraw } from "../../redux/actions/actions";

function Index() {
  const {
    faq,
    money,
    getContactBalance,
    // userUniLvl1,
    // userUniLvl2,
    // userUniLvl3,
    // userUniLvl4,
    // userUniLvl5,
    // userUniLvl6,
    // userUniLvl7,
    // userUniLvl8,
    // userUniLvl9,
    // userUniLvl10,
    // userUniLvl11,
    // userUniLvl12,
    // userUniLvl13,
    // userUniLvl14,
    // userUniLvl15,
    totalInvested,
    totalWithdrawan,
    userWalletAddress,
    totalUsers
  } = useSelector(state => state);
  const dispatch = useDispatch();

  const getWidth = value => {
    const width = (100 / 100000) * value;
    return width;
  };

  return (
    <div>
      <div class='container'>
        <div class='make js-logged-in' style={{}}>
          <div class='left'>
            <div class='title'>Make deposit</div>
            <div class='input'>
              <label>Specify deposit TRX amount here:</label>
              <div class='i'>
                <input
                  type='text'
                  placeholder='0'
                  value={money}
                  onChange={e => dispatch(setState("money", e.target.value))}
                  class='js-deposit-amount'
                />
                <input type='submit' value='Make deposit' class='js-invest-button' disabled={money < 100} onClick={() => dispatch(invest())} />
              </div>
              <small>Minimal deposit amount is 1000 TRX</small>
            </div>
          </div>
          <div class='right'>

            <div class='title2'>


              <span>How to get tron (trx)</span>
              <a onClick={() => dispatch(openModal("faq"))}>View instruction</a>
            </div>
            <ul>
              <li>Minimal deposit amount</li>
              <li>We are working only with TRON (TRX) cryptocurrency</li>
              <li>Your deposit will be activated after 1 confirmation in blockchain</li>
              <li>Earnings comes every moment on your wallet balance</li>
            </ul>
          </div>
        </div>

        <div class='you_acc js-logged-out' style={{ display: "none" }}>
          <div class='left'>
            <div class='title'>Your Account</div>
            <div class='wclose'>Connect With Your Wallet App</div>
            <small>Please connect your wallet to see your wallet statistics</small>
          </div>
          <div class='right'>
            <div class='get'>
              <div class='t'>What TRX personal wallets to use?</div>
              <div class='tx'>You can use two types of wallets:</div>

              <div class='l l1'>
                <span>Browser extensions.</span> For example{" "}
                <a href='https://www.tronlink.org/' target='_blank'>
                  TronLink / TronPay.
                </a>{" "}
                Just install extension on your favorite browser and create a personal wallet address.
              </div>

              <div class='l l2'>
                <span>Mobile crypto wallets.</span> You can use any personal crypto wallet, which supports TRX cryptocurrency and «TRON dapps»
                technology, for example: TronWallet, Banko and others.
              </div>
            </div>
          </div>
        </div>

        <div class='you_acc js-logged-in'>
          <div class='left'>
            <div class='title'>Your Account</div>
            <div class='w'>
              <span class='js-user-address'>{userWalletAddress}</span> Your TRX wallet address
            </div>
            <small>Here you will be able to view all your wallet statistics. To view more detailed information click button Wallet Statistics</small>
          </div>
          <div class='right'>
            <div class='keys'>
              <a onClick={() => dispatch(openModal("account"))} class='k1'>
                <span>Wallet statistics</span>
              </a>
              <a class='locked k2 ' onClick={() => dispatch(withdraw())}>
                <i class='hint'>Withdraw Money</i>
                <span>Withdraw Money</span>
              </a>
              {/* <a href='#' class='k2 js-unlock-withdraw-button js-withdraw-div-button' style={{ display: "none" }}>
                Withdraw Money
              </a> */}
            </div>

            <div class='stats'>
              <div class='line'>
                <div>
                  <span class='js-user-invested'>{totalInvested} TRX</span>Total Invested
                </div>
                {/* <div>
                  <span class='js-user-earned'>0 TRX</span>Total earned
                </div> */}
                <div>
                  <span class='js-user-withdrawn'> {totalWithdrawan} TRX</span>Total withdrawn
                </div>
              </div>
              <div class='line l2'>
                <div>
                  <span class='js-user-balance'>{totalUsers}</span> TOTAL USERS
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='referrals' id='RefPool'>
          {/* <div class='gift'></div> */}

          {/* <div class='block'>
            <div class='d-flex justify-content-between'>
              <div class='left d-flex flex-column justify-content-center'>
                <div class='title'>Referral Pool</div>
                <div class='text'>
                  10 levels of unilevel rewards: 33% - 7% - 5% - 5% - 5% - 5% - 5% - 5% - 5% - 5% - 5% - 5% - 5% - 5% - 5% - 5% - 5% Referral rewards
                  comes instantly on your wallet balance and can be withdrawn any time along with earnings.
                </div>
              </div>
              <div class='right'>
                <div class='name'>Uni Level Earning</div>
                <div class='scroll-pane'>
                  <ul>
                    <li>
                      <span>1</span>Uni Level 1<i>{userUniLvl1} TRX</i>
                    </li>
                    <li>
                      <span>2</span>Uni Level 2<i>{userUniLvl2} TRX</i>
                    </li>
                    <li>
                      <span>3</span>Uni Level 3<i>{userUniLvl3} TRX</i>
                    </li>
                    <li>
                      <span>4</span>Uni Level 4<i>{userUniLvl4} TRX</i>
                    </li>
                    <li>
                      <span>5</span>Uni Level 5<i>{userUniLvl5} TRX</i>
                    </li>
                    <li>
                      <span>6</span>Uni Level 6<i>{userUniLvl6} TRX</i>
                    </li>
                    <li>
                      <span>7</span>Uni Level 7<i>{userUniLvl7} TRX</i>
                    </li>
                    <li>
                      <span>8</span>Uni Level 8<i>{userUniLvl8} TRX</i>
                    </li>
                    <li>
                      <span>9</span>Uni Level 9<i>{userUniLvl9} TRX</i>
                    </li>
                    <li>
                      <span>10</span>Uni Level 10<i>{userUniLvl10} TRX</i>
                    </li>
                    <li>
                      <span>11</span>Uni Level 11<i>{userUniLvl11} TRX</i>
                    </li>
                    <li>
                      <span>12</span>Uni Level 12<i>{userUniLvl12} TRX</i>
                    </li>
                    <li>
                      <span>13</span>Uni Level 13<i>{userUniLvl13} TRX</i>
                    </li>
                    <li>
                      <span>14</span>Uni Level 14<i>{userUniLvl14} TRX</i>
                    </li>
                    <li>
                      <span>15</span>Uni Level 15<i>{userUniLvl15} TRX</i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* <div class='winners'>
          <div class='block'>
            <div class='d-flex justify-content-between'>
              <div class='name'>Current Top 10</div>
              <div class='navs'>
                <a class='btn prev'></a>
                <a class='btn next'></a>
              </div>
            </div>

            <div class='cut'>
              <div id='owl-demo1' class='owl-carousel-top owl-carousel owl-theme'>
                <div class='item'>
                  <div class='left d-flex flex-column pb-4'>
                    <div className='d-flex'>
                      <span class='js-place'>1</span>
                      <i class='js-addr'>TWw4*******KYgqm24E1qY94KKkr8tiCQV</i>
                    </div>
                    <div class='amount js-amount'>500000.00 TRX</div>
                  </div>
                </div>

                <div class='item'>
                  <div class='left d-flex flex-column'>
                    <div className='d-flex'>
                      <span class='js-place'>2</span>
                      <i class='js-addr'>TWw4*******KYgqm24E1qY94KKkr8tiCQV</i>
                    </div>
                    <div class='amount js-amount'>500000.00 TRX</div>
                  </div>
                </div>

                <div class='item'>
                  <div class='left d-flex flex-column'>
                    <div className='d-flex'>
                      <span class='js-place'>3</span>
                      <i class='js-addr'>TWw4*******KYgqm24E1qY94KKkr8tiCQV</i>
                    </div>
                    <div class='amount js-amount'>500000.00 TRX</div>
                  </div>
                </div>

                <div class='item'>
                  <div class='left d-flex flex-column'>
                    <div className='d-flex'>
                      <span class='js-place'>4</span>
                      <i class='js-addr'>TWw4*******KYgqm24E1qY94KKkr8tiCQV</i>
                    </div>
                    <div class='amount js-amount'>500000.00 TRX</div>
                  </div>
                </div>

                <div class='item'>
                  <div class='left d-flex flex-column'>
                    <div className='d-flex'>
                      <span class='js-place'>5</span>
                      <i class='js-addr'>TWw4*******KYgqm24E1qY94KKkr8tiCQV</i>
                    </div>
                    <div class='amount js-amount'>500000.00 TRX</div>
                  </div>
                </div>

                <div class='item'>
                  <div class='left d-flex flex-column'>
                    <div className='d-flex'>
                      <span class='js-place'>6</span>
                      <i class='js-addr'>TWw4*******KYgqm24E1qY94KKkr8tiCQV</i>
                    </div>
                    <div class='amount js-amount'>500000.00 TRX</div>
                  </div>
                </div>

                <div class='item'>
                  <div class='left d-flex flex-column'>
                    <div className='d-flex'>
                      <span class='js-place'>7</span>
                      <i class='js-addr'>TWw4*******KYgqm24E1qY94KKkr8tiCQV</i>
                    </div>
                    <div class='amount js-amount'>500000.00 TRX</div>
                  </div>
                </div>

                <div class='item'>
                  <div class='left d-flex flex-column'>
                    <div className='d-flex'>
                      <span class='js-place'>8</span>
                      <i class='js-addr'>TWw4*******KYgqm24E1qY94KKkr8tiCQV</i>
                    </div>
                    <div class='amount js-amount'>500000.00 TRX</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Index;
