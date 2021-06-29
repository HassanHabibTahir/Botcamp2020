import { toast } from "react-toastify";
import { environment } from "../../core/environment";
import {
  OPEN_MODAL,
  USER_WALLET_ADDRESS,
  GET_TRONWEB,
  GET_CONTRACT,
  CLOSE_MODAL,
  SET_FIELD_VALUE,
  SET_REF_ADDRESS,

  // newly added
  // GET_USER_REFERAL_WITHDRAW,
  // GET_USER_PERCENT_RATE,
  GET_USER_UNILEVEL_BONUS,
  TOTAL_WITHDRAWAN,
  WALLET_BALANCE,
  TOTAL_INVESTED,
  GET_CONTRACT_BALANCE,
  USERS,
  TOTAL_USERS,
  // GET_CONTRACT_BONUS,
  // GET_USER_UNI_LVL_BONUS,
  // GET_CONTRACT_BALANCE_RATE,
  GET_USER_TOTAL_DEPOSITS,
  // GET_USER_AMOUNT_OF_DEPOSITS,
  // BASE_PERCENT,
  GET_USER_REFERRAL_BONUS,
  // GET_USER_DOWNLINE_COUNT,
  // GET_USER_UNI_LEVEL_AMOUNT,
  GET_USER_DIVIDENDS,
  // GET_USER_AVAILABLE_BALANCE_WITHDRAWAL,
  GET_USER_REFERRER,
  // GET_REF_INC,
  GET_USER_TOTAL_WITHDRAW,
  //
  // GET_USER_REF_BACK_PERCENT,
} from "../types";

export const addressActions = (defaultAddress, tronWeb) => async dispatch => {
  // console.log("address ==========> ", defaultAddress);
  // console.log("contract address ==========> ", environment.address);
  // console.log("tronWeb ==========> ", tronWeb);

  let tradeobj = await tronWeb.trx.getAccount(defaultAddress);


  dispatch({
    type: WALLET_BALANCE,

    payload: tronWeb.fromSun(tradeobj.balance),
  });

  // dispatch user wallet address
  dispatch({
    type: USER_WALLET_ADDRESS,
    payload: defaultAddress,
  });

  // dispatch tronweb object
  dispatch({
    type: GET_TRONWEB,
    payload: tronWeb,
  });

  await tronWeb
    .contract()
    .at(environment.address)
    .then(async contract => {


      // dispatch contract
      dispatch({
        type: GET_CONTRACT,
        payload: contract,
      });

      //  get user ref back percent
      // await contract
      //   .getUserRefbackPercent(defaultAddress)
      //   .call()
      //   .then(value => {
      //     // console.log("getUserRefbackPercent ========> ", Number(value));
      //     dispatch({
      //       type: GET_USER_REF_BACK_PERCENT,
      //       payload: Number(value),
      //     });
      //   });

      // get userreferal withdraw
      // await contract
      //   .getUserReferralWithdraw(defaultAddress)
      //   .call()
      //   .then(value => {
      //     // console.log("getUserReferralWithdraw =========> ", tronWeb.fromSun(value));
      //     dispatch({
      //       type: GET_USER_REFERAL_WITHDRAW,
      //       payload: tronWeb.fromSun(value),
      //     });
      //   });

      // get user available baance withdrawal =======No
      // await contract
      //   .getUserPercentRate(defaultAddress)
      //   .call()
      //   .then(value => {
      //     // console.log("getUserPercentRate =========> ", Number(value));
      //     dispatch({
      //       type: GET_USER_PERCENT_RATE,
      //       payload: Number(value) / 100,
      //     });
      //   });

      //get user hold bonus ========>No
      //HOLDBOUNS IS CHANGED IN TO UNILEVEL FRONTEND AUTO CHANGED
      let GETUNI_LEVEL = []

      for (var i = 0; i < 10; i++) {
        await contract
          .unilvl(defaultAddress, i)
          .call()
          .then((val) => {
            // console.log(val.toNumber())
            GETUNI_LEVEL.push(tronWeb.fromSun(val))


          })
      }

      dispatch({
        type: GET_USER_UNILEVEL_BONUS,
        payload: GETUNI_LEVEL
      });
      // console.log("GETUNI_LEVEL", GETUNI_LEVEL)

      // await contract
      //   .unilvl(defaultAddress)
      //   .call()
      //   .then(value => {



      //   });

      await contract
        .users(defaultAddress)
        .call()
        .then(value => {

          dispatch({
            type: GET_USER_TOTAL_WITHDRAW,
            payload: tronWeb.fromSun(value.total_payouts),
          });
        });
      //get user total Withdrawn
      //2
      await contract
        .total_withdraw()
        .call()
        .then(value => {

          dispatch({
            type: TOTAL_WITHDRAWAN,
            payload: tronWeb.fromSun(value),
          });
        });

      //get user total invested
      //3
      await contract
        .total_deposited()
        .call()
        .then(value => {

          dispatch({
            type: TOTAL_INVESTED,
            payload: tronWeb.fromSun(value),
          });
        });

      //get contract balance
      await contract
        .getContractBalance()
        .call()
        .then(value => {

          dispatch({
            type: GET_CONTRACT_BALANCE,
            payload: tronWeb.fromSun(value),
          });
        });

      //get users


      //get total users
      //4
      await contract
        .total_users()
        .call()
        .then(value => {
          // console.log("totalUsers ======> ", Number(value));
          dispatch({
            type: TOTAL_USERS,
            payload: Number(value),
          });
        });


      // get user total deposits
      await contract
        .users(defaultAddress)
        .call()
        .then(value => {
          // console.log("getUserTotal Deposits ======> ", tronWeb.fromSun(value.total_deposits));
          dispatch({
            type: GET_USER_TOTAL_DEPOSITS,
            payload: tronWeb.fromSun(value.total_deposits),
          });
        });

      // get user total deposits
      //5


      //get user referral bonus
      //7
      await contract
        .users(defaultAddress)
        .call()
        .then(value => {

          dispatch({
            type: GET_USER_REFERRAL_BONUS,
            payload: tronWeb.fromSun(value.direct_bonus),
          });
        });


      //get user referral bonus
      //8 
      await contract
        .users(defaultAddress)
        .call()
        .then(value => {
          // console.log("getUser  referrer ======> ", tronWeb.address.fromHex(value.upline));
          dispatch({
            type: GET_USER_REFERRER,
            payload: tronWeb.address.fromHex(value.upline),
          });
        });


    });
};

