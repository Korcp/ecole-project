"use client";
import React from "react";
import { useUser } from "../user";
const Login = () => {
  const { current } = useUser();

  if (current) {
    const { email, password, name } = current;

    return (
      <div>
        <p>Email: {email}</p>
        <p> Password: {password}</p>
        <p>Name: {name}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>사용자 로그인 정보 없음</p>
      </div>
    );
  }
};
export default Login;
