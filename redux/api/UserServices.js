import Meplug from './MeplugApi';

const login = data => {
  return Meplug.post('/auths/login', data);
};

const register = data => {
  return Meplug.post('/auths/register', data);
};

const logout = data => {
  return Meplug.post('/auths/logout');
};

const getUser = data => {
  return Meplug.post(`/users/`, data);
};

const topup = data => {
  return Meplug.post(`/users/topup`, data);
};



const UserService = {
  login,
  getUser,
  register,
  logout,
  topup
  
};

export default UserService;
