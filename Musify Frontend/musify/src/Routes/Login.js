import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useCookies } from "react-cookie";
import TextInput from "../components/shared/textInput";
import PasswordInput from "../components/shared/passwordInput";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";
import { Link, useNavigate } from "react-router-dom";
const LoginComponent = () => {
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [cookie, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const Login = async () => {
    const data = { Email, password };
    const response = await makeUnauthenticatedPOSTRequest("/auth/login", data);
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
        <div className="text-4xl ">Musify</div>
      </div>

      <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
        <div className="font-bold mb-6 text-2xl">Please Log In to Continue</div>
        <TextInput
          label={"Email ID or Username"}
          placeholder={"Email ID or Username"}
          className={"my-6"}
          value={Email}
          setValue={setEmail}
        />
        <PasswordInput
          label={"Password"}
          placeholder={"Password"}
          value={password}
          setValue={setpassword}
        />

        <div className="my-8 w-full flex items-center justify-end">
          <button
            className="border border-gray-400 bg-green-400 font-bold w-full flex items-center justify-center py-4 rounded-full"
            onClick={(e) => {
              e.preventDefault();
              Login();
            }}
          >
            Log In To Musify
          </button>
        </div>
        <div className="w-full border-b border-solid border-gray-400"></div>
        <div className="my-6 font-semibold text-lg">Don't have an account?</div>
        <div className="border border-gray-400 bg-green-400 font-bold w-full flex items-center justify-center py-4 rounded-full">
          <Link to={"/signup"}>Sign up for Musify</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
