import Axios from 'axios';

/**
 * Axios instance for calling Frost API endpoints.
 */
export default Axios.create({
  baseURL: process.env.REACT_APP_FROST_API_BASE_URL,
  auth: {
    username: process.env.REACT_APP_FROST_CLIENT_ID,
    password: process.env.REACT_APP_FROST_CLIENT_PASSWORD
  }
});
