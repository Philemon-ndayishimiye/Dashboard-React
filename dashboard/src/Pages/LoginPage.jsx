import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import Input from "../component/Input";
import Button from "../component/Button";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { MdAdminPanelSettings } from "react-icons/md";

export default function LoginPage() {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const [error, setError] = useState({});

  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setUser(formData);
    localStorage.setItem("user", JSON.stringify(formData));

    setFormData({
      username: "",
      email: "",
    });

    const formError = {};

    if (!formData.email && !formData.email.includes("@")) {
      formError.email = "please enter correct email";
    }

    if (!formData.username) {
      formError.username = "please enter your username";
    }

    if (Object.keys(formError).length > 1) {
      setError(formError);
    }

    if (Object.keys(formError).length === 0) {
      navigate("/");
      console.log("hello world");
    } else {
      navigate("/login");
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={`bg-primarycolor-50 pb-[155px] `}>
      <div className="px-[33%] py-[3%] ">
        <div className="flex px-4 py-4">
          <div className=" w-[130px]  h-[130px] bg-primarycolor-500 rounded-full flex items-center justify-center text-white ">
            <MdAdminPanelSettings className="text-[120px] " />
          </div>

          <div>
            <h1 className=" pt-[50px] pl-4 text-4xl font-bold">Admin Panel</h1>
          </div>
        </div>

        <form action="" onSubmit={handleSubmit}>
          <Input
            placeholder={"Username"}
            value={formData.username}
            onChange={handleChange}
            name={"username"}
            variant={error.username ? "danger" : "defolt"}
          />
          {error.username && (
            <span className="text-red-500">{error.username}</span>
          )}
          <Input
            placeholder={"Email"}
            value={formData.email}
            onChange={handleChange}
            name={"email"}
            variant={error.email ? "danger" : "defolt"}
          />
          {error.email && <span className="text-red-500">{error.email}</span>}
          <span className="cursor-pointer float-right pr-[90px] pb-4 text-[13px]">
            Forgot password
          </span>

          <Button label={"Sign in"} className={" w-[350px] "} />
        </form>
      </div>
    </div>
  );
}
