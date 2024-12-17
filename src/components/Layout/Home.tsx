import React from "react";
import { Outlet } from "react-router-dom";
import '../assets/scss/login.scss'
export default function Home () {
    
    return(
        <>
        <main>
            <Outlet/>
        </main>
        </>
    )
}