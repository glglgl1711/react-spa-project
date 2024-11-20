import React from "react";
import styled from "styled-components";

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
