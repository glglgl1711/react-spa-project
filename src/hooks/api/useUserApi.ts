import { gql, useLazyQuery, useMutation } from "@apollo/client";
import React from "react";

export default function useUserAPI () {

    // 로그인
    const getUserLogin = gql`
    mutation Login($username:String! , $password: String!) {
        login(username : $username , password: $password) {
            token
        }
    }
    `;
    
    const [Login] = useMutation(getUserLogin);

    return {
        getUserLogin : Login,
    };
}