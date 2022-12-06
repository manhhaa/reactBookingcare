import actionTypes from "./actionTypes";
import {
  getAllcode,
  createNewUser,
  getAllUsers,
  deleteUser,
  updateUser,
} from "../../services/userService";
import { toast } from "react-toastify";

// export const adminLoginSuccess = (adminInfo) => ({
//     type: actionTypes.ADMIN_LOGIN_SUCCESS,
//     adminInfo: adminInfo
// })

// export const adminLoginFail = () => ({
//     type: actionTypes.ADMIN_LOGIN_FAIL
// })

// export const processLogout = () => ({
//     type: actionTypes.PROCESS_LOGOUT
// })

export const fecthGenderStart = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: actionTypes.FECTH_GENDER_START,
      });
      let res = await getAllcode("GENDER");
      if (res && res.data.errCode === 0) {
        dispatch(fecthGenderSuccess(res.data.data));
      } else {
        dispatch(fecthGenderFailed());
      }
    } catch (e) {
      dispatch(fecthGenderFailed());
      console.log(e);
    }
  };
};
export const fecthGenderSuccess = (genderData) => ({
  type: actionTypes.FECTH_GENDER_SUCCESS,
  data: genderData,
});

export const fecthGenderFailed = () => ({
  type: actionTypes.FECTH_POSITION_FAILED,
});

export const fecthPositionStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllcode("POSITION");
      if (res && res.data.errCode === 0) {
        dispatch(fecthPositionSuccess(res.data.data));
      } else {
        dispatch(fecthPositionFailed());
      }
    } catch (e) {
      dispatch(fecthPositionFailed());
      console.log(e);
    }
  };
};
export const fecthPositionSuccess = (positionData) => ({
  type: actionTypes.FECTH_POSITION_SUCCESS,
  data: positionData,
});
export const fecthPositionFailed = () => ({
  type: actionTypes.FECTH_POSITION_FAILED,
});

export const fecthRoleStart = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllcode("ROLE");
      if (res && res.data.errCode === 0) {
        dispatch(fecthRoleSuccess(res.data.data));
      } else {
        dispatch(fecthRoleFailed());
      }
    } catch (e) {
      dispatch(fecthRoleFailed());
      console.log(e);
    }
  };
};
export const fecthRoleSuccess = (roleData) => ({
  type: actionTypes.FECTH_ROLE_SUCCESS,
  data: roleData,
});
export const fecthRoleFailed = () => ({
  type: actionTypes.FECTH_ROLE_FAILED,
});

export const createNewUserRedux = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await createNewUser(data);
      console.log(res.data);
      if (res && res.data.errCode === 0) {
        toast.success("Create a new user succeed!");
        dispatch(createUserSuccess());
        dispatch(AllUserRedux());
      } else {
        dispatch(createUserFailed());
      }
    } catch (e) {
      dispatch(createUserSuccess());
      console.log(e);
    }
  };
};

export const createUserSuccess = () => ({
  type: actionTypes.SAVE_USER_SUCCESS,
});

export const createUserFailed = () => ({
  type: actionTypes.SAVE_USER_FAILED,
});

export const AllUserRedux = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllUsers("ALL");
      if (res && res.data.errCode === 0) {
        dispatch(allUserSuccess(res.data.user.reverse()));
      } else {
        dispatch(allUserFailed());
      }
    } catch (e) {
      dispatch(allUserFailed());
      console.log(e);
    }
  };
};

export const allUserSuccess = (data) => ({
  type: actionTypes.ALL_USERS_SUCCESS,
  users: data,
});

export const allUserFailed = () => ({
  type: actionTypes.ALL_USERS_FAILED,
});

export const fecthDeleteUser = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await deleteUser(data);
      if (res && res.data.errCode === 0) {
        toast.success("Delete user succeed!");
        dispatch(fecthDeleteUserSuccess());
        dispatch(AllUserRedux());
      } else {
        dispatch(fecthDeleteUserFailed());
      }
    } catch (e) {
      dispatch(fecthDeleteUserFailed());
      console.log(e);
    }
  };
};

export const fecthDeleteUserSuccess = () => ({
  type: actionTypes.DELETE_USER_SUCCESS,
});

export const fecthDeleteUserFailed = () => ({
  type: actionTypes.DELETE_USER_FAILED,
});

export const UpdateUserRedux = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await updateUser(data);
      if (res && res.data.errCode === 0) {
        toast.success("Update user succeed!");
        dispatch(updateUserSuccess());
        dispatch(AllUserRedux());
      } else {
        dispatch(updateUserFailed());
      }
    } catch (e) {
      dispatch(updateUserFailed());
      console.log(e);
    }
  };
};

export const updateUserSuccess = () => ({
  type: actionTypes.ALL_USERS_SUCCESS,
});

export const updateUserFailed = () => ({
  type: actionTypes.ALL_USERS_FAILED,
});
