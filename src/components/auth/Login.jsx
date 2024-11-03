import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Registration Number: ", registrationNumber);
    console.log("Password:", password);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="mx-auto max-w-sm ">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your credentials below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={submitHandler} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="regdno">Registration Number</Label>
              <Input
                id="regdno"
                type="text"
                placeholder="Registration Number"
                required
                onChange={(e) => {
                  setRegistrationNumber(e.target.value);
                }}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>{" "}
            <Link to="/signup" className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
            </Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
