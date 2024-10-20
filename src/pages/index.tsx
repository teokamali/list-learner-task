import { logout, setUser } from "@/store/slices/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";

export default function Home() {
   const dispatch = useAppDispatch();
   const { user } = useAppSelector((state) => state.auth);
   return (
      <>
         <h1>Hello World</h1>
         <div className="flex gap-6">
            <button
               onClick={() => {
                  dispatch(setUser({ email: "Test@gmail.com", avatar: "", id: 1, name: "Test Name" }));
               }}
            >
               Login
            </button>
            <button
               about=""
               onClick={() => {
                  dispatch(logout());
               }}
            >
               Logout
            </button>
         </div>
         <div>{user ? <h2> Hello {user.name}</h2> : <></>}</div>
      </>
   );
}
