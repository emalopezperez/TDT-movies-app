import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { Outlet, Navigate } from "react-router-dom";

const AuthGuards = () => {
  const userState = useSelector((store: AppStore) => store.user);

  return userState.token ? <Outlet /> : <Navigate replace to="/auth/login" />;
};

export default AuthGuards;
