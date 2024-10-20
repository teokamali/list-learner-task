import type { Nullable } from "@/types/global.types";

export interface IUser {
   id: number;
   name: Nullable<string>;
   avatar: Nullable<string>;
   email: Nullable<string>;
}

export interface AuthStateType {
   token: Nullable<string>;
   user: Nullable<IUser>;
}
