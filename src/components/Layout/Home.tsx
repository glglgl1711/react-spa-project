import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import '../assets/scss/login.scss'
import '../assets/scss/Sidebar.scss'
import useUserAPI from "../../hooks/api/useUserApi";
export default function Home () {
    
    return(
        <>
        <main>
            <Outlet/>
        </main>
        </>
    )
}