import { AuthService } from "@/services/authentication/auth.service";

export const APIsReducers = {
   [AuthService.reducerPath]: AuthService.reducer,
};
