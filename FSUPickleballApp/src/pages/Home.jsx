import React from 'react'
import '../styles/home.css'
import styled from 'styled-components'
import {Card, CardContainer, ProfileImage, RowStack, AboutProfile, Position, NameTxt} from '../Components/CardComponents'
import {BreakLine} from '../Components/Footer'
import { device } from '../styles/breakpoints'
import { EmbedContainer, EmbedBackground, Clickable, CalendarHolder, SectionThreeRow, Event, EventContainer } from '../Components/NewsComponents'
import { useEffect, useState } from 'react'
import { gapi } from 'gapi-script'


const HeaderText = styled.h1`
  color: #2C2A29;
  font-family: Poppins;
  text-decoration: none;
`
const EventHeaderText = styled.h1`
  margin: 0;
  padding: 27px;
  color: #2C2A29;
  font-family: Poppins;
  text-decoration: none;
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
  display: flex;
  background-color: black;
  overflow: hidden;
  flex: 1;
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
function formatDateTime(dateTimeString) {
  const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
  };

  const date = new Date(dateTimeString);

  // Create a formatter for the date
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  return formattedDate;
}

const Divider = styled.div`

  width: 100%;
  height: 1px;
  background-color: #b3b3b3;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const Home = () => {
  const calendarID = import.meta.env.VITE_APP_CALENDAR_ID
  const apiKey = import.meta.env.VITE_APP_GOOGLE_API_KEY
  const [events, setEvents] = useState([])
  const getEvents = (calendarID, apiKey) => {
    function initiate() {
        gapi.client
            .init({
                apiKey: apiKey,
            })
            .then(function () {
                return gapi.client.request({
                    path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
                })
            })
            .then(
                (response) => {
                    let events = response.result.items
                    setEvents(events)
                    console.log(response.result.items);
                },
                function (err) {
                    return [false, err]
                }
            )
    }
    gapi.load('client', initiate)
}

useEffect(() => {
    const events = getEvents(calendarID, apiKey)
    setEvents(events)
}, [])
  



  return (
  <>

    <BgImageContainer>
      <HeaderImage src='./images/goodgame.jpg'></HeaderImage>
      <HeaderImage src='./images/engagepaddles.jpg'></HeaderImage>
      <HeaderImage src='./images/memberstogether.jpg'></HeaderImage>
      <HeaderImage src='./images/nationals.jpg'></HeaderImage>

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
              <ProfileImage src ="./images/Michael.jpg"/>
              <Position>Sports Chair</Position>
              <NameTxt>Michael Carroll</NameTxt>
              <AboutProfile>
                Hi! My name is Michael Carroll and I am a junior at FSU. I am from Orlando and I started playing pickleball after I graduated high school. I am majoring in Computer Science and fun fact: I created this website.
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
              <ProfileImage src ="./images/maddie.png"/>
              <Position>Writer</Position>
              <NameTxt>Maddie</NameTxt>
              <AboutProfile>
                I'm an incoming sophomore from Tampa and I am majoring in Mass/Media communications minoring in Hospitality. I started playing pickleball freshman year and I heard about this club from a friend and I love it!
              </AboutProfile>
            </Card>

          </RowStack>
        </CardContainer>
      </Container>
    </Section>

    <Section id="three">
      <Container className="home-container">
        <HeaderText>Keep up with the latest!</HeaderText>
      </Container>
      <SectionThreeRow>
      <Clickable href="https://thetundra.com/conventionsnews/florida-state?fbclid=PAZXh0bgNhZW0CMTEAAaaH_wUuI0WpFbDOtYdURA1rUIA5TRURuJaZ5ZwcPTQimc9m60WoZUY_GRo_aem_AaJqWDpAstYVS08ftPk2VFsRob6cGeA7xd-7jBzhwOp-O2ZRiPzLG9kZemwdc6-YCxwb9-f4g7Lr7tqSX0cVxIDB">

      <EmbedBackground>
          <HeaderText>Most Recent Articles</HeaderText>
          <EmbedContainer src="https://thetundra.com/conventionsnews/florida-state?fbclid=PAZXh0bgNhZW0CMTEAAaaH_wUuI0WpFbDOtYdURA1rUIA5TRURuJaZ5ZwcPTQimc9m60WoZUY_GRo_aem_AaJqWDpAstYVS08ftPk2VFsRob6cGeA7xd-7jBzhwOp-O2ZRiPzLG9kZemwdc6-YCxwb9-f4g7Lr7tqSX0cVxIDB"></EmbedContainer>

      </EmbedBackground>
      </Clickable>

      <CalendarHolder>
        <EventHeaderText>Upcoming Events</EventHeaderText>
        <EventContainer>
        {events?.map((event) => (
          <>
            <Event key={event.id}>
              <h1>{event.summary}</h1>
              <p>{formatDateTime(event.start.dateTime)} - {formatDateTime(event.end.dateTime).split('at')[1]}</p>
            </Event>
            <Divider/>
            </>

        ))}
        </EventContainer>
      </CalendarHolder>
      </SectionThreeRow>

    </Section>
    </>
  )
}

export default Home