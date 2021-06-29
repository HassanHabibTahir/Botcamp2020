import React, { useRef, useEffect } from "react";
import { Modal, Fade, Backdrop, makeStyles, Tabs, Tab, AppBar, Box, Typography } from "@material-ui/core";
import { closeModal, openModal, withdraw } from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import copy from "copy-to-clipboard";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  root: { display: "flex", alignItems: "center", justifyContent: "center", overflow: "auto" },
  paper: { backgroundColor: theme.palette.background.paper, border: "2px solid #000", boxShadow: theme.shadows[5], padding: theme.spacing(2, 4, 3) },
  tabs: {
    flexGrow: 1,
  },
  tab: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
}));

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Index() {
  const classes = useStyles();
  const linkref = useRef();
  const notification = useRef();
  const {
    account,
    getContactBalance,
    userUniLvl1,
    userUniLvl2,
    userUniLvl3,
    userUniLvl4,
    userUniLvl5,
    userUniLvl6,
    userUniLvl7,
    userUniLvl8,
    userWithdraw,
    userUniLvl9,
    userUniLvl10,
    userUniLvl11,
    userUniLvl12,
    userUniLvl13,
    userUniLvl14,
    userUniLvl15,
    basePercent,
    getUserReferralBonus,
    userWalletAddress,
    totalWithdrawan,
    totalInvested,
    getUserHoldBonus,
    getContractBonus,
    getUserReferalWithdraw,
    getUserLevel1,
    getUserLevel2,
    getUserLevel3,
    getUserTotalDeposits,
    getUserLevel4,
    getUserDividend,
    getUserReferrer,
    getRefInc,
    getUserUniLevel
  } = useSelector(state => state);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const [location, setLocation] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCopy = () => {
    copy(linkref.current.innerHTML);
    notification.current.style.display = "block";
    // setTimeout(() => {
    //   notification.current.style.display = "none";
    // }, 3000);
  };

  const getWidth = value => {
    if (value >= 1000000) {
      return "pr-1";
    } else if (value >= 2000000) {
      return "pr-2";
    } else if (value >= 3000000) {
      return "pr-3";
    } else if (value >= 4000000) {
      return "pr-4";
    } else if (value >= 5000000) {
      return "pr-5";
    } else if (value >= 6000000) {
      return "pr-6";
    } else if (value >= 7000000) {
      return "pr-7";
    } else if (value >= 8000000) {
      return "pr-8";
    } else if (value >= 9000000) {
      return "pr-9";
    } else if (value >= 10000000) {
      return "pr-10";
    }
  };

  useEffect(() => {
    if (window.location.href.includes("?ref=")) {
      const address = window.location.href.split("?ref=")[0];
      setLocation(address);
    } else {
      setLocation(window.location.href);
    }
  }, []);


  let LevelsUnil = getUserUniLevel !== undefined && getUserUniLevel !== null ? getUserUniLevel : []



  return (
    // <div>
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={account}
      className={classes.root}
      onClose={() => dispatch(closeModal("account"))}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={account}>
        <div class='popup account'>
          <div class='white'>
            <a href='#' class='closex' onClick={() => dispatch(closeModal("account"))}></a>
            <div class='title'>Your Account</div>
            <div class='text'>
              Here you will be able to view all your wallet statistics including investment portfolio, profits and contract balance
              bonuses and referral statistics. Through this interface, you can make withdrawals, investments, and many more.
            </div>

            <div className={classes.tab}>
              {/* <AppBar position='static' style={{ backgroundColor: "transparent" }}> */}
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor='primary'
                textColor='primary'
                variant='scrollable'
                scrollButtons='auto'
                aria-label='scrollable auto tabs example'>
                <Tab label='Wallet Statistics' {...a11yProps(0)} className={classes.tabSize} />
                <Tab label='Referral Statistics' {...a11yProps(1)} />
                <Tab label='Uni Levels' {...a11yProps(2)} />
                {/* <Tab label='Uni Levels' {...a11yProps(2)} /> */}
                {/* <Tab label='Promotional Material' {...a11yProps(3)} /> */}
              </Tabs>
              {/* </AppBar> */}
              <TabPanel value={value} index={0}>
                {/* <!--tab1--> */}
                <div class='tab tab_1'>
                  <div class='balance'>
                    <div class='left'>
                      <span class='js-user-address'>{userWalletAddress}</span> Your TRX wallet address
                    </div>
                    <div class='right'>
                      <div class='k'>
                        <i class='js-user-balance'>{getUserDividend}</i> Available Withdraw Balance
                      </div>

                      <div class='rrr'>
                        <div class='lock js-lock-withdraw-button'>
                          <a onClick={() => dispatch(withdraw())} class='lock text-center'>
                            {/* <span class='hint' id='hh1'>
                              Withdraw Money
                            </span> */}
                            Withdraw Money
                          </a>
                        </div>
                        <div class='in mt-3'>
                          You can withdraw only <span>50,000 TRX</span> on per 24 hours
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='dopinfo'>
                    <div class='nm'>Information:</div>
                    <div class='d-flex justify-content-md-between'>
                      <div class='left'>
                        <div>
                          <span class='js-user-invested'>{getUserTotalDeposits} TRX</span> Total Invested
                        </div>
                        <div class='red'>
                          <span class='js-user-withdrawn'>{userWithdraw} TRX</span> Total withdrawn
                        </div>
                        {/* <div>
                          <span class='js-user-deposits'>0</span> Total deposits
                          <a href='#' onclick="javascript:popup('.deps');"></a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--/tab1--> */}

                {/* <!--tab1--> */}
                <div class='tab tab_1'>
                  <div class='white'>
                    <div class='depinfo'>
                      <div class='left'>
                        <div class='per'>
                          <span class='js-user-bonus'></span> Your Total Daily Profit
                          <div class='key'>
                            <a href='#' onClick={() => dispatch(openModal("makeDeposit"))}>
                              Make Deposit
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class='right'>
                        <div class='stat'>
                          <div class='l'>
                            <div class='line'>
                              <span>{basePercent}</span> Basic Bonus

                            </div>
                            <div class='line'>
                              <div class='d-flex'>
                                <span class='js-user-contractbonus'>{getUserReferralBonus ? getUserReferralBonus : 0}</span>
                              </div>
                              Referal Bonus

                            </div>
                          </div>
                          <div class='r'>
                            {/* <div class='line'>
                              <div class='d-flex'>
                                <span class='js-user-holdbonus'>{getUserHoldBonus}</span>
                              </div>
                              UniLevel Bonus
                              <div class='hint'>
                                <div>
                                  <div>For each 10 days without withdrawal Hold bonus increase by 0.1% can stack up to 2%</div>
                                </div>
                              </div>
                            </div> */}
                            {/* <div class='line'>
                              <div class='d-flex'>
                                <span class='js-user-refbonus'>{getContractBonus}%</span>
                              </div>
                              Incentive bonus
                              <div class='hint'>
                                <div>
                                  <div>Your Incentive bonus. See Incentive Bonus section for more information</div>
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class='tx'>
                      <div>All bonuses together makes your total daily bonus income percent.</div>
                    </div>
                  </div>
                </div>
                {/* <!--/tab 1--> */}
              </TabPanel>
              <TabPanel value={value} index={1}>
                {/* <!--tab2--> */}
                <div class='tab tab_2'>
                  <div class='links'>
                    <div class='left'>
                      <span class='js-user-reflink' ref={linkref}>
                        {location + "?ref=" + userWalletAddress}
                      </span>{" "}
                      Your referral link
                      <a class='copiedwallet js-user-reflink-copy' onClick={handleCopy}>
                        <FileCopyIcon style={{ color: "lightgray" }} />
                        <p
                          ref={notification}
                          style={{ display: "none", width: 60, paddingLeft: 7, color: "white", marginRight: 20, backgroundColor: "#19657C" }}>
                          copied
                        </p>
                      </a>
                    </div>
                    <div class='right'>
                      <span class='js-user-upline'>{getUserReferrer}</span> Your Upline
                    </div>
                  </div>
                  <div class='infos'>
                    <div class='i'>You must have deposit to be available use referral program</div>
                    <div>
                      <a href='#' onClick={() => dispatch(openModal("makeDeposit"))}>
                        Make Deposit
                      </a>
                    </div>
                  </div>
                  <div class='dopinfo'>
                    <div class='nm'>Referral Statistics:</div>
                    <div class='d-flex justify-content-between'>
                      <div class='ll'>
                        <div>
                          <span class='js-user-available-comm'>{parseInt(getUserReferralBonus)} TRX</span> User Referral Bonus
                        </div>
                        {/* <div class='keys'>
                          <div class='wh'>
                            <a href='#' class='key js-withdraw-com-button'>
                              Withdraw Commission
                            </a>

                            <div class='hint'>
                              <div>
                                <div>You can make only 1 commission withdrawal in 48 hours</div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                      <div class='right'>
                        <div class='green2'>
                          <span class='js-user-earned-comm'>{parseInt(getUserReferralBonus) + parseInt(getUserReferalWithdraw)} TRX</span> Earned
                          Bonus
                        </div>
                        <div class='red'>
                          <span class='js-user-withdrawn-comm'>{parseInt(getUserReferalWithdraw)} TRX</span> Referral Withdraw
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--/tab2--> */}

                {/* <!--tab2--> */}
                <div class='tab tab_2'>
                  <div class='white'>
                    <div class='refs'>
                      {/* <div class='rf rfm'>
                        <div class='n'>
                          <span>1</span>
                          <i class='js-l1rc'>{parseInt(getUserLevel1)}</i>1 Level
                        </div>
                     
                      </div> */}

                      {/* <div class='rf rfm'>
                        <div class='n'>
                          <span>2</span>
                          <i class='js-l2rc'>{parseInt(getUserLevel2)}</i>2 Level
                        </div>
                     
                      </div> */}

                      {/* <div class='rf rfm'>
                        <div class='n'>
                          <span>3</span>
                          <i class='js-l3rc'>{parseInt(getUserLevel3)}</i>3 Level
                        </div>
                    
                      </div> */}
                      {/* <div class='rf rfm'>
                        <div class='n'>
                          <span>3</span>
                          <i class='js-l3rc'>{parseInt(getUserLevel4)}</i>4 Level
                        </div>
                      </div> */}

                      {/* <div class='rf rfm'>
                        <div class='n'>
                          <span>4</span>
                          <i class='js-l4rc'>0</i>4 Level Referrals Active
                        </div>
                        <div class='keys'>
                          <a href='#' onclick='showRefs(4);'>
                            Check Referrals
                          </a>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
                {/* <!--/tab2--> */}
              </TabPanel>
              {/* <TabPanel value={value} index={2}>
               
                <div class='tab tab_3'>
                  <div class='text'>
                    To join, start referring and earn with Tron Dynasty, you need to deposit a minimum of 100 TRX to facilitate registration on the
                    blockchain smart contract system. We have plenty of banners under the promo section. You can make videos, invite family and
                    friends, share your referral link online to build your advertising network. When your Level 1 referral invests and you reach one
                    of goals you get extra referral bonus
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 400, paddingRight: 51, paddingLeft: 51 }}>
                    {`PERSONAL INCENTIVE BONUS 0.01% FOR EVERY 100,000 DIRECT REFERRAL deposit/INVESTMENT MAX 1% 50,000 / >1,000,000 TRX`}
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 400, paddingRight: 51, paddingLeft: 51 }}>
                    {`Users who made deposits of more than 1,000,000 TRX can withdraw only 100,000 TRX per 24 hours. 1,000,000 / >10,000,000 TRX`}
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 400, paddingRight: 51, paddingLeft: 51 }}>
                    {`Users who made deposits of more than 10,000,000 TRX can withdraw only 1,000,000 TRX per 24 hours.`}
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 400, paddingRight: 51, paddingLeft: 51, paddingBottom: 40 }}>
                    {`+0.01% up to your earnings for every 1,000,000 TRX on balance. if the balance falls below 1 million then contract bonus reset
                    again to 0%`}
                  </div>
                  <div class='d-flex justify-content-between align-items-center'>
                    <div class='bonus'>
                      Your incentive bonus: <span class='js-user-refbonus'></span>
                    </div>
                    <div class='r'>
                      <div class='info'>
                        <div>
                          <span class='js-lvl1-com'>{getUserReferralBonus}</span>&nbsp;TRX&nbsp;/&nbsp;&nbsp;10,000,000 TRX
                        </div>
                        Given funds from 1st referrals level
                      </div>
                      <a href='#' onclick='javascript:tabs(4);'>
                        Promotional Materials
                      </a>
                    </div>
                  </div>
                  <div class='grid'>
                    <div class='line'>
                      <div class='lns'></div>
                      <div class={clsx("js-personal-refbonus-percent", getWidth(getUserReferralBonus))}></div>
                    </div>
                    <div class='scale'>
                      <div class='active'>
                        0 TRX<span>0%</span>
                      </div>
                      <div class='hh s active'>
                        2,000,000 TRX<span>0.05%</span>
                      </div>
                      <div class='hh s'>
                        4,000,000 TRX<span>0.10%</span>
                      </div>
                      <div class='hh s'>
                        6,000,000 TRX<span>0.50%</span>
                      </div>
                      <div class='hh s'>
                        8,000,000 TRX<span>0.75%</span>
                      </div>
                      <div>
                        10,000,000 TRX<span>1.00%</span>
                      </div>
                    </div>
                  </div>
                </div>
              
              </TabPanel> */}
              <TabPanel value={value} index={2}>
                {/* <!--tab4--> */}
                <div class='referrals' id='RefPool'>
                  {/* <div class='gift'></div> */}

                  <div class='block'>
                    <div class='d-flex justify-content-between'>
                      <div class='left d-flex flex-column justify-content-center'>
                        <div class='title'>Referral Pool</div>
                        <div class='text'>
                          10 levels of monoline unilevel rewards: 0.05% - 0.05% -  0.05% -  0.05% -  0.05% -  0.05% - 0.05% -  0.05%- 0.05%-  0.05%   Referral
                          rewards comes instantly on your wallet balance and can be withdrawn any time along with earnings.
                        </div>
                      </div>
                      <div class='right'>
                        <div class='name'>Uni Level Earning</div>
                        <div class='scroll-pane'>
                          <ul>
                            <li>
                              <span>1</span> uniLevel 1 {"  "} &nbsp; {LevelsUnil[0]} <i> <span></span></i>
                            </li>
                            <li>
                              <span>2</span>  uniLevel 2 {"  "} &nbsp; {LevelsUnil[1]}
                            </li>
                            <li>
                              <span>3</span>  uniLevel 3 {"  "} &nbsp; {LevelsUnil[2]}
                            </li>
                            <li>
                              <span>4</span>  uniLevel 4 {"  "}  &nbsp; {LevelsUnil[3]}
                            </li>
                            <li>
                              <span>5</span>  uniLevel 5 {"  "}  &nbsp; {LevelsUnil[4]}
                            </li>
                            <li>
                              <span>6</span>  uniLevel 6 {"  "} &nbsp;  {LevelsUnil[5]}
                            </li>
                            <li>
                              <span>7</span>  uniLevel 7 {"  "} &nbsp;  {LevelsUnil[6]}
                            </li>
                            <li>
                              <span>8</span>  uniLevel 8 {"  "} &nbsp;  {LevelsUnil[7]}
                            </li>
                            <li>
                              <span>9</span>  uniLevel 9 {"  "} &nbsp;  {LevelsUnil[8]}
                            </li>
                            <li>

                              <span>10</span>  uniLevel 10 {"  "} &nbsp;  {LevelsUnil[9]}
                            </li>


                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!--/tab4--> */}
              </TabPanel>
            </div>

            {/* 
            <div class='tabs'>
              <a href='#' onclick='javascript:tabs(1);' class='t_1 active'>
                Wallet Statistics
              </a>
              <a href='#' onclick='javascript:tabs(2);' class='t_2'>
                Referral Statistics
              </a>
              <a href='#' onclick='javascript:tabs(3);' class='t_3'>
                Incentive Bonus
              </a>
              <a href='#' onclick='javascript:tabs(4);' class='t_4'>
                Promotional Materials
              </a>
            </div> */}
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

export default Index;
