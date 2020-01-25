import {
    FETCH_CONTACT_ERROR,
    FETCH_CONTACT_REQUEST, FETCH_CONTACT_SUCCESS,
    POST_CONTACT_ERROR,
    POST_CONTACT_REQUEST,
    POST_CONTACT_SUCCESS
} from "../actionCreators/typesAction";

const initialState = {
  packContacts: {},
  loading: false,
  goLoading: false
};

const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_CONTACT_REQUEST:
            return {
                ...state,
                goLoading: true,
            };
        case POST_CONTACT_ERROR:
            return {
                ...state,
                goLoading: false,
            };
        case POST_CONTACT_SUCCESS:
            return {
                ...state,
                goLoading: false,
            };
        case FETCH_CONTACT_REQUEST:
            return {
                ...state,
            };
        case FETCH_CONTACT_SUCCESS:
            return {
              ...state,
              packContacts: {...action.contacts}
            };
        case FETCH_CONTACT_ERROR:
            return {
              ...state,
            };
        default:
            return state;
    }
};

export default contactsReducer;