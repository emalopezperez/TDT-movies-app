import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const storedState = localStorage.getItem('userState');
  return storedState ? JSON.parse(storedState) : InitialState;
};

export const InitialState = {
  info: {
    id: 0,
    name: "",
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


      const mappedUsuario = {
        id: usuario._id,
        name: usuario.nombre,
        email: usuario.email
      };

      localStorage.setItem('userState', JSON.stringify({ info: mappedUsuario, token }));

      state.info = mappedUsuario;
      state.token = token;
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
