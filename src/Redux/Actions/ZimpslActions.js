import {
    ZIMPSL_LIST_FAIL,
    ZIMPSL_LIST_REQUEST,
    ZIMPSL_LIST_SUCCESS,
    // ZIMPSL_DETAILS_REQUEST,
    // ZIMPSL_DETAILS_SUCCESS,
    // ZIMPSL_DETAILS_FAIL,
    ZIMPSL_CREATE_REQUEST,
    ZIMPSL_CREATE_SUCCESS,
    ZIMPSL_CREATE_FAIL,
    ZIMPSL_DELETE_REQUEST,
    ZIMPSL_DELETE_SUCCESS,
    ZIMPSL_DELETE_FAIL,
    ZIMPSL_GAMEWEEKS_REQUEST,
    ZIMPSL_GAMEWEEKS_SUCCESS,
    ZIMPSL_GAMEWEEKS_FAIL,
    ZIMPSL_EDIT_REQUEST,
    ZIMPSL_EDIT_SUCCESS,
    ZIMPSL_EDIT_FAIL,
    ZIMPSL_UPDATE_REQUEST,
    ZIMPSL_UPDATE_SUCCESS,
    ZIMPSL_UPDATE_FAIL,
    ZIMPSL_UPDATE_RESET,
  } from "../Constants/ZimpslConstants";
  import { logout } from "./UserActions";
  import axios from "axios";
  
  // ALL ZIMPSL FIXTURES
  export const listZimpsl = () => async (dispatch, getState) => {
    try {
      dispatch({ type: ZIMPSL_LIST_REQUEST });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.get(`/api/admin/zimpsl/fixtures`, config);
  
      dispatch({ type: ZIMPSL_LIST_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: ZIMPSL_LIST_FAIL,
        payload: message,
      });
    }
  };
  
  // ZIMPSL GAMEWEEKS
  export const listZimpslGameweeks = () => async (dispatch, getState) => {
    try {
      dispatch({ type: ZIMPSL_GAMEWEEKS_REQUEST });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.get(`/api/admin/zimpsl/fixtures/gameweeks`, config);
  
      dispatch({ type: ZIMPSL_GAMEWEEKS_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: ZIMPSL_GAMEWEEKS_FAIL,
        payload: message,
      });
    }
  };
  // ZIMPSL FIXTURE BY GAMEWEEK
  export const listZimpslByGameweek = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: ZIMPSL_LIST_REQUEST });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };

        const { data } = await axios.get(`/api/admin/zimpsl/fixtures/${id}`, config);
  
        dispatch({ type: ZIMPSL_LIST_SUCCESS, payload: data });
    } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        if (message === "Not authorized, token failed") {
          dispatch(logout());
        }
        dispatch({
          type: ZIMPSL_LIST_FAIL,
          payload: message,
        });
      }
  }
  // CREATE ZIMPSL FIXTURE
  export const createZimpslFixture = (formData) => async (dispatch, getState) => {
    try {
      dispatch({ type: ZIMPSL_CREATE_REQUEST });
  
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
        `/api/admin/zimpsl/fixtures`,
        formData,
        config
      );
      dispatch({ type: ZIMPSL_CREATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        if (message === "Not authorized, token failed") {
          dispatch(logout());
        }
        dispatch({
          type: ZIMPSL_CREATE_FAIL,
          payload: message,
        });
    }
  };
  
  // EDIT ZIMPSL FIXTURE
  export const editZimpslFixture = (id) => async (dispatch) => {
    try {
      dispatch({ type: ZIMPSL_EDIT_REQUEST });
      const { data } = await axios.get(`/api/admin/zimpsl/fixtures${id}`);
      dispatch({ type: ZIMPSL_EDIT_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: ZIMPSL_EDIT_FAIL,
        payload: message,
      });
    }
  };
  
  // UPDATE ZIMPSL FIXTURE
  export const updateZimpslFixture = (formData) => async (dispatch, getState) => {
    try {
      dispatch({ type: ZIMPSL_UPDATE_REQUEST });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      const { data } = await axios.put(
        `/api/admin/zimpsl`,
        formData,
        config
      );
      dispatch({ type: ZIMPSL_UPDATE_SUCCESS, payload: data });
      dispatch({ type: ZIMPSL_UPDATE_RESET, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: ZIMPSL_UPDATE_FAIL,
        payload: message,
      });
    }
  };
  
  // DELETE ZIMPSL FIXTURE
  export const deleteZimpslFixture = (id) => async (dispatch, getState) => {
    try {
      dispatch({ type: ZIMPSL_DELETE_REQUEST });
  
      const {
        userLogin: { userInfo },
      } = getState();
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
  
      await axios.delete(`/api/admin/zimpsl/fixtures/${id}`, config);
  
      dispatch({ type: ZIMPSL_DELETE_SUCCESS });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: ZIMPSL_DELETE_FAIL,
        payload: message,
      });
    }
  };  