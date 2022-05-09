const FETCH_GREETING = 'greeting/FETCH_GREETING';

const initialState = [];

export const fetchGreetings = (payload) => ({
  type: FETCH_GREETING,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
