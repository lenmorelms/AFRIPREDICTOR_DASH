import {
    TOURNAMENT_CREATE_FAIL,
    TOURNAMENT_CREATE_REQUEST,
    TOURNAMENT_CREATE_SUCCESS,
    TOURNAMENT_DELETE_FAIL,
    TOURNAMENT_DELETE_REQUEST,
    TOURNAMENT_DELETE_SUCCESS,
    TOURNAMENT_LIST_FAIL,
    TOURNAMENT_LIST_REQUEST,
    TOURNAMENT_LIST_SUCCESS,
  } from "../Constants/TournamentConstants";
  import axios from "axios";
  import { logout } from "./UserActions";
  
  // List Tournaments
  export const listTournaments = () => async (dispatch, getState) => {
    try {
      dispatch({ type: TOURNAMENT_LIST_REQUEST });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.get(`/api/tournaments`, config);
  
      dispatch({ type: TOURNAMENT_LIST_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: TOURNAMENT_LIST_FAIL,
        payload: message,
      });
    }
  };
  
  // Delete Tournament
  export const deleteTournament = (id) => async (dispatch, getState) => {
    try {
      dispatch({ type: TOURNAMENT_DELETE_REQUEST });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      await axios.delete(`/api/admin/tournaments/${id}`, config);
  
      dispatch({ type: TOURNAMENT_DELETE_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: TOURNAMENT_DELETE_FAIL,
        payload: message,
      });
    }
  };
  
  // Create Tournament
  export const createTournamentItem = (name, category, country) => async (dispatch, getState) => {
    try {
        dispatch({ type: TOURNAMENT_CREATE_REQUEST });
  
        const {
          userLogin: { userInfo },
        } = getState();
  
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userInfo.token}`,
          },
        };
  
        const { data } = await axios.post(
          `/api/admin/tournaments`,
          { name, category, country },
          config
        );
  
        dispatch({ type: TOURNAMENT_CREATE_SUCCESS, payload: data });
  
        // Reload Tournaments
        
      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        if (message === "Not authorized, token failed") {
          dispatch(logout());
        }
        dispatch({
          type: TOURNAMENT_CREATE_FAIL,
          payload: message,
        });
      }
  };