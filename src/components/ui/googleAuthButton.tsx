import { FcGoogle } from "react-icons/fc";
import { Button } from "./button";
import { useAuthActions } from "@convex-dev/auth/react";
interface GoogleAuthButtonProps {
  setPending: (state: boolean) => void;
  pending:boolean;
}
const GoogleAuthButton = ({ setPending,pending }: GoogleAuthButtonProps) => {
  const { signIn } = useAuthActions();
  //google signIn handler
  const googleLoginHandler = () => {
    setPending(true);
    signIn("google").finally(() => {
      setPending(false);
    });
  };
  return (
    <Button
      className="w-full relative"
      disabled={pending}
      onClick={googleLoginHandler}
      variant="outline"
      size={"lg"}
    >
      <FcGoogle className="size-5 absolute top-3 left-2.5" />
      Continue with Google
    </Button>
  );
};

export default GoogleAuthButton;
