import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { HYDRATE } from "next-redux-wrapper";
import Logins, { loginSaga } from "../modules/common/login";
import PwdInquiry, {
  pwdInquirySaga
} from "../modules/common/userInquiry/pwdInquiry";
import IdInquiry, {
  idInquirySaga
} from "../modules/common/userInquiry/idInquiry";
import Timer from "./common/timer";

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  //여기에 리듀서 등록
  return combineReducers({
    Logins,
    IdInquiry,
    PwdInquiry,
    Timer
  })(state, action);
};

export function* rootSaga() {
  yield all([
    loginSaga(),
    idInquirySaga(),
    pwdInquirySaga()
    //여기에 사가 등록
  ]);
}

export default rootReducer;
