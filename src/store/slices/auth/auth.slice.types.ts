import type { Nullable } from "@/types/global.types";

export interface IUser {
   id: number;
   name: string;
   avatar: string;
   email: string;
}

export interface AuthStateType {
   token: Nullable<string>;
   user: Nullable<IUser>;
}
