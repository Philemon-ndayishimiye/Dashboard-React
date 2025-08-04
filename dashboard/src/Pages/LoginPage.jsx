import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import Input from "../component/Input";
import Button from "../component/Button";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { MdAdminPanelSettings } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import { FiSun } from "react-icons/fi";
import useTheme from "../hooks/useTheme";
import useLogin from "../hooks/useLogin";

export default function LoginPage() {
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState("");
  const { loginUser, setLoginUser } = useLogin();
  const { theme, HandleTheme } = useTheme();
  const { user, setUser } = useUser();

  const [error, setError] = useState({});

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setUser(formData);
    localStorage.setItem("user", JSON.stringify(formData));

    setFormData({
      email: "",
      password: "",
    });

    const formError = {};

    if (!formData.email && !formData.email.includes("@")) {
      formError.email = "please enter correct email";
    }

    if (!formData.password) {
      formError.password = "please enter correct password";
    }

    if (Object.keys(formError).length > 1) {
      setError(formError);
    }

    const savedLogin = JSON.parse(localStorage.getItem("user"));

    if (
      savedLogin.email === loginUser.email &&
      savedLogin.password === loginUser.password
    ) {
      console.log("you are allowed to continue");
      navigate("/");
    } else {
      // formError.login = "incorrect email or password";
      setLoginError("incorrect email or password");
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div
      className={`${
        theme === "light" ? "bg-primarycolor-50" : "bg-gray-800"
      } pb-[160px] `}
    >
      <div className={`text-gray-400`}>
        {theme === "light" ? (
          <LuMoon
            className="text-3xl cursor-pointer absolute top-1 right-1"
            onClick={HandleTheme}
          />
        ) : (
          <FiSun
            className="text-3xl cursor-pointer absolute top-1 right-1"
            onClick={HandleTheme}
          />
        )}
      </div>
      <div className="px-[33%] py-[3%] ">
        <div className="flex px-4 py-4">
          <div className=" w-[130px]  h-[130px] bg-primarycolor-500 rounded-full flex items-center justify-center text-white ">
            <MdAdminPanelSettings className="text-[120px] " />
          </div>

          <div>
            <h1
              className={`pt-[50px] pl-4 text-2xl font-bold ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              IHUZA INVENTORY
            </h1>
          </div>
        </div>

        <form action="" onSubmit={handleSubmit}>
          <Input
            placeholder={"Email"}
            value={formData.email}
            onChange={handleChange}
            name={"email"}
            variant={error.email ? "danger" : "defolt"}
          />
          {error.username && (
            <span className="text-red-500">{error.email}</span>
          )}
          <Input
            placeholder={"password"}
            value={formData.password}
            onChange={handleChange}
            name={"password"}
            variant={error.password ? "danger" : "defolt"}
          />
          {error.email && (
            <span className="text-red-500">{error.password}</span>
          )}
          <span
            className={`cursor-pointer float-right pr-[90px] pb-4 text-[13px] ${
              theme === "light" ? "text-black" : "text-white"
            }`}
          >
            Forgot password
          </span>

          <Button label={"Sign in"} className={" w-[350px] "} />

          <span className="text-red-500 block py-4 pl-[70px]">
            {loginError}
          </span>
        </form>
      </div>
    </div>
  );
}
