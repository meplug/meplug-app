import MocApi from './MeplugApi';

const login = data => {
  return MocApi.post('/auths/login', data);
};

const register = data => {
  return MocApi.post('/auths/register', data);
};

const logout = data => {
  return MocApi.post('/auths/logout');
};

const getUser = data => {
  return MocApi.post(`/users/`, data);
};

const topup = data => {
  return MocApi.post(`/users/topup`, data);
};



const UserService = {
  login,
  getUser,
  register,
  logout,
  topup
  
};

export default UserService;
