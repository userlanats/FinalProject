import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../components/Header";
import Cover from "../components/Cover";
import SignInCover from "../components/SignInCover";

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (e) => {
    e.preventDefault();
    setIsLoading(true);

    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        Cookies.set("AccessToken", json.token);
        setIsLoading(false);
        alert("Login was successful");
      })
      .catch((err) => {
        alert("User not found");
        setIsLoading(false);
      });
  };

  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <Header />
      <SignInCover />

      <div className="max-w-[1116px] flex justify-center mx-auto">
        <div className="mt-[123px] mb-[148px]">
          <Link
            to="https://www.google.ge/"
            className="flex justify-center pt-2 gap-[8px] border border-1 border-[#B6B7BC] w-[320px] h-[44px] rounded-[4px] transition hover:scale-110 hover:-translate-y-1 duration-500"
          >
            <img
              className="w-[24px] h-[24px]"
              src="/images/google.svg.svg"
              alt="google icon"
            />
            <p className="text-[#5C5F6A]">Continue with Google</p>
          </Link>

          <div className="flex items-center gap-[16px] mt-[32px]">
            <hr className="w-[136px]" />
            <p className="text-[#5C5F6A]">OR</p>
            <hr className="w-[136px]" />
          </div>

          <form onSubmit={onSubmitForm}>
            <div className="mt-[32px] transition hover:-translate-y-1 hover:scale-110 duration-500">
              <label className="block">User Name</label>
              <input
                onChange={onUserNameChange}
                className="border border-1 rounded-[6px] w-[320px] h-[45px]"
                type="text"
                autoComplete="username"
              />
            </div>

            <div className="mt-[32px] transition hover:-translate-y-1 hover:scale-110 duration-500">
              <label className="block">Password</label>
              <input
                onChange={onPasswordChange}
                className="border border-1 rounded-[6px] w-[320px] h-[45px]"
                type="password"
                autoComplete="current-password"
              />
            </div>

            <Link
              to="/forgotp"
              className="flex justify-end mt-[16px] hover:scale-110 hover:-translate-y-1 duration-500"
            >
              <p className="text-[#474B57] font-semibold">Forgot Password?</p>
            </Link>

            <button
              type="submit"
              className="w-[318px] h-[44px] bg-[#0E1422] text-white rounded-[4px] mt-[24px] transition hover:scale-110 hover:-translate-y-1 duration-500"
            >
              {isLoading ? "Loading..." : "Sign In"}
            </button>
          </form>

          <div className="flex justify-center mt-[24px] hover:scale-110 hover:-translate-y-1 duration-500">
            <Link to="/signup" className="text-[#5C5F6A]">
              {" "}
              Don't have an account? Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
