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
export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    registrationNumber: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
    // Additional signup logic can be added here
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Signup</CardTitle>
          <CardDescription>
            Enter your details below to sign up for your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={submitHandler} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                name="name"
                id="name"
                type="text"
                placeholder="Name"
                required
                onChange={changeHandler}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="Email"
                required
                onChange={changeHandler}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="registrationNumber">Registration Number</Label>
              <Input
                name="registrationNumber"
                id="registrationNumber"
                type="text"
                placeholder="Registration Number"
                required
                onChange={changeHandler}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                name="password"
                id="password"
                type="password"
                required
                onChange={changeHandler}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                name="confirmPassword"
                id="confirmPassword"
                type="password"
                required
                onChange={changeHandler}
              />
            </div>
            <Button type="submit" className="w-full">
              Signup
            </Button>
            <Link to="/login" className="mt-4 text-center text-sm">
              Already have an account?
            </Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
