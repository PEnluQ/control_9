import {
    POST_CONTACT_REQUEST,
    POST_CONTACT_SUCCESS,
    POST_CONTACT_ERROR, FETCH_CONTACT_REQUEST, FETCH_CONTACT_SUCCESS, FETCH_CONTACT_ERROR,
} from "./typesAction";
import axiosContact from "../../axios-contacts";


const postContactRequest = () => ({type: POST_CONTACT_REQUEST});
const postContactSuccess = () => ({type: POST_CONTACT_SUCCESS});
const postContactError = () => ({type: POST_CONTACT_ERROR});

const fetchContactRequest = () => ({type: FETCH_CONTACT_REQUEST});
const fetchContactSuccess = contacts => ({type: FETCH_CONTACT_SUCCESS, contacts});
const fetchContactError = () => ({type: FETCH_CONTACT_ERROR});


export const getContacts = () => {
  return async dispatch => {
      dispatch(fetchContactRequest());
      try {
          let info = await axiosContact.get('contacts.json');
          const response = info.data;
          dispatch(fetchContactSuccess(response));
          console.log(response);
      } catch (e) {
          console.error('Ohh');
          dispatch(fetchContactError());
      }
    };
};

export const postContact = contact => {
  return async dispatch => {
      dispatch(postContactRequest());
      try {
          await axiosContact.post('contacts.json', contact);
          dispatch(postContactSuccess());
      } catch (e) {
          console.error('Something went wrong');
          dispatch(postContactError(e));
      }
  }
};
