import styled from "styled-components";
import { device } from "../styles/breakpoints";

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    width: 100%;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 24rem;
    height: 36rem;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin: 1rem;
    padding: 30px;
    transform: scale(1);
    transition: all 0.25s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    
    }

    @media ${device.sm} {
        height: auto;
    }

`

export const RowStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
`

export const ProfileImage = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    position: relative;
    border-radius: 50%;
    object-position: 0% 0%;
    filter: drop-shadow(
        0px 4px 4px rgba(0, 0, 0, 0.7)
    );
`

export const Position = styled.h3`
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-style: italic;
    color: #2C2A29;
    margin: 0;
    margin-top: 2rem;
`



export const AboutProfile = styled.p`
    font-size: 1rem;
    font-family: Josefin Sans;
    font-weight: 500;
    color: #782F40;
    line-height: 1.3;
    padding-right: 32px;
    padding-left: 32px;
    margin: 0;
    text-align: center;
`

export const NameTxt = styled.p`
    font-size: 1rem;
    font-family: Josefin Sans;
    font-weight: 370;
    color: #2C2A29;

    margin: 0;

    margin-top: 5px;
    margin-bottom: 18px;
`