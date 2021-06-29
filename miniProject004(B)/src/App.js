import "./App.css";
import React, { useEffect, useState } from "react";
import TronHelper from "./core/tronweb";
import Header from "./components/header";
import Deposit from "./components/about";
import InvestConditions from "./components/invest-conditions";
import PanInfo from "./components/paninfo";
import ClipCode from "./components/clipcode";
import Footer from "./components/footer";
import Telegram from "./components/telegram";
import Make from "./components/modals/make";
import Account from "./components/modals/account";
import Audit from "./components/modals/audit-v";
import Confirm from "./components/modals/confirm";
import DepositModal from "./components/modals/deposit";
import Faq from "./components/modals/faq";
import Refs from "./components/modals/refs";
import Success from "./components/modals/success";
import Video from "./components/modals/video";
import Vv from "./components/modals/vv";
import AppDrawer from "./components/drawer";
import { useDispatch } from "react-redux";
import BottomBtn from "./components/bottombtn";
import "react-toastify/dist/ReactToastify.css";
import { addressActions, currentDailyProfit, refLink } from "./redux/actions/actions";

function App() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getWebTron = setInterval(() => {
      if (window.tronWeb && window.tronWeb.ready) {
        // setTronWeb(window.tronWeb);
        getCurrentWallet(window.tronWeb);
        // clearInterval(getWebTron);
        setTimeout(() => {
          setInterval(() => {
            dispatch(currentDailyProfit());
            // dispatch(availableWithdrawal());
          }, 2000);
        }, 3000);
      }
    }, 1000);
  }, []);

  React.useLayoutEffect(() => {
    dispatch(refLink(window.location.href));
  }, []);

  const getCurrentWallet = async tron => {
    await dispatch(addressActions(tron["defaultAddress"]["base58"], tron)).then(() => {
      // console.log("running");
    });
  };

  useEffect(() => {
    if (window.location.href.includes("?ref=")) {
      const address = window.location.href.split("?ref=")[1];
      localStorage.setItem("refAddress", address.slice(0, 34));
    }
  }, []);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <AppDrawer open={open} toggleDrawer={toggleDrawer}>
        <div class='site'>
          <Header toggle={toggleDrawer} />
          <div class='main'>
            <Deposit />
            <InvestConditions />
            <PanInfo />
            {/* <ClipCode /> */}
          </div>
          <Footer />
        </div>
        {/* <Telegram /> */}
        {/* modals */}
        <Account />
        <Make />
        <Audit />
        <Confirm />
        <DepositModal />
        <Faq />
        <Refs />
        <Success />
        <Video />
        <Vv />
      </AppDrawer>

      <BottomBtn />
    </React.Fragment>
  );
}

export default App;