//1
export const currentDailyProfit = () => async (dispatch, state) => {
  //get user dividends
  state().contract &&
    (await state()
      .contract.payoutOf(state().userWalletAddress)
      .call()
      .then(value => {

        dispatch({
          type: GET_USER_DIVIDENDS,
          payload: state().tronWeb.fromSun(value.payout),
        });
      }));
};

// export const availableWithdrawal = () => async (dispatch, state) => {

//   state().contract &&
//     (await state()
//       .contract.payoutOf(state().userWalletAddress)
//       .call()
//       .then(value => {
//         // console.log("getUserAvailableBalanceForWithdrawal =========> ", value);
//         dispatch({
//           type: GET_USER_AVAILABLE_BALANCE_WITHDRAWAL,
//           payload: state().tronWeb.fromSun(value),
//         });
//       }));
// };

const success = successMsg => {
  toast.success(successMsg, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

// dispatch to invest
export const invest = () => async (dispatch, state) => {
  const refAddress = localStorage.getItem("refAddress");

  // console.log(refAddress, "ref address");
  // console.log(state())
  if (state().contract) {
    if (refAddress) {
      await state()
        .contract.deposit(refAddress)
        .send({
          feeLimit: 100_000_000,
          callValue: state().tronWeb.toSun(state().money),
        })
        .then(output => {
          success("transaction successful, please wait for conformation");
          addressActions(state().userWalletAddress, state().tronWeb);

        });
    } else {
      await state()
        .contract.deposit(environment.defaultAddress)
        .send({
          feeLimit: 100_000_000,
          callValue: state().tronWeb.toSun(state().money),
        })
        .then(output => {
          success("transaction successful, please wait for conformation");
          addressActions(state().userWalletAddress, state().tronWeb);

        });
    }
  }

};

// dispatch to withdraw
export const withdraw = () => async (dispatch, state) => {
  await state()
    .contract.withdraw()
    .send({
      feeLimit: 100_000_000,
    })
    .then(output => {
      success("transaction successful, please wait for conformation");

    });
};

// dispatch ref link
export const refLink = link => dispatch => {
  link.replace(/\/#/g, "");
  // console.log(link, "link ============> ");
  dispatch({
    type: SET_REF_ADDRESS,
    payload: link,
  });
};

// dispatch field values
export const setState = (name, value) => dispatch => {
  dispatch({
    type: SET_FIELD_VALUE,
    name: name,
    payload: value,
  });
};

// dispatch to open modals
export const openModal = name => dispatch => {
  // console.log(name);
  dispatch({
    type: OPEN_MODAL,
    name: name,
    payload: true,
  });
};

// dispatch to close modals
export const closeModal = name => dispatch => {
  dispatch({
    type: CLOSE_MODAL,
    name: name,
    payload: false,
  });
};
