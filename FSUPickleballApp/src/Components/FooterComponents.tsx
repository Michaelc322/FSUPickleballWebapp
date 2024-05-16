import styled from "styled-components";
 
export const Box = styled.div`
    background: #f0f0f0;
    // position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
 
`;
 
export const FooterContainer = styled.div`
    padding: 0px 30px;
    align-items: center;
    display: flex;
    justify-content: space-between;
`;
 
 export const Socials = styled.a`
    color: #782F40;
    font-size: 1.3rem;
    transition: color 0.3s ease-in-out;
    font-family: roboto;
    margin-bottom: 10px;
    text-decoration: none;
    &:hover{
        color: #CEB888;
    }

    i{
        margin-right: 10px;
    
    }
 `

export const FooterLink = styled.a`

    margin: 20px;
    font-size: 18px;
    text-decoration: none;
 
    &:hover {
        color: green;
        transition: 200ms ease-in;
    }
`;
 
export const Heading = styled.p`
    font-size: 24px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
`;