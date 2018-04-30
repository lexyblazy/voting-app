import axios from "axios";
import { FETCH_USER, FETCH_ALL_POLLS } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchAllPolls = () => async dispatch => {
  const res = await axios.get("/api/polls");
  dispatch({ type: FETCH_ALL_POLLS, payload: res.data });
};
