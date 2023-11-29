import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const storedState = localStorage.getItem('userState');
  return storedState ? JSON.parse(storedState) : InitialState;
};

export const InitialState = {
  info: {
    id: 0,
    name: "",
    lastName: "",
    email: ""
  },
  token: ""
};

export const userSlice = createSlice({
  name: 'user',
  initialState: getInitialState(),

  reducers: {
    createUser: (state, action) => {
      const { usuario, token } = action.payload;

      state.info = usuario;
      state.token = token;
      localStorage.setItem('userState', JSON.stringify(state));
    },

    logout: (state) => {
      state.info = InitialState.info;
      state.token = InitialState.token;
      localStorage.removeItem('userState');
    },
  },
});

export const { createUser, logout } = userSlice.actions;

export default userSlice.reducer;
