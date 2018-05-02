import axios from "axios";
import { FETCH_USER, FETCH_ALL_POLLS, FETCH_POLL } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchAllPolls = () => async dispatch => {
  const res = await axios.get("/api/polls");
  dispatch({ type: FETCH_ALL_POLLS, payload: res.data });
};
export const fetchPoll = (id) => async dispatch => {
  const res = await axios.get(`/api/poll/${id}`);
  dispatch({ type: FETCH_POLL, payload: res.data });
};

export const createPoll = (poll, history) => {
  return async dispatch => {
    const res = await axios.post("/api/polls", poll);
    history.push("/polls");
  };
};
