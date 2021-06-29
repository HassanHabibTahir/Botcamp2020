import {
  USER_WALLET_ADDRESS,
  GET_CONTRACT,
  GET_TRONWEB,
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_FIELD_VALUE,
  SET_REF_ADDRESS,

  // newly added
  // GET_USER_REFERAL_WITHDRAW,
  // GET_USER_PERCENT_RATE,
  GET_USER_UNILEVEL_BONUS,
  TOTAL_WITHDRAWAN,
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
  WALLET_BALANCE,
  GET_USER_REFERRER,
  GET_USER_TOTAL_WITHDRAW,
  // GET_REF_INC,
  // older
  // GET_USER_REF_BACK_PERCENT,
} from "../types";

const initState = {
  // new modals
  makeDeposit: false,
  account: false,
  audit: false,
  confirm: false,
  deposit: false,
  faq: false,
  refs: false,
  success: false,
  video: false,
  vv: false,
  userWithdraw: 0,

  // modals
  // howModal: false,
  // contest: false,
  // startModal: false,
  // subscribe: false,
  // promo: false,
  // deposit: false,

  // input fields value
  money: 0,
  refLink: "",

  // contract & wallet
  userWalletAddress: 0,
  contract: null,
  tronWeb: null,

  // newly added values
  getUserRefBackPercent: 0,
  getUserReferalWithdraw: 0,
  getUserAvailableBalanceWithdrawal: 0,
  getUserPercentRate: 0,
  getUserDividend: 0,
  getUserHoldBonus: 0,
  totalWithdrawan: 0,
  totalInvested: 0,
  getContactBalance: 0,
  users: null,
  walletBalance: 0,
  totalUsers: null,
  getContractBonus: 0,
  getUserUniLvlBonus: 0,
  getContractBalanceRate: 0,
  getUserTotalDeposits: 0,
  getUserAmountOfDeposits: 0,
  basePercent: 0,
  getUserLevel1: 0,
  getUserLevel2: 0,
  getUserLevel3: 0,
  getUserLevel4: 0,
  userUniLvl1: 0,
  userUniLvl2: 0,
  userUniLvl3: 0,
  userUniLvl4: 0,
  userUniLvl5: 0,
  userUniLvl6: 0,
  userUniLvl7: 0,
  userUniLvl8: 0,
  userUniLvl9: 0,
  userUniLvl10: 0,
  // userUniLvl11: 0,
  // userUniLvl12: 0,
  // userUniLvl13: 0,
  // userUniLvl14: 0,
  // userUniLvl15: 0,
  getUserReferrer: "",
  getRefInc: 0,
  // older values
  getUserReferralBonus: 0,
  getUserUniLevel: []


};

export default (state = initState, action) => {
  switch (action.type) {
    case USER_WALLET_ADDRESS:
      return {
        ...state,
        userWalletAddress: action.payload,
      };

    case OPEN_MODAL:
      return {
        ...state,
        [action.name]: action.payload,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        [action.name]: action.payload,
      };

    case GET_CONTRACT:
      return {
        ...state,
        contract: action.payload,
      };

    case GET_TRONWEB:
      return {
        ...state,
        tronWeb: action.payload,
      };

    case SET_FIELD_VALUE:
      return {
        ...state,
        [action.name]: action.payload,
      };

    case SET_REF_ADDRESS:
      return {
        ...state,
        refLink: action.payload,
      };

    case GET_USER_TOTAL_WITHDRAW:
      return {
        ...state,
        userWithdraw: action.payload,
      };



    case TOTAL_WITHDRAWAN:
      return {
        ...state,
        totalWithdrawan: action.payload,
      };

    case TOTAL_INVESTED:
      return {
        ...state,
        totalInvested: action.payload,
      };

    case GET_CONTRACT_BALANCE:
      return {
        ...state,
        getContactBalance: action.payload,
      };

    case USERS:
      return {
        ...state,
        users: action.payload,
      };

    case TOTAL_USERS:
      return {
        ...state,
        totalUsers: action.payload,
      };



    case GET_USER_TOTAL_DEPOSITS:
      return {
        ...state,
        getUserTotalDeposits: action.payload,
      };



    case GET_USER_REFERRAL_BONUS:
      return {
        ...state,
        getUserReferralBonus: action.payload,
      };

    case WALLET_BALANCE:
      return {
        ...state,
        walletBalance: action.payload,
      };



    case GET_USER_DIVIDENDS:
      return {
        ...state,
        getUserDividend: action.payload,
      };



    case GET_USER_REFERRER:
      return {
        ...state,
        getUserReferrer: action.payload,
      };
    case GET_USER_UNILEVEL_BONUS:
      return {
        ...state,
        getUserUniLevel: action.payload
      }


    default:
      return state;
  }
};
