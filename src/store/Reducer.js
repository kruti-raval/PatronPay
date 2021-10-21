import Localbase from "localbase";

let db = new Localbase("db");
db.config.debug = false;
const initialState = {
  buttonValue: false,
  doneArray: [],
  notDoneArray: [],
  orderArray: [],
  transaction: [],
  memberTime: "",
  userData: [],
  profileItems: [],
  paymentProfiles: [],
  paymentProfileName: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DONE":
      return {
        ...state,
        buttonValue: true,
      };
    case "NOT_DONE":
      return { ...state, buttonValue: false };
    case "ORDERS":
      return {
        ...state,
        orders: action.payload,
      };
    case "TOTALDATA":
      return {
        ...state,
        totalData: action.payload,
      };
    case "RETURN":
      return {
        ...state,
        returnData: action.payload,
      };
    case "SIDER":
      db.collection("sider").add({
        siderData: action.payload,
      });
      return {
        ...state,
        siderData: action.payload,
      };
    case "SIDERRETURN":
      // db.collection("siderReturn").add({
      //   siderData: action.payload,
      // });
      return {
        ...state,
        siderReturnData: action.payload,
      };
    case "ORDERARRAY":
      db.collection("orderArray").add({
        orderArray: [...state.orderArray, action.payload],
      });
      return {
        ...state,
        orderArray: [...state.orderArray, action.payload],
      };
    case "DONEARRAY":
      db.collection("doneArray").add({
        doneArray: [...state.doneArray, action.payload],
      });
      return {
        ...state,
        doneArray: [...state.doneArray, action.payload],
      };

    case "NOTDONEARRAY":
      return {
        ...state,
        notDoneArray: [...state.notDoneArray, action.payload],
      };

    case "INITIAL_ORDER_STATE":
      return {
        orderArray: action.payload,
      };

    case "INITIAL_DONE_STATE":
      return {
        orderArray: action.payload,
      };

    case "TRANSACTION":
      return {
        ...state,
        transaction: action.payload,
      };
    case "MEMBERTIME":
      return {
        ...state,
        memberTime: action.payload,
      };
    case "USER_DATA":
      return {
        ...state,
        userData: action.payload,
      };
    case "PROFILE_ITEMS":
      return {
        ...state,
        profileItems: action.payload,
      };
    case "PAYMENT_PROFILES":
      return {
        ...state,
        paymentProfiles: action.payload,
      };
    case "PAYMENT_PROFILE_NAME":
      return {
        ...state,
        paymentProfileName: action.payload,
      };
    default:
      return;
  }
};

export { reducer, initialState };
