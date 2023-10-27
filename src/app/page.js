"use client";
import React, { useState } from "react";
import { account, ID } from "./appwrite";
import "./LoginPage.css";
import "./Signup.css";
import { useRouter } from "next/navigation";
import { UserProvider } from "./user";

const Loginpage = () => {
  const [open, setopen] = useState(false);
  const [openS, setopenS] = useState(false);

  // 로그인 모달 상태
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [fail, setfail] = useState(false);

  // 회원가입 모달 상태
  const [name, setName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const router = useRouter();

  const LoginClick = () => {
    setopen(true);
  };

  const SignupClick = () => {
    setopenS(true);
  };

  const loginclose = () => {
    setopen(false);
  };

  const Signclose = () => {
    setopenS(false);
  };

  const login = async () => {
    try {
      const session = await account.createEmailSession(
        loginEmail,
        loginPassword
      );
      console.log(loginEmail, loginPassword);
      console.log(setLoggedInUser(await account.get()));
      router.push("/Login");
    } catch (error) {
      setfail(true);
    }
  };

  const register = async () => {
    try {
      await account.create(ID.unique(), signupEmail, signupPassword, name);
      alert("회원가입에 성공하셨습니다. 로그인하세요!");
      setopenS(false);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <UserProvider>
      <div className="Maininput">
        <form className="ALLForm">
          <div className="LoginModal">
            <p onClick={LoginClick}>로그인하러가기</p>
            {open && (
              <div className="modal">
                <div className="modalcontent">
                  <h2>로그인</h2>
                  <div className="inputform">
                    {fail && (
                      <p>
                        등록되지 않은 사용자이거나 비밀번호가 잘못되었습니다
                      </p>
                    )}
                    <form>
                      <input
                        type="email"
                        placeholder="Email"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                      />
                    </form>
                    <form>
                      <input
                        type="password"
                        placeholder="Password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                      />
                    </form>
                    <button type="button" onClick={login}>
                      로그인
                    </button>
                    <button type="button" onClick={loginclose}>
                      나가기
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="SignupModal">
            <p onClick={SignupClick}>회원가입하러가기</p>
            {openS && (
              <div className="modal">
                <div className="modalcontent">
                  <h1>회원가입</h1>
                  <div className="inputform">
                    <form>
                      <input
                        type="email"
                        placeholder="Email"
                        value={signupEmail}
                        onChange={(e) => setSignupEmail(e.target.value)}
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        value={signupPassword}
                        onChange={(e) => setSignupPassword(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <button type="button" onClick={register}>
                        회원가입
                      </button>
                      <button type="button" onClick={Signclose}>
                        나가기
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </UserProvider>
  );
};
export default Loginpage;
