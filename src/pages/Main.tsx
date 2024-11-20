import React from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage () {
    const navigate = useNavigate()
    return(
        <>
            <h2>메인 페이지</h2>
            <button onClick={()=>navigate('input-form')}>입력 Form</button>
        </>
    )
}