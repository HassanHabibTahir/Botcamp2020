import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/actions/actions";
import image1 from "../../assets/images/lang/en.svg";
import image2 from "../../assets/images/lang/ir.svg";
import image3 from "../../assets/images/lang/id.svg";
import image4 from "../../assets/images/lang/ru.svg";
import image5 from "../../assets/images/lang/de.png";
import image6 from "../../assets/images/lang/fr.svg";
import image7 from "../../assets/images/lang/es.svg";
import image8 from "../../assets/images/lang/ch.svg";
import image9 from "../../assets/images/lang/vt.svg";
import logo from "../../assets/logo.png";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import { Hidden, IconButton } from "@material-ui/core";
import { environment } from "../../core/environment";

function Index({ toggle }) {
  const { getContactBalance, userWalletAddress, getUserDividend } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <div class='navflow'>
        <div class='d-flex justify-content-between'>
          <span></span>
          <span class='burger' onClick={toggle}></span>
        </div>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a onClick={() => dispatch(openModal("makeDeposit"))}>Make Deposit</a>
          </li>
          <li>
            <a href='#' onclick='promote()'>
              Promote Us
            </a>
          </li>
          <li>
            <a href='#RefPool'>Referral Pool</a>
          </li>
          <li>
            <a href='#' onclick="popup('.faq');">
              FAQ
            </a>
          </li>
          <li>
            <a href='#contacts'>Contacts</a>
          </li>
        </ul>
      </div>

      {/* second part */}
      <div class='header'>
        <div class='bgpart' id='particles-js'></div>
        <div class='container' style={{ zIndex: 4 }}>
          <div class='top'>
            <div class='logo'>
              <img src={logo} width='200' />
            </div>
            <div class='wallet'>
              <span>Smart-Contract Address:</span>{environment.address}
            </div>
          </div>
          <div class='nav'>
            <Hidden smUp>
              <IconButton onClick={toggle}>
                <MenuIcon className='text-white' />
              </IconButton>
            </Hidden>

            <ul className='large-nav'>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a onClick={() => dispatch(openModal("makeDeposit"))}>Make Deposit</a>
              </li>
              <li>
                <a onClick={() => dispatch(openModal("account"))}>Promote Us</a>
              </li>
              <li>
                <a href='#RefPool'>Referral Pool</a>
              </li>
              <li>
                <a onClick={() => dispatch(openModal("faq"))}>FAQ</a>
              </li>
              <li>
                <a href='#contacts'>Contacts</a>
              </li>
            </ul>

            <div class='keys'>
              <a onClick={() => dispatch(openModal("account"))} class={clsx("key_noauth", userWalletAddress && "login-icon")}>
                Connect Wallet
              </a>
              <a class={clsx("k1", !userWalletAddress && "login-icon")} onClick={() => dispatch(openModal("account"))}></a>
            </div>
          </div>
        </div>

        {/* third part */}
        <div class='container'>
          <div class='slide d-flex justify-content-between'>
            <div class='left'>
              <div class='title'>
                CRYPTO BANK Tron Blockchain investment platform
                <span>Verified & Audited Smart Contract Investment Platform.</span>
              </div>

              <div class='text'>
                CRYPTO BANK isn’t run by a human, CEO, or company — it runs exclusively on a blockchain. Once it’s uploaded, no individual or
                company can edit the platform. That means it’s made entirely for the people, and no CEO or company has any control over the funds and
                distribution.
              </div>

              <div class='checkc'>
                <a href={environment.contractLink} target='_BLANK'>
                  Check contract
                </a>
                <a href='#' style={{ display: "none" }}>
                  Watch video
                </a>
              </div>

              <div class='icons' style={{ justifyContent: "center" }}>
                {/* <div class='i h1'>
                  <span>Long Term Project</span> Decentralized, community-based
                </div> */}

                <div class='i h2' style={{ justifyContent: "center", textAlign: "center" }}>
                  <span>Get User Dividends</span>
                  <span style={{ fontSize: "2rem", color: "#F6828F " }}>{getUserDividend ? getUserDividend : 0}</span>
                </div>


              </div>


            </div>

            <div class='right'>
              <div class='percent'>

                <span class='js-current-daily'>1%</span> Current Daily
                <br /> Profit
              </div>

              <div class='pinfo'>
                <div class='c'>
                  {/* Current Daily Profit: */}
                  Current platform balance in TRX:

                  <br /> <span class='js-current-daily'>{getContactBalance} Trx</span>
                </div>
                {/* <div class='content'>
                  <div class='content__container'>
                    <ul class='content__container__list'>
                      <li class='content__container__list__item'>+0.01% bonus for every 100 investors on platform</li>
                      <li class='content__container__list__item'>Maximal Hold Bonus 2%</li>
                      <li class='content__container__list__item'>Maximal Active User Bonus 4%</li>
                      <li class='content__container__list__item'>Maximal Incentive Bonus 1%</li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
            {/* <div class='dpinfo'>
              Current platform balance in TRX:
              <div>
                <div class='js-contract-balance'>{getContactBalance}</div>
              </div>
              <small class='js-contract-invested' data-text='Total Investors'></small>
              <br />
              <br />
            </div> */}
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Index;
