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

export {
  handleLoginApi,
  getAllUsers,
  createNewUser,
  deleteUser,
  updateUser,
  getAllcode,
};
