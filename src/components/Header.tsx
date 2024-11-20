import React from "react";
import styled from "styled-components";

// styled-components 를 활용한 css 설계
// 1. npm install styled-components
// 2. import styled from "styled-components";
// 3. 아래와 같이 css 구성

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