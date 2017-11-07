import { FETCH_MOVIE, REMOVE_MOVIE } from '../actions/index.js';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MOVIE:
      // do not do state.push(action.payload.data)
      // only update state with setState.
      // do not manipulate directly
      // returns a new instance of state
      // return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ];

    case REMOVE_MOVIE:
      let index = state.indexOf(action.payload);
      if (index > -1){
        return [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ]
      }
  }

  return state
}
