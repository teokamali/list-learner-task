//todo: or Another approach is to store access token in cookies in order ro expire it automatically

// import { getDomain } from "@/utils/getDomain.util";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { getCookie, setCookie } from "cookies-next";
// import { jwtDecode } from "jwt-decode";
import type { AuthStateType, IUser } from "./auth.slice.types";

// const token = getCookie("token");

const initialState: AuthStateType = {
   token: null,
   user: null,
};

export const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      setToken: (state: AuthStateType, action: PayloadAction<string>) => {
         // const domain = getDomain();
         const token = action.payload;

         // // Decode the token to get the 'exp' property
         // const decodedToken: { exp: number } = jwtDecode(token);
         // // Convert 'exp' to milliseconds and set cookie expiration
         // const cookieExpiration = new Date(decodedToken.exp * 1000); // 'exp' is in seconds

         // setCookie("token", token, { domain, expires: cookieExpiration });
         state.token = token;
      },
      setUser: (state: AuthStateType, action: PayloadAction<IUser>) => {
         state.user = action.payload;
      },
      logout: (state: AuthStateType) => {
         state.token = null;
         state.user = null;
      },
   },
});

export const { setToken, logout, setUser } = authSlice.actions;

export default authSlice.reducer;
