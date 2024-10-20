import { Button } from "@/components/common/button/button";
import { Checkbox } from "@/components/common/form/checkbox/checkbox";
import { InputIcon } from "@/components/common/form/inputIcon/inputIcon";
import { Label } from "@/components/common/form/label/label";
import { Input } from "@/components/common/form/textInput/textInput";
import { Spinner } from "@/components/common/spinner/spinner";
import { logout, setUser } from "@/store/slices/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { IconSearch } from "@tabler/icons-react";

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

         <Button kind="primary">primary</Button>
         <Button kind="outlined">secondary</Button>
         <div>
            <Label>CheckBox</Label>
            <Checkbox />
         </div>
         <div>
            <Input />
            <InputIcon>
               <Input
                  placeholder="example@crypto.com"
                  id="2-2"
               />
               <IconSearch />
            </InputIcon>
         </div>

         <Spinner />
      </>
   );
}
