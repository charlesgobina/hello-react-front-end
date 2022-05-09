import axios from 'axios';
import { fetchGreetings } from './greeting';

export const greetingUrl = 'http://127.0.0.1:3000/v1/greetings';

export const getGreeting = () => async (dispatch) => {
  axios.get(greetingUrl)
    .then((response) => {
      console.log(response.data.message.message);
      dispatch(fetchGreetings(response.data.message.message));
    });
};
