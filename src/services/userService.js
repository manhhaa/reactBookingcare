import axios from "../axios";

const handleLoginApi = (email, password) => {
  return axios.post(`/api/login`, { email, password });
};

const getAllUsers = (userId) => {
  return axios.get(`/api/get-all-users?id=${userId}`);
};

const createNewUser = (user) => {
  return axios.post("/api/create-new-user", user);
};

const deleteUser = (userId) => {
  return axios.delete("/api/delete-user", { data: { id: userId } });
};

const updateUser = (user) => {
  return axios.put("/api/update-user", user);
};

const getAllcode = (typeInput) => {
  return axios.get(`/api/allcode?type=${typeInput}`);
};

const getHomeDoctor = (limit) => {
  return axios.get(`/api/top-doctor-home?limit=${limit}`);
};

const getAllDoctors = () => {
  return axios.get(`/api/get-all-doctors`);
};

const saveInforDoctor = (data) => {
  return axios.post(`/api/infor-doctors`, data);
};

const getDetailInforDoctorById = (inputID) => {
  return axios.get(`/api/get-detail-doctor-by-id?id=${inputID}`);
};

const getBulkScheduleDoctor = (data) => {
  return axios.post(`/api/create-bulk`, data);
}

const getScheduleByDate = (doctorId, date) => {
  return axios.get(`/api/get-schedule-doctor-by-date?doctorId=${doctorId}&date=${date}`);
}

export {
  handleLoginApi,
  getAllUsers,
  createNewUser,
  deleteUser,
  updateUser,
  getAllcode,
  getHomeDoctor,
  getAllDoctors,
  saveInforDoctor,
  getDetailInforDoctorById,
  getBulkScheduleDoctor, getScheduleByDate
};
