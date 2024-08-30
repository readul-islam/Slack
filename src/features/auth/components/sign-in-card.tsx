import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { SignInFlow } from "../types"
import { useState } from "react"
import GoogleAuthButton from "@/components/ui/googleAuthButton"
import GitHubAuthButton from "@/components/ui/githubAuthButton"

interface SignInCardProps {
    setState: (state: SignInFlow) => void;

}

export const SignInCard = ({ setState }: SignInCardProps) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pending , setPending] = useState<boolean>(false);

    const onPassword = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
    }
    return (
        <Card className="w-full h-full p-8">
            <CardHeader className="px-0 pt-0">
                <CardTitle>
                    Login to continue
                </CardTitle>
                <CardDescription>
                    Use your email or another service to continue
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5">
                    <Input
                        disabled={pending}
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        placeholder="Email"
                        type="email"
                        required
                    />
                    <Input
                        disabled={pending}
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        placeholder="password"
                        type="password"
                        required
                    />
                    <Button type="submit" className="w-full" size={"lg"} disabled={pending}>Continue</Button>
                </form>
                <Separator />
                <div className="flex flex-col space-y-2.5">
                    <GoogleAuthButton pending={pending} setPending={setPending}/>
                    <GitHubAuthButton pending={pending} setPending={setPending}/>

                    
                    <p className="text-xs text-muted-foreground">

                        Don&apos;t have an account?<span
                            onClick={() => setState("signUp")}
                            className="text-sky-700 hover:underline cursor-pointer"> Sign up</span>
                    </p>
                </div>
            </CardContent>

        </Card>
    )
}