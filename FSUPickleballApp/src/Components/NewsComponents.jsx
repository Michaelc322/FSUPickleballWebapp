import styled from 'styled-components'

export const EmbedBackground = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40rem;
    background-color: #f0f0f0;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    /* transform: scale(1);
    transition: all 0.25s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    
    } */

`
export const SectionThreeRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 75%;
`
export const CalendarHolder = styled.div`
    text-align: center;
    width: 30rem;
    height: 40rem;
    background-color: #f0f0f0;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 100px;
    /* transform: scale(1);
    transition: all 0.25s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    
    } */

`

export const EventContainer = styled.div`
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: #d4d4d4 transparent;
    text-align: left;
    height: 32rem;
    padding-right: 30px;
    padding-left: 30px;
`


export const EmbedContainer = styled.embed`
  width: 80%;
  height: 70%;
  border-radius: 10px;
  `



export const Clickable = styled.a`
    text-decoration: none;
    cursor: pointer;
    width: 40rem;
    margin-bottom: 100px;
`

export const Event = styled.div`
    display: block;
    padding: 10px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5rem;
    background-color: #dddddd;
    margin-bottom: 1rem;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

    h1 {
        font-size: 1rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        color: #2C2A29;
        margin: 0;
    }

    p{
        font-size: 0.8rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        color: #2C2A29;
    }
`