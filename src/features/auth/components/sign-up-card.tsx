import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SignInFlow } from "../types";
import GoogleAuthButton from "@/components/ui/googleAuthButton";
import GitHubAuthButton from "@/components/ui/githubAuthButton";
import { useAuthActions } from "@convex-dev/auth/react";
import { TriangleAlert } from "lucide-react";

interface SignUpCardProps {
  setState: (state: SignInFlow) => void;
}
export const SignUpCard = ({ setState }: SignUpCardProps) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pending, setPending] = useState<boolean>(false);
  const { signIn } = useAuthActions();

  const onPasswordSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setPending(true);
    signIn("password", { email, password, flow: "signUp" })
      .catch((e) => {
        console.log(e);
        setError("Something went wrong");
      })
      .finally(() => {
        setPending(false);
      });
  };

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>Sign up to continue</CardTitle>
        <CardDescription>
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>
      {!!error && (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
          <TriangleAlert className="size-4." />
          <p>{error}</p>
        </div>
      )}
      <CardContent className="space-y-5 px-0 pb-0">
        <form onSubmit={onPasswordSignUp} className="space-y-2.5">
          <Input
            disabled={pending}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            type="email"
            required
          />
          <div className="relative">
            <Input
              disabled={pending}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="password"
              type={show ? "text" : "password"}
              required
            />
            <div className="absolute top-3 text-slate-500 right-3 cursor-pointer">
              {show ? (
                <FaEye onClick={() => setShow(false)} />
              ) : (
                <FaEyeSlash onClick={() => setShow(true)} />
              )}
             
            </div>
          </div>
          <div className="relative">
          <Input
            disabled={pending}
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            placeholder="Confirm password"
            type={show1?"text":"password"}
            required
          />
          <div className="absolute top-3 text-slate-500 right-3 cursor-pointer">
              {show1 ? (
                <FaEye onClick={() => setShow1(false)} />
              ) : (
                <FaEyeSlash onClick={() => setShow1(true)} />
              )}
             
            </div>
          </div>
         
          <Button
            type="submit"
            className="w-full"
            size={"lg"}
            disabled={pending}
          >
            Continue
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col space-y-2.5">
          <GoogleAuthButton pending={pending} setPending={setPending} />
          <GitHubAuthButton pending={pending} setPending={setPending} />
          <p className="text-xs text-muted-foreground">
            Already have an account?
            <span
              onClick={() => setState("signIn")}
              className="text-sky-700 hover:underline cursor-pointer"
            >
              {" "}
              Sign in
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
