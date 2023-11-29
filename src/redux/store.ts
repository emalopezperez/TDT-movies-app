import { configureStore } from "@reduxjs/toolkit";
import { User } from "../models/users";
import { userSlice } from "./states/user";


export interface AppStore{
  user: User;
}

export default configureStore<AppStore>({
  reducer: {
    user: userSlice.reducer
  }
})

