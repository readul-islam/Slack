import { FaGithub } from "react-icons/fa";
import { Button } from "./button";
import { useAuthActions } from "@convex-dev/auth/react";
interface GitHubAuthButtonProps {
  setPending: (state: boolean) => void;
  pending:boolean;
}
const GitHubAuthButton = ({ setPending,pending }: GitHubAuthButtonProps) => {
  const { signIn } = useAuthActions();
  //github signIn handler
  const githubLoginHandler = () => {
    setPending(true);
    signIn("github").finally(() => {
      setPending(false);
    });
  };
  return (
    <Button
      className="w-full relative"
      disabled={pending}
      onClick={githubLoginHandler}
      variant="outline"
      size={"lg"}
    >
      <FaGithub className="size-5 absolute top-3 left-2.5" />
      Continue with Google
    </Button>
  );
};

export default GitHubAuthButton;
