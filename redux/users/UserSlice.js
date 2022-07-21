import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import UserService from '../api/UserServices';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const authlogin = createAsyncThunk('users/login', async data => {
  const res = await UserService.login(data);
  console.log(res.status);
  const token = res.data.token;
  try {
    await AsyncStorage.setItem('token', token);
  } catch (error) {
    console.log(error);
  }
  return res.data;
});

export const authLogout = createAsyncThunk('user/logout', async () => {
  try {
    await AsyncStorage.removeItem('token');
    console.log('Token After Logout: ', await AsyncStorage.getItem('token'));
  } catch (error) {
    console.log(error);
  }
});

export const authRegister = createAsyncThunk(
  'user/register',
  async (data, {rejectWithValue}) => {
    try {
      const res = await UserService.register(data);
      return res.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  },
);

export const fetchUserData = createAsyncThunk('user/getUser', async id => {
  const res = await UserService.getUser(id);
  return res.data.user;
});

const initialState = {
  users: {},
  token: null,
  loading: false
};

const UserSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [authlogin.fulfilled]: (state, {payload}) => {
      console.log('Login Success!!');
      return {...state, users: payload, loading: false, token: payload.token};
    },
    [authlogin.rejected]: (state, {payload}) => {
      console.log('Login Failed!!');
      console.log(payload);
      return {...state, loading: false};
    },
    [authRegister.fulfilled]: (state, {payload}) => {
      console.log('Register Success!!');
      return {...state};
    },
    [authRegister.rejected]: (state, {error}) => {
      console.log('Register Rejected!!');
      console.log(error);
    },
    [authLogout.fulfilled]: state => {
      console.log('Logout Success!!');
      return {...state, users: {token: ''}, token: null, loading: false};
    },
    [fetchUserData.fulfilled]: (state, {payload}) => {
      console.log('Fetch Sucess!!');
      return {...state, users: payload};
    },
  },
});

export const getUsers = state => state.users.users;
export const getToken = state => state.users.token;
export default UserSlice.reducer;
