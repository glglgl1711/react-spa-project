import { gql, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// gql 로그인 함수
const LOGIN_MUTATION = gql`
    mutation Login($username:String! , $password: String!) {
        login(username : $username , password: $password) {
            token
        }
    }
`;

export default function MainPage () {
    const [loginData , setData] = useState<{email : string, password : string}>({
        email : '' , password : ''
    })
    const [login , {data , loading , error }] = useMutation(LOGIN_MUTATION);

    async function handleSubmit () {
        try {

            // 이후에 스토리지나 쿠키에 저장하는 순간
            // Apollo Client의 authLink가 자동으로 이 토큰을 Authorization 헤더에 추가된다.

            const response = await login({
                variables : { username : loginData?.email , password : loginData?.password },
            });
            
        }catch(e) {
            console.error('Login Error')
        }
    }

    return(
        <>
            <div className="login-container">
                <div className="login-box">
                    <h1>로그인</h1>

                    <div className="input-group">
                        <label htmlFor="email-id">이메일 아이디</label>
                        <input
                            value={loginData.email}
                            onChange={(e) => setData((prev) => ({...prev, email : e.target.value}))}
                            type="text" 
                            id="email-id" 
                            placeholder="아이디를 입력해 주세요." 
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">비밀번호</label>
                        <input 
                            value={loginData.password}
                            onChange={(e) => setData((prev) => ({...prev, password : e.target.value}))}
                            type="password" 
                            id="password" 
                            placeholder="비밀번호를 입력해 주세요." 
                        />
                    </div>

                    <div className="options">
                        <div className="checkbox-group">
                            <input type="checkbox" id="save-id" />
                            <label htmlFor="save-id">아이디 저장</label>
                        </div>
                    </div>

                    <div className="additional-links">
                        <a href="#">아이디 찾기</a>
                        <a href="#">비밀번호 찾기</a>
                        <a href="#">회원가입</a>
                    </div>

                    <button className="login-btn" onClick={handleSubmit}>로그인</button>
                </div>
            </div>
        </>
    )
}