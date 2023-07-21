import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Icon } from "@iconify/react";
import TextInput from "../components/shared/textInput";
import PasswordInput from "../components/shared/passwordInput";
import { makeAuthenticatedPOSTRequest } from "../utils/serverHelpers";
import { Link, useNavigate } from "react-router-dom";
const SignupComponent = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setuserName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const signUp = async () => {
    if (password != confirmpassword) {
      alert("password and confirm password fields are not match.");
      return;
    }
    const data = { firstName, lastName, username, Email, password };
    const response = await makeAuthenticatedPOSTRequest(
      "/auth/register",
      data
    );
    if (response && !response.error) {
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token", token, { path: "/", expires: date });
      navigate("/home");
    } else {
      alert("failure");
    }
  };
  return (
    <div className="w-full h-full flex flex-col items-center bg-gray-900 text-white overflow-auto">
      <div className="logo p-5 border-b border-solid border-gray-400 w-full flex justify-center">
        <Icon icon="entypo:music" width={42} />
        <div className="text-4xl">Musify</div>
      </div>

      <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
        <div className="font-bold mb-4 text-2xl">
          Sign up to start listening.
        </div>
        <div className="w-full flex justify-center items-center space-x-4">
          <TextInput
            label={"First name"}
            placeholder={"Enter your First name"}
            className={"my-6"}
            value={firstName}
            setValue={setfirstName}
          />
          <TextInput
            label={"Last name"}
            placeholder={"Enter your Last name"}
            value={lastName}
            setValue={setlastName}
          />
        </div>
        <TextInput
          label={"Username"}
          placeholder={"Enter your Username"}
          value={username}
          setValue={setuserName}
        />
        <TextInput
          label={"What's your email?"}
          placeholder={"Enter your email"}
          className={"my-6"}
          value={Email}
          setValue={setEmail}
        />
        <PasswordInput
          label={"Create a password"}
          placeholder={"Enter your Password"}
          className={"mb-6"}
          value={password}
          setValue={setpassword}
        />
        <PasswordInput
          label={"Confirm password"}
          placeholder={"Enter your Password again"}
          value={confirmpassword}
          setValue={setconfirmPassword}
        />
        <div className="my-8 w-full flex items-center justify-center">
          <button
            className="border border-gray-400 bg-green-400 font-bold w-full flex items-center justify-center py-4 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              signUp();
            }}
          >
            SIGN UP
          </button>
        </div>
        <div className="w-full border-b border-solid border-gray-400"></div>
        <div className="my-6 font-semibold text-lg">
          Already have an account?
        </div>
        <div className="border border-gray-400 bg-green-400 font-bold w-full flex items-center justify-center py-4 rounded-full">
          <Link to={"/login"}>LOG IN</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
