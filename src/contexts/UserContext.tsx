import React, { createContext, ReactNode, useEffect, useState } from "react";
import useUserInfo from "../hooks/api/useUserInfoApi";

const UserContext : any = createContext(null);

export default function UserProvider ({children} : {children : React.ReactNode}) {
    const { user , loading , error } = useUserInfo();
    const [currentUser , setCurrentUser] = useState<any>(null);

    useEffect(() => {
        if(user) {
            setCurrentUser(user);
        }
    }, [user])

    return (
        <UserContext.Provider value={{user : currentUser , loading , error}}>
            {children}
        </UserContext.Provider>
    )
}