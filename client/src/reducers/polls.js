import { FETCH_ALL_POLLS, FETCH_POLL } from "../actions/types";
const INITIAL_STATE = { polls: [], poll: {} };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_ALL_POLLS:
      return { ...state, polls: action.payload };
    case FETCH_POLL:
      return { ...state, poll: action.payload };
    default:
      return state;
  }
}
