// Login
export interface ILoginPayload {
   username: string;
   password: string;
}
export interface ILoginResponse {
   id: number;
   username: string;
   email: string;
   firstName: string;
   lastName: string;
   gender: string;
   image: string;
   accessToken: string;
   refreshToken: string;
}
