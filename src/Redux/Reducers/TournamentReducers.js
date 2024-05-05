import {
    TOURNAMENT_CREATE_FAIL,
    TOURNAMENT_CREATE_REQUEST,
    TOURNAMENT_CREATE_RESET,
    TOURNAMENT_CREATE_SUCCESS,
    TOURNAMENT_DELETE_FAIL,
    TOURNAMENT_DELETE_REQUEST,
    TOURNAMENT_DELETE_SUCCESS,
    TOURNAMENT_LIST_FAIL,
    TOURNAMENT_LIST_REQUEST,
    TOURNAMENT_LIST_SUCCESS,
  } from "../Constants/TournamentConstants";
  
  // ALL TOURNAMENTS
  export const tournamentListReducer = (state = { tournaments: [] }, action) => {
    switch (action.type) {
      case TOURNAMENT_LIST_REQUEST:
        return { loading: true, tournaments: [] };
      case TOURNAMENT_LIST_SUCCESS:
        return { loading: false, tournaments: action.payload };
      case TOURNAMENT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  // DELETE TOURNAMENT
  export const tournamentDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case TOURNAMENT_DELETE_REQUEST:
        return { loading: true };
      case TOURNAMENT_DELETE_SUCCESS:
        return { loading: false, success: true };
      case TOURNAMENT_DELETE_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  // CREATE TOURNAMENT
  export const tournamentCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case TOURNAMENT_CREATE_REQUEST:
        return { loading: true };
      case TOURNAMENT_CREATE_SUCCESS:
        return { loading: false, success: true, tournament: action.payload };
      case TOURNAMENT_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case TOURNAMENT_CREATE_RESET:
        return {};
      default:
        return state;
    }
  }; 