import actionTypes from "../actions/actionTypes";

const initialState = {
  isLoadingData: false,
  genders: [],
  positions: [],
  roles: [],
  users: [],
  doctors: [],
  allDoctors: [],
  message: "",
  doctorHours: [],
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

    case actionTypes.FECTH_HOME_DOCTOR_SUCCESS:
      state.doctors = action.doctors;
      return {
        ...state,
      };
    case actionTypes.FECTH_HOME_DOCTOR_FAILED:
      state.doctors = [];
      return {
        ...state,
      };

    case actionTypes.FECTH_ALL_DOCTOR_SUCCESS:
      state.allDoctors = action.doctors;
      return {
        ...state,
      };
    case actionTypes.FECTH_ALL_DOCTOR_FAILED:
      state.allDoctors = [];
      return {
        ...state,
      };

    case actionTypes.FECTH_SAVE_INFO_DOCTOR_SUCCESS:
      state.message = action.message;
      return {
        ...state,
      };
    case actionTypes.FECTH_SAVE_INFO_DOCTOR_FAILED:
      state.message = "";
      return {
        ...state,
      };

    case actionTypes.FECTH_ALLCODE_DOCTOR_HOURS_SUCCESS:
      state.doctorHours = action.data;
      return {
        ...state,
      };
    case actionTypes.FECTH_ALLCODE_DOCTOR_HOURS_FAILED:
      state.doctorHours = "";
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default adminReducer;
