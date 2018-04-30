import { FETCH_ALL_POLLS } from "../actions/types";
const INITIAL_STATE = { polls: [] };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_ALL_POLLS:
      return { ...state, polls: action.payload };
    default:
      return state;
  }
}
