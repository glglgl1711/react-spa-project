import React from "react";
import styled from "styled-components";

// styled-components 를 활용한 css 설계
// 1. npm install styled-components
// 2. import styled from "styled-components";
// 3. 아래와 같이 css 구성

export default function Footer () {

    return(
        <>
        <FooterContainer>
            <Title>Footer 영역</Title>
        </FooterContainer>
        </>
    )
}

const FooterContainer = styled.footer`
    background-color: gray;
    text-align: center;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    margin : 0;
    width : 100%;
`;

const Title = styled.h2`
    color : white;
`;
