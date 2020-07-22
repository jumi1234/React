import {
  createAction,
  handleActions
} from "redux-actions";
import produce from "immer";

const APPEND_DATA = "data/APPEND_DATA";
const REMOVE_DATA = "data/REMOVE_DATA";

export const appendData = createAction(APPEND_DATA, data => data);
export const removeData = createAction(REMOVE_DATA, id => id);

const initialState = {
  "0": {
    id: "0",
    name: "김",
    phone: "010-0000-0000"
  },
  "1": {
    id: "1",
    name: "이",
    phone: "010-1111-1111"
  },
  "2": {
    id: "2",
    name: "박",
    phone: "010-1111-1111"
  },
  "3": {
    id: "3",
    name: "송",
    phone: "010-1111-1111"
  },
  "4": {
    id: "4",
    name: "안",
    phone: "010-1111-1111"
  },
  "5": {
    id: "5",
    name: "장",
    phone: "010-1111-1111"
  }
}

var nextId = Object.keys(initialState).length;

export default handleActions({
  [APPEND_DATA]: (state, action) =>
    produce(state, draft => {
      draft[nextId] = {
        id: nextId,
        ...action.payload
      };
      nextId++;
    }),
  [REMOVE_DATA]: (state, action) =>
    produce(state, draft => {
      delete draft[action.payload];
    })
}, initialState);
