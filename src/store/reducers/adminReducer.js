import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoadingData: false,
  genders: [],
  positions: [],
  roles: [],
  users: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FECTH_GENDER_START:
      let copyState = { ...state };
      state.isLoadingData = true;
      return {
        ...copyState,
      };
    case actionTypes.FECTH_GENDER_SUCCESS:
      state.genders = action.data;
      state.isLoadingData = false;
      return {
        ...state,
      };
    case actionTypes.FECTH_GENDER_FAILED:
      state.isLoadingData = false;
      state.genders = [];
      return {
        ...state,
      };

    case actionTypes.FECTH_POSITION_SUCCESS:
      state.positions = action.data;
      return {
        ...state,
      };
    case actionTypes.FECTH_POSITION_FAILED:
      state.positions = [];
      return {
        ...state,
      };
    case actionTypes.FECTH_ROLE_SUCCESS:
      state.roles = action.data;
      return {
        ...state,
      };
    case actionTypes.FECTH_ROLE_FAILED:
      state.roles = [];
      return {
        ...state,
      };
    case actionTypes.ALL_USERS_SUCCESS:
      state.users = action.users;
      return {
        ...state,
      };
    case actionTypes.ALL_USERS_FAILED:
      state.roles = [];
      return {
        ...state,
      };
    case actionTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
      };
    case actionTypes.DELETE_USER_FAILED:
      return {
        ...state,
      };
    case actionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
      };
    case actionTypes.UPDATE_USER_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default adminReducer;
