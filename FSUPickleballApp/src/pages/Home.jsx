import React from 'react'
import '../styles/home.css'
import styled from 'styled-components'
import {Card, CardContainer, ProfileImage, RowStack, AboutProfile, Position, NameTxt} from '../Components/CardComponents'
import {BreakLine} from '../Components/Footer'
import { device } from '../styles/breakpoints'

const HeaderText = styled.h1`
  color: #2C2A29;
  font-family: Poppins;
`

const Section = styled.section`
    display: flex;
    width: 100%;
    align-items: center;
    background-color: #ffffff;
    height: 100%;
    flex-direction: column;
`

const Container = styled.div`
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const HStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    position: absolute;
    top: 37%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 900px;

    @media ${device.md} {
      width: 100%;
      text-align: center;

    }
`
const HeaderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0% 0%;
  filter: blur(2px);


`

const BgImageContainer = styled.div`
  width: 100%;
  height: 600px;
  box-shadow: 0px 0px 1rem black inset;
`

const MainText = styled.h3`
    font-size: 3rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    color: #ffffff;
    padding-right: 50px;
    text-shadow: 0px 2px 2.5px rgba(0, 0, 0, 0.8);
    margin: 0;

    @media ${device.md} {
      padding-right: 0px;
      
    }
`

const SubText = styled.h4`
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    color: #ffffff;
    align-self: center;
    text-shadow: 0px 2px 2.5px rgba(0, 0, 0, 0.8);
    margin: 0;
    i {
        margin-right: 13px;
        font-size: 2rem;
    
    }
`


const Home = () => {
  return (
  <>

    <BgImageContainer>
      <HeaderImage src='./images/peopleplaying.jpg'></HeaderImage>

      <HStack>
        <MainText>Florida State University Pickleball</MainText>
        <SubText><i class="fa-solid fa-location-dot"></i>Tallahassee, FL</SubText>
      </HStack>
    </BgImageContainer>
    <Section id="one">
      <Container className="home-container">
        <HeaderText>section 1 (who we are)</HeaderText> 
      </Container>
    </Section>

    <Section id="two">
      <Container className="home-container">
        <HeaderText>Serve, Rally, Connect: Meet the Pickleball Board!</HeaderText>
        <BreakLine/>
        <CardContainer>
          <RowStack>
            <Card>
              <ProfileImage src ="./images/finaCropped2.jpg"/>
              <Position>President</Position>
              <AboutProfile>
                placeholder text
              </AboutProfile>
            </Card>
            <Card>
              <ProfileImage src ="./images/bella.jpg"/>
              <Position>Vice President</Position>
              <AboutProfile>
                placeholder text
              </AboutProfile>
            </Card>
            <Card>
              <ProfileImage src ="./images/zakCropped.png"/>
              <Position>Treasurer</Position>
              <AboutProfile>
                placeholder text
              </AboutProfile>
            </Card>
            <Card>
              <ProfileImage src ="./images/josh.JPEG"/>
              <Position>Social Media</Position>
              <NameTxt>Josh Phillips</NameTxt>
              <AboutProfile>
                Hi! My name is Josh Phillips and I am the social media captain for the FSU Pickleball Club.
                I am a senior and will be graduating in 2025 with a degree in Marketing. I started playing pickleball
                in January of 2023 and I use an Engage Pursuit Pro 1 paddle. I am also an ambassador for Engage Pickleball,
                so if you need a new paddle, hit me up :)
              </AboutProfile>
            </Card>
            <Card>
              <ProfileImage src ="./images/isaiah.jpg"/>
              <Position>Risk Management</Position>
              <AboutProfile>
                placeholder text
              </AboutProfile>
            </Card>
            <Card>
              <ProfileImage src ="./images/blank-profile-picture-973460_1280.png"/>
              <Position>Sports Chair</Position>
              <AboutProfile>
                placeholder text
              </AboutProfile>
            </Card>
            <Card>
              <ProfileImage src ="./images/blank-profile-picture-973460_1280.png"/>
              <Position>Merch Chair</Position>
              <AboutProfile>
                placeholder text
              </AboutProfile>
            </Card>
            <Card>
              <ProfileImage src ="./images/blank-profile-picture-973460_1280.png"/>
              <Position>Community Outreach</Position>
              <AboutProfile>
                placeholder text
              </AboutProfile>
            </Card>
            <Card>
              <ProfileImage src ="./images/blank-profile-picture-973460_1280.png"/>
              <Position>Fundraising</Position>
              <AboutProfile>
                placeholder text
              </AboutProfile>
            </Card>
            <Card>
              <ProfileImage src ="./images/blank-profile-picture-973460_1280.png"/>
              <Position>Writer</Position>
              <AboutProfile>
                placeholder text
              </AboutProfile>
            </Card>

          </RowStack>
        </CardContainer>
      </Container>
    </Section>

    <Section id="three">
      <Container className="home-container">
        <HeaderText>section 3</HeaderText>
      </Container>
    </Section>
    </>
  )
}

export default Home