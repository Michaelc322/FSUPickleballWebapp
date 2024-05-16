import { Box, FooterContainer, FooterLink, Socials } from "./FooterComponents"
import styled from "styled-components"

const HStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
    
`
const BreakLine = styled.div`
    width: 400px;
    border-bottom: 1px solid #cfcfcf;
`
const FootHeader = styled.h1`
    font-size: 1.7rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    text-transform: uppercase;

    color: #782F40;
    width: 200px;
    border-bottom: 2px solid #782F40;
`

const FooterPanel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
    padding: 1rem;
    width: 300px;
    text-align: center;
`
const Line = styled.div`
    border-left: 1px solid black;
    max-height: 100px;
`

const Sponsor = styled.img`
    width: 150px;
    height: 150px;
`

const SponsorBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
`
const Credit = styled.a`
    color: #d1d1d1;
    font-size: 1.3rem;
    transition: color 0.3s ease-in-out;
    text-decoration: none;
    &:hover{
        color: #CEB888;
    }
    position: absolute;
    right: 5px;

 `
function Footer(){
    return (
      <>
        <Box>
            <FooterContainer>
                <HStack>
                    <FooterPanel>
                        <FootHeader>Contact</FootHeader>


                        
                    </FooterPanel>

                    <FooterPanel>
                        <FootHeader>Socials</FootHeader>
                        <Socials target="_blank" href="https://www.instagram.com/fsupickleballclub/"><i class="fa-brands fa-instagram"></i> Instagram</Socials>
                        <Socials target="_blank" href="https://www.facebook.com/profile.php?id=61559821167500&mibextid=LQQJ4d"><i class="fa-brands fa-facebook"></i>Facebook</Socials>
                        <Socials target="_blank" href="https://thetundra.com/conventionsnews/florida-state?fbclid=PAZXh0bgNhZW0CMTEAAaaH_wUuI0WpFbDOtYdURA1rUIA5TRURuJaZ5ZwcPTQimc9m60WoZUY_GRo_aem_AaJqWDpAstYVS08ftPk2VFsRob6cGeA7xd-7jBzhwOp-O2ZRiPzLG9kZemwdc6-YCxwb9-f4g7Lr7tqSX0cVxIDB"><i class="fa-solid fa-newspaper"></i>thetundra.com</Socials>
                        
                    </FooterPanel>
                </HStack>

            </FooterContainer>
            <BreakLine/>
            <SponsorBox>
                <Sponsor src="\src\images\blooballzlogo.png"/>
                <Sponsor src="\src\images\prettypbcologo.png"/>
            </SponsorBox>

        </Box>
      </>
    )
  }
  
  export default Footer