import { Button } from "@/components/common/button/button";
import { Checkbox } from "@/components/common/form/checkbox/checkbox";
import { FormGroup } from "@/components/common/form/formGroup/fromGroup";
import { Label } from "@/components/common/form/label/label";
import { TextForm } from "@/components/common/form/textForm/textForm";
import { Input } from "@/components/common/form/textInput/textInput";
import { Spinner } from "@/components/common/spinner/spinner";
import { useLoginMutation } from "@/services/authentication/auth.service";
import { useAppDispatch } from "@/store/store";
import { IconPasswordFingerprint, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import { ILoginForm } from "./loginForm.types";

const LoginForm = () => {
   const dispatch = useAppDispatch();
   const router = useRouter();
   const searchparams = useSearchParams();
   const [loginMutate, { isLoading }] = useLoginMutation();
   const {
      handleSubmit,
      control,
      formState: { errors },
   } = useForm<ILoginForm>({ defaultValues: { confirm: false, username: "emilys", password: "emilyspass" } });

   const onSubmit = (values: ILoginForm) => {
      loginMutate({ password: values.password, username: values.username })
         .unwrap()
         .then((res) => {
            const callbackURL = searchparams.get("callback_url");
            if (callbackURL) {
               router.push(callbackURL);
            }
            router.push("/");
         });
   };

   return (
      <div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-3">
               <FormGroup>
                  <Label
                     htmlFor="2-1"
                     className="flex items-center gap-x-2"
                  >
                     <IconUser />
                     <span>Username</span>
                  </Label>
                  <Controller
                     name="username"
                     control={control}
                     rules={{ required: true }}
                     render={({ field, fieldState }) => (
                        <>
                           <Input
                              {...field}
                              invalid={!!fieldState.error}
                              placeholder="John Doe"
                              id="2-1"
                           />
                           {fieldState.error && <TextForm variant="invalid">This field is require!</TextForm>}
                        </>
                     )}
                  />
               </FormGroup>

               <FormGroup>
                  <Label
                     htmlFor="2-1"
                     className="flex items-center gap-x-2"
                  >
                     <IconPasswordFingerprint />
                     <span>Password</span>
                  </Label>
                  <Controller
                     name="password"
                     control={control}
                     rules={{ required: true }}
                     render={({ field, fieldState }) => (
                        <>
                           <Input
                              {...field}
                              invalid={!!fieldState.error}
                              placeholder=""
                              type="password"
                              id="2-1"
                           />
                           {fieldState.error && <TextForm variant="invalid">This field is require!</TextForm>}
                        </>
                     )}
                  />
               </FormGroup>

               <FormGroup>
                  <Controller
                     name="confirm"
                     control={control}
                     rules={{ required: true }}
                     render={({ field, fieldState }) => (
                        <div>
                           <div className="flex items-start gap-x-2">
                              <Checkbox
                                 {...field}
                                 id="6-3"
                              />
                              <Label
                                 htmlFor="6-3"
                                 className="flex items-center"
                              >
                                 <span className="inline-block font-normal text-sm leading-5">
                                    I agree to the collection of information in cookies, I agree with{" "}
                                    <Link
                                       className="text-link"
                                       href="#"
                                       target="_blank"
                                    >
                                       Privacy Policy{" "}
                                    </Link>
                                    and with{" "}
                                    <Link
                                       className="text-link"
                                       href="#"
                                       target="_blank"
                                    >
                                       Terms of Use
                                    </Link>
                                 </span>
                              </Label>
                           </div>
                           {fieldState.error && <TextForm variant="invalid">This field is require!</TextForm>}
                        </div>
                     )}
                  />
               </FormGroup>
            </div>
            <Button
               className="mt-3"
               kind="primary"
               full
               variant="primary"
               type="submit"
               disabled={isLoading}
            >
               Login
               {isLoading ? <Spinner size="sm" /> : ""}
            </Button>
         </form>
      </div>
   );
};

export default LoginForm;
