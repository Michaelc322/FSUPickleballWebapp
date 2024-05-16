import styled from "styled-components";

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
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 400px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin: 1rem;
    padding: 40px;

`

export const RowStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 1600px;
`

export const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    position: relative;
    border-radius: 50%;
`

export const Position = styled.h3`
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-style: italic;
    color: #782F40;
    margin: 0;
    margin-top: 2rem;
`



export const AboutProfile = styled.p`
    font-size: 1rem;
    font-family: Josefin Sans;
    font-weight: 370;
    color: #782F40;
`