
import { useDispatch } from "react-redux";
import { fetchUserData } from "../redux/users/UserSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";

const dispatch = useDispatch();

export const userFetch = () => {
  const token = AsyncStorage.getItem("token");
  if (token != null) {
    var decoded = jwtDecode(token);
    dispatch(fetchUserData({ id: decoded._id }));
  }
};
