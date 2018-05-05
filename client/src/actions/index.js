import axios from "axios";
import { FETCH_USER, FETCH_ALL_POLLS, FETCH_POLL } from "./types";

/*===========================================================
  WHATEVER IS DISPATCHED FROM HERE GETS SENT TO THE REDUCERS
============================================================*/

// this action fetches the user and sends it off to the reducers
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

// this action fetches all polls
export const fetchAllPolls = () => async dispatch => {
  const res = await axios.get("/api/polls");
  dispatch({ type: FETCH_ALL_POLLS, payload: res.data });
};

// this action fetches a specific poll by id
export const fetchPoll = id => async dispatch => {
  const res = await axios.get(`/api/poll/${id}`);
  dispatch({ type: FETCH_POLL, payload: res.data });
};

// this action creates a new poll on the server/database
export const createPoll = (poll, history) => {
  return async dispatch => {
    try {
      const res = await axios.post("/api/polls", poll);
      history.push("/polls");
    } catch (error) {
      console.log(error.response.data);
      // todo, dispatch an action when poll creation fails
      history.push("/polls");
    }
  };
};

// this action votes on a poll
export const votePoll = (pollId, choice) => {
  return async dispatch => {
    try {
      //send our option to the api
      await axios.post(`/api/poll/${pollId}/vote/${choice}`);
      // then fetch the updated version of that poll
      const res = await axios.get(`/api/poll/${pollId}`);
      dispatch({ type: FETCH_POLL, payload: res.data });
    } catch (error) {
      console.log({ error });
    }
  };
};
