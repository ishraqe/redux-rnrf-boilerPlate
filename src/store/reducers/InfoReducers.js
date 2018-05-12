import { INFO } from "../actions/types";

const INITIAL_STATE = {
  info: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action) {
    case INFO:
      console.log(action);
      return state;
    default:
      return state;
  }
};
