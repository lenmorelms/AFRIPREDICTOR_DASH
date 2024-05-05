import {
    ZIMPSL_LIST_FAIL,
    ZIMPSL_LIST_REQUEST,
    ZIMPSL_LIST_RESET,
    ZIMPSL_LIST_SUCCESS,
    ZIMPSL_CREATE_REQUEST,
    ZIMPSL_CREATE_SUCCESS,
    ZIMPSL_CREATE_FAIL,
    ZIMPSL_CREATE_RESET,
    ZIMPSL_EDIT_REQUEST,
    ZIMPSL_EDIT_SUCCESS,
    ZIMPSL_EDIT_FAIL,
    ZIMPSL_UPDATE_REQUEST,
    ZIMPSL_UPDATE_SUCCESS,
    ZIMPSL_UPDATE_FAIL,
    ZIMPSL_UPDATE_RESET,
    ZIMPSL_DELETE_REQUEST,
    ZIMPSL_DELETE_SUCCESS,
    ZIMPSL_DELETE_FAIL,
    ZIMPSL_GAMEWEEKS_REQUEST,
    ZIMPSL_GAMEWEEKS_SUCCESS,
    ZIMPSL_GAMEWEEKS_FAIL,
  } from "../Constants/ZimpslConstants";
  
  // ALL ZIMPSL FIXTURES
  export const zimpslFixturesListReducer = (state = { zimpslfixtures: [] }, action) => {
    switch (action.type) {
      case ZIMPSL_LIST_REQUEST:
        return { loading: true };
      case ZIMPSL_LIST_SUCCESS:
        return { loading: false, zimpslfixtures: action.payload };
      case ZIMPSL_LIST_FAIL:
        return { loading: false, error: action.payload };
      case ZIMPSL_LIST_RESET:
        return { zimpslfixtures: [] };
      default:
        return state;
    }
  };

// GET ZIMPSL GAMEWEEKS
export const zimpslGameweeksReducer = (state = { zimpslgameweeks: [] }, action) => {
  switch (action.type) {
    case ZIMPSL_GAMEWEEKS_REQUEST:
      return {};
    case ZIMPSL_GAMEWEEKS_SUCCESS:
      return { zimpslgameweeks: action.payload };
    case ZIMPSL_GAMEWEEKS_FAIL:
      return { error: action.payload };  
    default:
      return state;
  }
}
  
//   CREATE ZIMPSL FIXTURE
  export const zimpslFixturesCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case ZIMPSL_CREATE_REQUEST:
        return { loading: true };
      case ZIMPSL_CREATE_SUCCESS:
        return { loading: false, success: true, zimpslfixture: action.payload };
      case ZIMPSL_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case ZIMPSL_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  
  // EDIT ZIMPSL FIXURE
  export const zimpslFixtureEditReducer = (
    state = {zimpslfixture: {} },
    action
  ) => {
    switch (action.type) {
      case ZIMPSL_EDIT_REQUEST:
        return { ...state, loading: true };
      case ZIMPSL_EDIT_SUCCESS:
        return { loading: false, zimpslfixture: action.payload };
      case ZIMPSL_EDIT_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  // UPDATE ZIMPSL FIXTURE
  export const zimpslFixtureUpdateReducer = (state = { zimpslfixture: {} }, action) => {
    switch (action.type) {
      case ZIMPSL_UPDATE_REQUEST:
        return { loading: true };
      case ZIMPSL_UPDATE_SUCCESS:
        return { loading: false, success: true, zimpslfixture: action.payload };
      case ZIMPSL_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      case ZIMPSL_UPDATE_RESET:
        return { zimpslfixture: {} };
      default:
        return state;
    }
  };
  
  // DELETE PRODUCT
  export const zimpslFixtureDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case ZIMPSL_DELETE_REQUEST:
        return { loading: true };
      case ZIMPSL_DELETE_SUCCESS:
        return { loading: false, success: true };
      case ZIMPSL_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };