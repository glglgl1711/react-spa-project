import React from "react";
import styled from "styled-components";

export default function Header () {
    
    return(
        <>
        <HeaderContainer>
            <Title>Header 영역</Title>
        </HeaderContainer>
        </>
    )
}

const HeaderContainer = styled.header`
    background-color: gray;
    text-align: center;
    padding: 10px 0;
`;
const Title = styled.h2`
    color: white;
`;