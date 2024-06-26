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
    font-weight: 600;
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

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50rem;
    height: 30rem;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin: 1rem;
    margin-top: 3rem;
    padding: 30px;
    transform: scale(1);
    transition: all 0.25s ease-in-out;

    /* &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    
    } */

    @media ${device.md} {
      width: 80%;
      height: auto;
    }
    @media ${device.sm} {
        height: auto;
    }

`

const AboutText = styled.p`
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: #2C2A29;
    margin: 0;
    text-align: center;
    span {
      color: #CEB888;
    
    }
  
`

const AboutHeader = styled.h3`
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: #782F40;
    margin-bottom: 1rem;
    margin-top: 0;
    
  ` 

const AboutTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    &::-webkit-scrollbar-button {
      display: none;
    }
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
        <HeaderText>Who we are</HeaderText> 
        <BreakLine/>

        <AboutContainer>
          <AboutHeader>Unconquered Spirit</AboutHeader>
          <AboutText>Welcome to the home of the <span>Pickleball Club</span> at <span>Florida State University!</span> This is one of the hottest clubs on campus! The club started in January of 2023 with just a handful of enthusiasts, this club has ballooned
            into a thriving community of nearly 200 dedicated players. From hosting epic tournaments to giving back to the Tallahassee roots, pickleball at Florida State is more than just a club-this is a force to be reckoned with. This club
            is exhilarating, full of community, and skillful as they have even taken their talents to San Diego, where they left their mark on the pickleball scene! So grab a paddle and join the fun-it's time to show the world what the Pickleball Club
            at Florida State University is made of!
          </AboutText>
        </AboutContainer>

      </Container>

    </Section>

    <Section id="two">
      <Container>
        <HeaderText>Serve, Rally, Connect: Meet the Pickleball Board!</HeaderText>
        <BreakLine/>
        <CardContainer>
          <RowStack>
            <Card>
              <ProfileImage src ="./images/finaCropped2.jpg"/>
              <Position>President</Position>
              <NameTxt>Fina McCreary</NameTxt>
              <AboutTextContainer>
              <AboutProfile>
                Hi, my name is Fina McCreary. I am a senior pursuing a degree in marketing.
                Ever since I moved to Florida, I have been playing pickleball. I remember when
                I moved here in middle school being the only person in the class who did not know
                what it was. Fast forward 8 years, and now I am the club president here at FSU!
                Jenna Kaplan and Evan Nelles paved the such an amazing path for this new executive board
                to come in and bring this club to new heights; I am honored to follow them. I am so 
                grateful for the people in this club, and I hope that in my last semester we can make it the best year
                yet.
              </AboutProfile>
              </AboutTextContainer>
            </Card>
            <Card>
              <ProfileImage src ="./images/bella.jpg"/>
              <Position>Vice President</Position>
              <NameTxt>Bella Kontil</NameTxt>
              <AboutTextContainer>
              <AboutProfile>
                Hi! My name is Bella Kontil and I am the Vice President of the FSU
                Pickleball Club. I am a sophomore and will be graduating in 2027 with
                a degree in Finance. I'm beyond glad to have joined the club my freshman year
                and since then, I have made the best friends/memories within it. I am also an ambassador
                for Selkirk Sport, so if you need any pickle gear or want to demo a paddle HMU!
              </AboutProfile>
              </AboutTextContainer>
            </Card>
            <Card>
              <ProfileImage src ="./images/zakCropped.png"/>
              <Position>Treasurer</Position>
              <NameTxt>Zakary DeLeo</NameTxt>
              <AboutTextContainer>
              <AboutProfile>
                I'm a full time entrepreneur who loves pickleball! I run Tally Liquidation a bins store out of 
                Railroad Square, and when I'm not there, I'm playing pickleball!
              </AboutProfile>
              </AboutTextContainer>
            </Card>
            <Card>
              <ProfileImage src ="./images/josh.JPEG"/>
              <Position>Social Media</Position>
              <NameTxt>Josh Phillips</NameTxt>
              <AboutTextContainer>
              <AboutProfile>
                Hi! My name is Josh Phillips and I am the social media captain for the FSU Pickleball Club.
                I am a senior and will be graduating in 2025 with a degree in Marketing. I started playing pickleball
                in January of 2023 and I use an Engage Pursuit Pro 1 paddle. I am also an ambassador for Engage Pickleball,
                so if you need a new paddle, hit me up :)
              </AboutProfile>
              </AboutTextContainer>
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
              <AboutTextContainer>
              <AboutProfile>
                Hi! My name is Michael Carroll and I am a junior at FSU. I am from Orlando and I started playing pickleball after I graduated high school. I am majoring in Computer Science and fun fact: I created this website.
                
              </AboutProfile>
              </AboutTextContainer>
            </Card>
            <Card>
              <ProfileImage src ="./images/maddie.png"/>
              <Position>Writer</Position>
              <NameTxt>Maddie</NameTxt>
              <AboutTextContainer>
              <AboutProfile>
                I'm an incoming sophomore from Tampa and I am majoring in Mass/Media communications minoring in Hospitality. I started playing pickleball freshman year and I heard about this club from a friend and I love it!
              </AboutProfile>
              </AboutTextContainer>
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

      <EmbedBackground>
          <HeaderText>Most Recent Articles</HeaderText>
          <EmbedContainer src="https://thetundra.com/conventionsnews/florida-state?fbclid=PAZXh0bgNhZW0CMTEAAaaH_wUuI0WpFbDOtYdURA1rUIA5TRURuJaZ5ZwcPTQimc9m60WoZUY_GRo_aem_AaJqWDpAstYVS08ftPk2VFsRob6cGeA7xd-7jBzhwOp-O2ZRiPzLG9kZemwdc6-YCxwb9-f4g7Lr7tqSX0cVxIDB">
          </EmbedContainer>
      </EmbedBackground>


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