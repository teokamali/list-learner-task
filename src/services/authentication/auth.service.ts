// Import necessary RTK Query methods
import type { BaseResponse } from "@/services/base/request-interface";
import { getApiRoute } from "@/services/base/routes";
import { setToken, setUser } from "@/store/slices/auth/auth.slice";
import { createApi } from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";
import axiosBaseQuery from "../base/axiosBaseQuery";
import type { ILoginPayload, ILoginResponse } from "./auth.types";

// Define the API service
export const AuthService = createApi({
   reducerPath: "authService", // Specify the reducer path
   baseQuery: axiosBaseQuery(), // Replace with your actual base URL
   endpoints: (builder) => ({
      login: builder.mutation<BaseResponse<ILoginResponse>, ILoginPayload>({
         query: (params) => {
            const { auth } = getApiRoute(); // Use your existing function to get the route
            return {
               url: auth.login.path,
               method: "POST",
               sendAuthorization: false,
               data: params,
            };
         },
         async onQueryStarted(arg, { dispatch, queryFulfilled }) {
            const { data } = await queryFulfilled;
            const user = data;
            dispatch(setToken(user.accessToken));
            dispatch(
               setUser({
                  avatar: user.image,
                  email: user.email,
                  id: user.id,
                  name: `${user.firstName} ${user.lastName}`,
               }),
            );
            toast.success("Logged in Successfully");
         },
      }),
   }),
});

// Export the auto-generated hook for the `getNonce` query
export const { useLoginMutation } = AuthService;
