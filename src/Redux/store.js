import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { 
  userListReducer, 
  userLoginReducer, 
  userDetailsReducer, 
  userCreateReducer, 
  userEditReducer, 
  userUpdateReducer, 
  userDeleteReducer
} from "./Reducers/UserReducers";
import {
  tournamentCreateReducer,
  tournamentDeleteReducer,
  tournamentListReducer,
} from "./Reducers/TournamentReducers";
import { 
  zimpslFixturesListReducer,
  zimpslGameweeksReducer,
  zimpslFixturesCreateReducer,
  zimpslFixtureEditReducer,
  zimpslFixtureUpdateReducer,
  zimpslFixtureDeleteReducer,
} from "./Reducers/ZimpslReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userList: userListReducer,
  userDetails: userDetailsReducer,
  userCreate: userCreateReducer,
  userEdit: userEditReducer,
  userUpdate: userUpdateReducer,
  userDelete: userDeleteReducer,

  tournamentList: tournamentListReducer,
  tournamentDelete: tournamentDeleteReducer,
  tournamentCreate: tournamentCreateReducer,

  zimpslFixturesList: zimpslFixturesListReducer,
  zimpslGameweeks: zimpslGameweeksReducer,
  zimpslFixturesCreate: zimpslFixturesCreateReducer,
  zimpslFixtureEdit: zimpslFixtureEditReducer,
  zimpslFixtureUpdate: zimpslFixtureUpdateReducer,
  zimpslFixtureDelete: zimpslFixtureDeleteReducer,
});
// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware)
    )
);

export default store;