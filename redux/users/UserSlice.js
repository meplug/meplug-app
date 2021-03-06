import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../api/UserServices";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const authlogin = createAsyncThunk(
  "users/login",
  async (data, { rejectWithValue }) => {
    try {
      const res = await UserService.login(data);
      const token = res.data.token;
      await AsyncStorage.setItem("token", token);

      return res.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const authLogout = createAsyncThunk("user/logout", async () => {
  try {
    await AsyncStorage.removeItem("token");
    console.log("Token After Logout: ", await AsyncStorage.getItem("token"));
  } catch (error) {
    console.log(error);
  }
});

export const authRegister = createAsyncThunk(
  "user/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await UserService.register(data);
      return res.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchUserData = createAsyncThunk("user/getUser", async (data) => {
  const res = await UserService.getUser(data);
  return res.data.user;
});

export const checkToken = createAsyncThunk("user/checkToken", async () => {
  const token = await AsyncStorage.getItem("token");
  if (token != null) {
    return token;
  } else {
    return null;
  }
});

export const topupUser = createAsyncThunk("user/topup", async (data) => {
  const res = await UserService.topup(data);
  return res.data;
});

const initialState = {
  users: {},
  token: null,
  loading: false,
};

const UserSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: {
    [authlogin.fulfilled]: (state, { payload }) => {
      console.log("Login Success!!");
      return {
        ...state,
        users: payload.data,
        loading: false,
        token: payload.token,
      };
    },
    [authlogin.pending]: (state) => {
      return { ...state, loading: true };
    },
    [authlogin.rejected]: (state, { payload }) => {
      console.log("Login Failed!!");
      return { ...state, loading: false };
    },
    [authRegister.fulfilled]: (state, { payload }) => {
      console.log("Register Success!!");
      return { ...state, loading: false };
    },
    [authRegister.pending]: (state) => {
      return { ...state, loading: true };
    },
    [authRegister.rejected]: (state, { error }) => {
      console.log("Register Rejected!!");
      console.log(error);
    },
    [authLogout.fulfilled]: (state) => {
      console.log("Logout Success!!");
      return { ...state, users: { token: "" }, token: null, loading: false };
    },
    [authLogout.pending]: (state) => {
      return { ...state, loading: true };
    },
    [fetchUserData.fulfilled]: (state, { payload }) => {
      console.log("Fetch Sucess!!");
      return { ...state, users: payload };
    },
    [checkToken.fulfilled]: (state, { payload }) => {
      console.log("Check Token Success!!");
      return { ...state, token: payload, loading: false };
    },
    [checkToken.pending]: (state) => {
      return { ...state, loading: true };
    },
  },
});

export const getUsers = (state) => state.users.users;
export const getToken = (state) => state.users.token;
export const getLoadingStatus = (state) => state.users.loading;

export default UserSlice.reducer;
