import actionTypes from "./actionTypes";
import {
  getAllcode,
  createNewUser,
  getAllUsers,
  deleteUser,
  updateUser,
  getHomeDoctor,
  getAllDoctors,
  saveInforDoctor,
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
        toast.error("Create a new user failed!");
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
        toast.error("Delete user failed!");
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
        toast.error("Update user failed!");
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

export const fecthHomeDoctor = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getHomeDoctor(10);
      if (res && res.data.errCode === 0) {
        dispatch(fecthHomeDoctorSuccess(res.data.message));
      } else {
        dispatch(fecthHomeDoctorFailed());
      }
    } catch (e) {
      dispatch(fecthHomeDoctorFailed());
      console.log(e);
    }
  };
};

export const fecthHomeDoctorSuccess = (data) => ({
  type: actionTypes.FECTH_HOME_DOCTOR_SUCCESS,
  doctors: data,
});

export const fecthHomeDoctorFailed = () => ({
  type: actionTypes.FECTH_HOME_DOCTOR_FAILED,
});

export const fecthAllDoctors = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllDoctors();
      if (res && res.data.errCode === 0) {
        dispatch(fecthAllDoctorSuccess(res.data.message));
      } else {
        dispatch(fecthAllDoctorFailed());
      }
    } catch (e) {
      dispatch(fecthAllDoctorFailed());
      console.log(e);
    }
  };
};

export const fecthAllDoctorSuccess = (data) => ({
  type: actionTypes.FECTH_ALL_DOCTOR_SUCCESS,
  doctors: data,
});

export const fecthAllDoctorFailed = () => ({
  type: actionTypes.FECTH_ALL_DOCTOR_FAILED,
});

export const fecthSaveInforDoctors = (data) => {
  return async (dispatch, getState) => {
    try {
      let res = await saveInforDoctor(data);
      if (res && res.data.errCode === 0) {
        toast.success("Save infor doctor succeed!");
        dispatch(fecthSaveInforDoctorSuccess());
      } else {
        toast.error("Save infor doctor error!");
        dispatch(fecthSaveInforDoctorFailed());
      }
    } catch (e) {
      dispatch(fecthSaveInforDoctorFailed());
      console.log(e);
    }
  };
};

export const fecthSaveInforDoctorSuccess = (message) => ({
  type: actionTypes.FECTH_SAVE_INFO_DOCTOR_SUCCESS,
});

export const fecthSaveInforDoctorFailed = () => ({
  type: actionTypes.FECTH_SAVE_INFO_DOCTOR_FAILED,
});


export const fecthHoursDoctors = () => {
  return async (dispatch, getState) => {
    try {
      let res = await getAllcode('TIME');
      console.log(res)
      if (res && res.data.errCode === 0) {
        dispatch(fecthHoursDoctorsSuccess(res.data.data));
      } else {
        dispatch(fecthHoursDoctorsFailed());
      }
    } catch (e) {
      dispatch(fecthHoursDoctorsFailed());
      console.log(e);
    }
  };
};

export const fecthHoursDoctorsSuccess = (message) => ({
  type: actionTypes.FECTH_ALLCODE_DOCTOR_HOURS_SUCCESS,
  data: message
});

export const fecthHoursDoctorsFailed = () => ({
  type: actionTypes.FECTH_ALLCODE_DOCTOR_HOURS_FAILED,
});
