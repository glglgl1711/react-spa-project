import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
interface Props { auth : boolean }
export default function Layout ({ auth } : Props) {

    // 로그인이 되어있는지 , 아닌지 검증한 후 차별화되도록 화면 설계

    return(
        <>
        { auth && <Header/> }
            <Outlet/>
        { auth && <Footer/> }
        </>
    )
}