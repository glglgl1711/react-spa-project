import React from "react";
import styled from "styled-components";
export default function LoginFormPage () {

    // 아이디와 비밀번호를 입력하고 , 입력한 아이디 , 비밀번호가 (아이디 : test , 비밀번호 : 1234 ) 일 경우,
    // alert('success') , 아닐 경우에는 alert('error') 가 뜨도록 만들면 됨.
    function LoginCheck () {

    }

    return(
        <>
        <h2>로그인 영역</h2>

        <LoginElement>
            아이디 : <input type="text" />
        </LoginElement>

        <LoginElement>
            비밀번호 : <input type="password" />
        </LoginElement>

        <button onClick={()=>LoginCheck()}>
            로그인 체크
        </button>
        </>
    )
}

const LoginElement = styled.div`
    margin-bottom : 20px;
`;