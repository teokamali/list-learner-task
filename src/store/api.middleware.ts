import { AuthService } from "@/services/authentication/auth.service";

export const apiMiddleware = [AuthService.middleware];
